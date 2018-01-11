import React from 'react';
import config from 'config';
import { connect } from 'react-redux';
import {selectSensor} from 'actions/floorplan'
import ReactTooltip from 'react-tooltip'

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
		if (this.props.viewFilter) {
			if (this.props.viewFilter.code=="LIVE" && (!sensor.registered || sensor.faulty)) {
				// hide broken / unregistered sensor in live view.
				className += ` hidden`;
			}
			if (this.props.viewFilter.code=="MAINTENANCE" && (sensor.registered && !sensor.faulty)) {
				// hide good and registered sensor in maintenance view.
				className += ` hidden`;
			}
		}

		console.log()
		return(
			<div>
				<div className={className} style={style}
					onClick={!sensor.dummy && this.onClick.bind(this)}
					data-tip="" data-for={!sensor.dummy && sensor.id}>
				</div>
				{
					!sensor.dummy && <ReactTooltip  place="top" type="dark" effect="float" id={sensor.id}>
						{sensor.Name}
					</ReactTooltip>
				}
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

