import React from 'react';
import config from 'config';
import { connect } from 'react-redux';
import {selectSensor} from 'actions/floorplan'

export class Sensor extends React.Component{
	constructor(props){
		super(props);
	}

	onClick(e){
		e.stopPropagation();
		this.props.selectSensor(this.props.sensor);
		this.props.openSensorForm();
	}

	render(){
		let sensor = this.props.sensor;

		let style ={left: sensor.xpercent + '%', top: sensor.ypercent + '%'};
		let className='point';
		if (this.props.selectedSensor && (this.props.selectedSensor.id == sensor.id)){
			className += ' selected'
		}
		if (sensor.registered) {
			if (sensor.faulty) {
				className +=' faulty';
			} else {
				if (sensor.inuse) {
					className += ' inuse';
				} else if (sensor.standby) {
					className += ' standby';
				}
			}
		} else {
			className += ` unregistered`
		}
		if (this.props.viewFilter==config.viewFilter.LIVE && (!sensor.registered || sensor.faulty)) {
			// hide broken / unregistered sensor in live view.
			className += ` hidden`;
		}
		if (this.props.viewFilter==config.viewFilter.MAINTENANCE && (sensor.registered && !sensor.faulty)) {
			// hide good and registered sensor in maintenance view.
			className += ` hidden`;
		}

		return(
			<div className={className} style={style}
				onClick={this.onClick.bind(this)}>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		selectSensor: (sensor) => dispatch(selectSensor(sensor))
	}
}
export default connect(null, mapDispatchToProps)(Sensor);

