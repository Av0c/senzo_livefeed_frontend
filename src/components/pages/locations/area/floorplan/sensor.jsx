import React from 'react';
import { connect } from 'react-redux';
import {selectSensor} from 'actions/floorplan'

export default class Sensor extends React.Component{
  constructor(props){
    super(props);
  }

  onClick(e){
    e.stopPropagation();
    this.props.selectSensor(this.props.sensor);
  }

  render(){
    let sensor = this.props.sensor;

    let style ={left: sensor.xPercent + '%', top: sensor.yPercent + '%'};
    let className='point';
    if (this.props.selectedSensor && (this.props.selectedSensor.id == sensor.id)){
      className += ' selected'
    }
    if (sensor.faulty) {
      className +=' faulty';
    }
    if (sensor.inuse) {
      className += ' inuse';
    }
    return(
      <div className={className}
        key={sensor.id} style={style}
        onClick={this.onClick.bind(this)}>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectSensor: (id) => dispatch(selectSensor(id))
  }
}
export default connect(null, mapDispatchToProps)(Sensor);

