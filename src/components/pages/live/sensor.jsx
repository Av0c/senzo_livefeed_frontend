import React from 'react';
import config from 'config';
import { connect } from 'react-redux';
import {selectSensor} from 'actions/floorplan'
import ToolTip from 'react-portal-tooltip'
import ReactTooltip from 'react-tooltip'

export class Sensor extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			tooltipOpen: false,
		}
	}
	onMouseEnter(e){
		this.setState({tooltipOpen: true})
	}
	onMouseLeave(e){
		this.setState({tooltipOpen: false})
	}
	onMouseDown(e){
		e.stopPropagation();
		e.preventDefault();
		if (typeof this.props.onMouseDown == "function") {
			this.props.onMouseDown(e, this.props.sensor);
		}
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.dragged && this.state.tooltipOpen) {
			this.setState({tooltipOpen: false})
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
			if (!this.props.thumbnail) {
				return(
					<div>
						<div className={className} style={style}
							id={"sensor"+sensor.id}
							onMouseEnter={this.onMouseEnter.bind(this)}
							onMouseLeave={this.onMouseLeave.bind(this)}
							onMouseDown={this.onMouseDown.bind(this)}
						/>
						<ToolTip active={this.state.tooltipOpen} parent={"#sensor"+sensor.id} position="right" arrow="center"
							style={{
								style: {
									background: "rgba(0,0,0,.8)",
									padding: 10,
									color: "#EEE",
									boxShadow: "5px 5px 3px rgba(0,0,0,.5)",
									borderRadius: 8,
								},
								arrowStyle: {
									color: 'rgba(0,0,0,.8)',
									borderColor: false
								}
							}}
						>
							<div>
								{sensor.name}<br/>
								{sensor.macaddress}
								{
								// <i data-tooltip="Delete" className="material-icons cursor-pointer red-500 sensor-button pull-right" onClick={() => {}}>{"delete_forever"}</i>
								// <i data-tooltip="Edit" className="material-icons cursor-pointer sensor-button pull-right" onClick={() => {}}>edit</i>
								}
							</div>
							<div>
							</div>
						</ToolTip>
					</div>
				);
			} else {
				return(
					<div>
						<div className={className} style={style}
							data-tip data-for={"sensor"+sensor.id}
							onMouseDown={this.onMouseDown.bind(this)}
						/>
						<ReactTooltip id={"sensor"+sensor.id} place="right" type="dark" effect="solid">
						{sensor.name}<br/>
						{sensor.macaddress}
						</ReactTooltip>
					</div>
				);
			}
		}
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	}
}
export default connect(null, mapDispatchToProps)(Sensor);

