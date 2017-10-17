import React from 'react';
import { connect } from 'react-redux';
import SensorForm from './sensorform';
import Sensor from './sensor';
import {Link} from 'react-router'
import {
  saveSensor,
  removeSensor,
  fetchSensorFloorplanInfo,
  updateSensor,
  fetchImage,
  selectSensor
} from 'actions/floorplan';

export default class FloorPlanIndex extends React.Component {

  componentWillMount(){
    this.props.fetchInfo(this.props.params.id);
    this.props.fetchImage(this.props.params.id);
  }

  render (){
    let formActions = {
      select: this.props.select,
      save: this.props.save,
      update: this.props.update,
      remove: this.props.remove
    };

    let dataUri = this.props.floorplan.image ? 'data:image/jpg;base64,' + this.props.floorplan.image : '';
    let imageElement = <img id="floorplan-image" ref="floorplan-image" src={dataUri} onClick={this.onClick.bind(this)} />

    if (!dataUri) {
      return <div id="floorplan-image">
        No floorplan found!
        <div className="link">
          <Link to={`locations/area/${this.props.params.id}/floorplan/add`} style={{color:'#E25E5A', textDecoration:'none'}}>UPLOAD FLOOR PLAN</Link>
        </div>
      </div>
    }

    let FormElement = this.props.map.selectedSensor ? <SensorForm sensor={this.props.map.selectedSensor} actions={formActions}/> : null;
    let selectedSensor = this.props.map.selectedSensor ? <Sensor sensor={this.props.map.selectedSensor} /> : null;
    return (
      <div className="floorplan-container">
        <div className="floorplan-image-container" onClick={this.onClick.bind(this)}>
          {imageElement}
          {this.renderChildren(this.props.map.sensors)}
          {selectedSensor}
        </div>
        {FormElement}
      </div>
    )
  }

  renderChildren(sensors) {
    return sensors.map( (sensor) => {
      return (
        <Sensor key={sensor.id} ref={sensor.id} sensor={sensor} selectedSensor={this.props.map.selectedSensor} />
      )
    })
  }

  onClick(e) {
    e.stopPropagation();
    var imageElement = this.refs['floorplan-image'];
    var mousePos = this.getMousePos(e);
    var containerX = imageElement.offsetWidth;
    var containerY = imageElement.offsetHeight;
    var clickXpercent = ((mousePos.x) / containerX) * 100;
    var clickYpercent = ((mousePos.y) / containerY) * 100;
    this.props.select({
      id: undefined,
      dev_id: '',
      area_id: parseInt(this.props.params.id, 10),
      name: '',
      xPercent: clickXpercent,
      yPercent: clickYpercent,
      faulty: false
    });

  }

  getMousePos(evt) {
    var imageElement = this.refs['floorplan-image'].getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - imageElement.left - root.scrollLeft;
    var mouseY = evt.clientY - imageElement.top - root.scrollTop;
    return {
      x: mouseX,
      y: mouseY
    }
  }

}

function mapStateToProps(state){
  return {
    map: state.floorPlanSensorReducer,
    floorplan: state.floorPlanReducer
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchInfo: (id) => dispatch(fetchSensorFloorplanInfo(id)),
    fetchImage: (id) => dispatch(fetchImage(id)),
    select: (sensor) => dispatch(selectSensor(sensor)),
    save: (sensor) => dispatch(saveSensor(sensor)),
    update: (sensor) => dispatch(updateSensor(sensor)),
    remove: (sensor) => dispatch(removeSensor(sensor))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FloorPlanIndex);
