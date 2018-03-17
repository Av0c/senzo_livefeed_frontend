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

	valueToColor(value) {
		if (value < 0 || value > 1) {
			return "#000";
		}
		var hue = 120-Math.round(120*value);

		return "hsl(" + hue + ", 100%, 60%)";
	}

	render(){
		let sensor = this.props.sensor;

		// id:2248
		// inuse:false
		// lastocc:1521274659
		// lastonl:1521306602
		// macaddress:"f8:f0:05:e3:ff:c1"
		// name:"Open desk - 155"
		// registered:true
		// standby:false
		// xpercent:59.479958
		// ypercent:25.33005

		let parentName = null;
		if (sensor.id) {
			if (this.props.nodeMap[sensor.id] && this.props.nodeMap[sensor.id].parent) {
				parentName = this.props.nodeMap[sensor.id].parent.info.name;
			}
		}
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

		// Heatmap
		var average = Math.max(Math.min(sensor.ypercent + (-5+Math.random()*10), 100), 0)/100; // 0-1
		// var glowSize = 0 + Math.ceil(average/0.2) * 5;
		var glowSize = 2;
		var glowColor = this.valueToColor(average);

		var heatStyle = Object.assign(style, {
			backgroundColor: glowColor,
			boxShadow: "0px 0px 12px " + glowSize + "px " + glowColor,
		});

		if (sensor.dummy || this.props.dragged) {
			return (
				<div className={className} style={style}/>
			);
		} else {
			if (!this.props.thumbnail) {
				return(
					<div>
						<div className="sensor-heatnode" data-tooltip={"Average: " + Math.round(average*1000)/10 + "%"} style={heatStyle}></div>
						<div className={className} style={style}
							id={"sensor"+sensor.id}
							onMouseEnter={this.onMouseEnter.bind(this)}
							onMouseLeave={this.onMouseLeave.bind(this)}
							onMouseDown={this.onMouseDown.bind(this)}
						/>
						<ToolTip active={this.state.tooltipOpen} parent={"#sensor"+sensor.id} position="right" arrow="center"
							style={{
								style: {
									background: "rgba(0,0,0,.9)",
									padding: 10,
									color: "#EEE",
									boxShadow: "0px 4px 6px rgba(0,0,0,.3)",
									borderRadius: 4,
								},
								arrowStyle: {
									color: 'rgba(0,0,0,.8)',
									borderColor: false
								}
							}}
						>
							<table><tbody><tr>
								<td>
									<div>{sensor.name}</div>
									<div>{sensor.macaddress.toUpperCase()}</div>
									<div>{parentName}</div>
								</td>
								{
									this.props.hasPermission && <td>
										<i data-tooltip="Delete" className="material-icons cursor-pointer red-500 sensor-button pull-right" onClick={() => this.props.onDelete(sensor)}>delete_forever</i>
										<i data-tooltip="Edit" className="material-icons cursor-pointer sensor-button pull-right" onClick={() => this.props.onEdit(sensor)}>edit</i>
									</td>
								}
							</tr></tbody></table>
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
						{sensor.macaddress.toUpperCase()}
						</ReactTooltip>
					</div>
				);
			}
		}
	}
}
function mapStateToProps(state) {
	return {
		nodeMap: state.overviewReducer.nodeMap,
	}
}
function mapDispatchToProps(dispatch) {
	return {
		dispatch
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Sensor);
