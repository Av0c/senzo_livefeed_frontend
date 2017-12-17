import React from 'react'
import { connect } from 'react-redux';
import toastr from 'toastr';
import { createSensor, removeSensor, updateSensor } from 'actions/floorplan';
import { deleteNode } from 'actions/node';
import Sensor from './sensor';

export class SensorForm extends React.Component {

  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.state = {};
  }

  submit(nodeId) {
    let sensor = Object.assign({}, this.props.selectedSensor, {
      name: this.state.name || this.props.selectedSensor.name,
      macaddress: this.state.mac || this.props.selectedSensor.macaddress
    });
    if (sensor.id) {
      this.props.dispatch(updateSensor(sensor)).then(() => {
        toastr.success(`Update sensor successfully`)
      })
        .catch(error => {
          toastr.error(error);
        });
    }
    else {
      if (this.state.name && this.state.mac) {
        this.props.dispatch(createSensor(nodeId, sensor)).then(() => {
          toastr.success(`Add new sensor successfully`)
        })
          .catch(error => {
            toastr.error(error);
          });
      }
      else {
        toastr.error("Name and MAC address must be filled");
      }
    }
    this.props.closeSensorForm();
  }

  deleteSensor(sensor) {
    this.props.dispatch(deleteNode(this.props.selectedSensor)).then(() => {
      toastr.success(`Delete sensor successfully`)
    })
      .catch(error => {
        toastr.error(error);
      });
    this.props.closeSensorForm();
  }

  createLocationOptions(options) {
    return options.map((element, index) => {
      return <option key={index} value={element.id}>{element.info.name}</option>
    });
  }

  getAllAreas(tree, options) {
    var self = this;
    if (tree.type == 'meeting_room' || tree.type == 'open_area') {
      options.push(tree);
    }
    else {
      tree.children.forEach(function (element) {
        self.getAllAreas(element, options);
      });
    }
  }

  render() {
    let options = [];
    this.getAllAreas(this.props.node, options);
    let locations = this.createLocationOptions(options);
    return (
      <div>
        <div className="point unregistered" style={this.props.mousePos} >
        </div>
        <div>
          <div className={"modal-sensorform" + (this.props.sensorForm ? "" : " closed")} onClick={this.props.closeSensorForm}></div>
          <div style={{zIndex: 1}} className={"add-account-wrapper invite-modal" + (this.props.sensorForm ? "" : " closed")}>
            <div className="modal-header">
              <button onClick={this.props.closeSensorForm} className="close">×</button>
              <h4 className="modal-title">Sensor Form</h4>
            </div>
            <div className="modal-body settings-add-location-wrapper">
              <div className="user_email">
                <label>
                  <span>MAC address </span>
                  <input type="username" id="mac" placeholder="xx:xx:xx:xx:xx:xx" value={this.state.mac || this.props.selectedSensor.macaddress} onChange={this.changeHandler.bind(this)} required />
                </label>
                <label>
                  <span>Name</span>
                  <input type="username" id="name" value={this.state.name || this.props.selectedSensor.name} onChange={this.changeHandler.bind(this)} required />
                </label>
                <div className="timezone" >
                  <label>Location</label>
                  <select value={this.state.location} id="location" onChange={this.changeHandler.bind(this)}>
                    {locations}
                  </select>
                </div>

              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-default" onClick={this.deleteSensor.bind(this)} >Remove</button>
              <button onClick={this.props.closeSensorForm} className="btn btn-default" type="button" data-dismiss="modal">Cancel</button>
              <button className="btn btn-success" type="button" onClick={() => { this.submit(this.state.location || options[0].id) }}>Confirm</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  changeHandler(e) {
    let key = e.target.id;
    let value = e.target.value;
    this.setState({ [key]: value });
  }
}

function mapStateToProps(state) {
  return {
    selectedSensor: state.floorPlanSensorReducer.selectedSensor
  }
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SensorForm);