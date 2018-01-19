import React from 'react';
import config from 'config';
import { connect } from 'react-redux';
import {selectSensor} from 'actions/floorplan'
import ReactTooltip from 'react-tooltip'

export class Sensor extends React.Component{
	constructor(props){
		super(props);
	}

	onMouseDown(e){
		e.stopPropagation();
		e.preventDefault();
		if (typeof this.props.onMouseDown == "function") {
			this.props.onMouseDown(e, this.props.sensor);
		}
	}

	render(){
		let sensor = this.props.sensor;

		let style ={left: sensor.xpercent + '%', top: sensor.ypercent + '%'};
		if (this.props.dragged) {
			style ={left: this.props.draggingX + '%', top: this.props.draggingY + '%'};
		}
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

		if (sensor.dummy || this.props.dragged) {
			return (
				<div className={className} style={style}/>
			);
		} else {
			return(
				<div>
					<div className={className} style={style}
						data-tip data-for={"sensor"+sensor.id}
						onMouseDown={this.onMouseDown.bind(this)}
					/>
					<ReactTooltip id={"sensor"+sensor.id} place="top" type="dark" effect="solid">
					{sensor.name}
					</ReactTooltip>
				</div>
			);
		}
	}
}

function mapDispatchToProps(dispatch) {
	return {
		selectSensor: (sensor) => dispatch(selectSensor(sensor))
	}
}
export default connect(null, mapDispatchToProps)(Sensor);

