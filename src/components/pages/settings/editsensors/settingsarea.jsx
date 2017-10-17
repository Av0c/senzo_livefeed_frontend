import React from 'react';
import { Link } from 'react-router';
import SettingsSensor from './settingssensor';
import { fetchSensors } from 'actions/floorplan';
import { connect } from 'react-redux';

class SettingsArea extends React.Component {

  constructor() {
    super();
    this.state = {
      open:false,
      sensors:[]
    }
  }

  xButtonClicked(sensor){
    this.props.xButtonClicked(sensor);
  }

  click(e) {
    e.stopPropagation();
    this.setState({open: !this.state.open});
    if (this.props.area.sensors.length <= 0){
      this.props.dispatch(fetchSensors(this.props.area.id))
    }
  }

  render () {
    let paddingValue = (this.props.step)*25;
    let style = {
      paddingLeft: paddingValue
    }

    let area = this.props.area;
    let iconElement;
    if (this.state.open){
      iconElement = <span className='settings-minus'></span>;
    }
    else {
      iconElement = <span className='settings-plus'></span>;
    }
    let sensors = '';

    let floorPlanUrl='locations/area/'+this.props.area.id+'/floorplan/add';
    if (this.state.open){
      //display sensors
      sensors = this.props.area.sensors.map( (sensor, idx) => {
        return <SettingsSensor key={idx} sensor={sensor} step={this.props.step} area_id={area.id}
          xButtonClicked={this.xButtonClicked.bind(this)}>
          {sensor.dev_id}
        </SettingsSensor>
      })
    }
    return (
      <ul style={{paddingLeft:'0px'}}>
        <li className="settings-nav-li settings-nav-area" onClick={this.click.bind(this)} style={style}>
          {iconElement}{area.name}
          <div className='settings-edit-delete' style={{flex:1, marginTop:'-1em'}}>
            <span className='settings-editdelete-edit' name={area.name}>
              <Link to={floorPlanUrl} style={{color:'white', textDecoration:'none'}}>GO TO FLOOR PLAN VIEW &rarr;</Link></span>
          </div>
        </li>
        {sensors}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    state: state.settingsPageReducer.sensor
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SettingsArea);
