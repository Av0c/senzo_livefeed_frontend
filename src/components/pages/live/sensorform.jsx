import React from 'react'
import { connect } from 'react-redux';
import toastr from 'toastr';
import { createSensor, removeSensor, updateSensor } from 'actions/floorplan';

export class SensorForm extends React.Component {

  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {
    //this.setState(this.props.sensor)
  }
  componentWillReceiveProps(nextProps) {
    //this.setState(nextProps.sensor)
  }

  submit() {
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
        this.props.dispatch(createSensor(this.props.nodeId, sensor)).then(() => {
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

  render() {
    return (
      <div>
        <div>
          <div className={"modal-sensorform" + (this.props.sensorForm ? "" : " closed")} onClick={this.props.closeSensorForm}></div>
          <div className={"add-account-wrapper invite-modal" + (this.props.sensorForm ? "" : " closed")}>
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
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-default" type="button" data-dismiss="modal">Remove</button>
              <button onClick={this.props.closeSensorForm} className="btn btn-default" type="button" data-dismiss="modal">Cancel</button>
              <button className="btn btn-success" type="button" onClick={this.submit.bind(this)}>Confirm</button>
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