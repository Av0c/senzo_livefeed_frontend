import React from 'react';
import { Link } from 'react-router';

export default class SettingsArea extends React.Component {
  locationEditClicked(e){
    e.stopPropagation();
  }
  render () {
    let paddingValue = (this.props.step)*25;
    let style = {
      paddingLeft: paddingValue
    }

    let area = this.props.area;

    let floorplanElement = '';
    let deleteElement ='';
    //todo: set areaId
    let url = 'locations/area/'+this.props.area.id+'/floorplan/add';
    if (this.props.floorplan){
      floorplanElement = <span>this.props.floorplan</span>;
      <span className='settings-editdelete-delete'
         onClick={this.props.xButtonClicked.bind(this)}>X</span>
    } else {
      floorplanElement = <span style={{color : '#E25E5A'}}>
        <Link to={url} style={{color:'#E25E5A', textDecoration:'none'}}>UPLOAD FLOOR PLAN</Link>
      </span>
    }
    return (
      <li className="settings-nav-li settings-nav-area" style={style}>
        &rarr; {area.name}
        <div className='settings-edit-delete' style={{flex:1, marginTop:'-1em'}}>
          <span className='settings-editdelete-edit'
            onClick={this.locationEditClicked.bind(this)}>{floorplanElement}</span>
          {deleteElement}
        </div>
      </li>
    )
  }
}
