import React from 'react';
import { Link } from 'react-router';

export default class SettingsSensor extends React.Component {

  constructor() {
    super();
    this.state = {
      open:false
    }
  }

  click(e) {
    e.stopPropagation();
    this.setState({open: !this.state.open});
  }
  repalaceClicked(e){
    e.stopPropagation();
  }
  xButtonClicked(e){
    this.props.xButtonClicked(this.props.sensor);
    e.stopPropagation();
  }
  render () {
    let paddingValue = (this.props.step)*25;
    let style = {
      paddingLeft: paddingValue,
      justifyContent:'space-between'
    }

    let sensor = this.props.sensor;
    let replaceUrl=`locations/area/${this.props.area_id}/sensor/${sensor.dev_id}`;

    let sensorStatusText  =  '';
    let sensorStatusIcon  =  '';
    if (sensor.faulty == 1){
      sensorStatusIcon = <span style={{color:'#E25E5A',left:'0em'}}> &bull;</span>
      sensorStatusText = <span style={{marginLeft:'1em', fontWeight:'bold'}}> NOT WORKING </span>
    }
    else {
      sensorStatusIcon  = <span style={{color:'#2FCE84',left:'0em'}}>&bull;</span>
      sensorStatusText = <span style={{marginLeft:'1em'}}> </span>
    }
    return (
        <li className="settings-nav-li settings-nav-area" onClick={this.click.bind(this)} style={style}>
          <div style={{flexGrow:2}}>{sensor.dev_id}</div>
          <div style={{flex: 7,flexGrow: 5,display:'flex',justifyContent:'space-between'}}>
            <div>
              {sensorStatusIcon}
              {sensorStatusText}
            </div>
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <span className='settings-editdelete-edit'
                onClick={this.repalaceClicked.bind(this)}>
                <Link  style={{color:'#E25E5A', textDecoration:'none'}} to={replaceUrl}>REPLACE SENSOR</Link></span>
              <span className='settings-editdelete-delete'
                onClick={this.xButtonClicked.bind(this)}>X</span>
            </div>
          </div>
        </li>
    )
  }
}
