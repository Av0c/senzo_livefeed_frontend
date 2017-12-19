import React from 'react';
import { connect } from 'react-redux';
import Sensor from './sensor';
import MeetingRoom from './meetingroom';
import config from 'config';
import {Link} from 'react-router'
import SensorForm from './sensorform';

import {
	saveSensor,
	removeSensor,
	fetchSensorFloorplanInfo,
	updateSensor,
	fetchImage,
	selectSensor,
	moveSensor
} from 'actions/floorplan';

export class FloorPlan extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			imageError: false,
			sensorForm: false,
			mousePos: {}
		};
	}
	closeSensorForm()  {
		this.setState({sensorForm: false});
	}

	openSensorForm() {
		this.setState({sensorForm: true});
	}

	listSensorByRoomType(root, roomType, res) {
		var self = this;
		if (root) {
			if (root.type == roomType.code) {
				root.children.forEach((child) => {
					if (child.type=="sensor") {
						let sensor = this.props.sensorMap.get(child.id);
						if (sensor) {
							res.push(sensor);
						}
					}
				});
			} else {
				if (root.children) {
					root.children.forEach((child) => {
						self.listSensorByRoomType(child, roomType, res);
					});
				}
			}
		}
	}

	listNodeByType(root, type, res) {
		var self = this;
		if (root) {
			if(root.type==type.code) {
				res.push(root);
			}
			if (root.children) {
				root.children.forEach((child) => {
					self.listNodeByType(child, type, res);
				});
			}
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			imageError: false
		})
	}

	imageError() {
		this.setState({
			imageError: true
		})
	}

	imageClick(e) {
		e.stopPropagation();
		var mousePos = this.getMousePos(e);
		var imageElement = this.refs['floorplan-image'];
		var containerX = imageElement.offsetWidth;
		var containerY = imageElement.offsetHeight;
		var xpercent = ((mousePos.x) / containerX) * 100;
		var ypercent = ((mousePos.y) / containerY) * 100;
		this.setState({mousePos: {top: ypercent+'%', left: xpercent+'%'}, sensorForm: true});
		if (this.props.selectedSensor && typeof this.props.selectedSensor.id != "undefined") {
			this.props.dispatch(moveSensor(this.props.selectedSensor, xpercent, ypercent));
		} else {
			this.props.dispatch(selectSensor({
				xpercent: xpercent,
				ypercent: ypercent
			  }));
		}
	}

	getMousePos(evt) {
		var imageElement = this.refs['floorplan-image'].getBoundingClientRect();
		var mouseX = evt.clientX - imageElement.left;
		var mouseY = evt.clientY - imageElement.top;
		return {
			x: mouseX,
			y: mouseY
		}
	}

	render() {
		var MRs = [], sensors = [];
		this.listSensorByRoomType(this.props.root, config.room.OPENAREA, sensors);
		if (this.props.groupMR && this.props.viewFilter!=config.viewFilter.MAINTENANCE) {
			this.listNodeByType(this.props.root, config.room.MEETINGROOM, MRs);
		} else {
			this.listSensorByRoomType(this.props.root, config.room.MEETINGROOM, sensors);
		}
		return (
			<div className="container-fluid">
				<div className="color-note">
					<table><tbody>
					<tr>
						<td className="color-note-td"><Sensor sensor={{id: -2, inuse: true, standby: false, faulty: false, registered:true, xpercent: 50, ypercent: 50}} viewFilter={config.viewFilter.ALL} /></td>
						<td>Occupied</td>
					</tr>
					<tr>
						<td className="color-note-td"><Sensor sensor={{id: -3, inuse: false, standby: true, faulty: false, registered:true, xpercent: 50, ypercent: 50}} viewFilter={config.viewFilter.ALL} /></td>
						<td>Standby</td>
					</tr>
					<tr>
						<td className="color-note-td"><Sensor sensor={{id: -1, inuse: false, standby: false, faulty: false, registered: true, xpercent: 50, ypercent: 50}} viewFilter={config.viewFilter.ALL} /></td>
						<td>Unoccupied</td>
					</tr>
					<tr><td><br/></td><td></td></tr>
					<tr>
						<td className="color-note-td"><Sensor sensor={{id: -4, inuse: false, standby: false, faulty: true, registered:true, xpercent: 50, ypercent: 50}} viewFilter={config.viewFilter.ALL} /></td>
						<td>Offline</td>
					</tr>
					<tr>
						<td className="color-note-td"><Sensor sensor={{id: -5, inuse: false, standby: false, faulty: false, registered:false, xpercent: 50, ypercent: 50}} viewFilter={config.viewFilter.ALL} /></td>
						<td>Unregistered</td>
					</tr>
					</tbody></table>
				</div>
					{(this.props.root.info.hasfloorplan) ? (
						<div className="floorplan-container">
							<img
								src={this.props.imageURL}
								alt="Floorplan"
								className="floorplan-image"
								ref="floorplan-image"
								onError={this.imageError.bind(this)}
								draggable="false"
								onClick={this.imageClick.bind(this)}
								key="image"
							/>
							{this.state.sensorForm && <SensorForm node={this.props.root} sensorForm={this.state.sensorForm} closeSensorForm={this.closeSensorForm.bind(this)} mousePos={this.state.mousePos} />}
							{sensors.map((sensor) => {
								return (
									<Sensor
										openSensorForm={this.openSensorForm.bind(this)}
										sensor={sensor}
										viewFilter={this.props.viewFilter}
										selectedSensor={this.props.selectedSensor}
										key={sensor.id}
									/>
								);
							})}
							{MRs.map((node) => {
								return (
									<MeetingRoom
										node={node}
										viewFilter={this.props.viewFilter}
										selectedMR={this.props.selectedSensor}
										key={node.id}
										sensorMap={this.props.sensorMap}
									/>
								);
							})}
						</div>
					) : (
						<div className="floorplan-error">
							<br/>
							<h2>Oops ! No floor plan uploaded for this location...</h2>
						</div>
					)}
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		selectedSensor: state.floorPlanSensorReducer.selectedSensor
	}
}
function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(FloorPlan);
