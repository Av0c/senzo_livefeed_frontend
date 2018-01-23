import React from 'react';
import { connect } from 'react-redux';
import Sensor from './sensor';
import MeetingRoom from './meetingroom';
import config from 'config';
import { Link } from 'react-router'
import ReactTooltip from 'react-tooltip'
import SensorForm from './sensorform';
import ColorNote from "components/common/popupcolornote"

import * as a from 'actions/floorplan';
import { updateSensor } from 'actions/floorplan';

export class FloorPlan extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			imageError: false,
			sensorForm: false,
			dragging: false,
			draggedSensor: {},
			mousePos: {},
			upFunc: {},
			moveFunc: {},
		};
	}
	closeSensorForm() {
		this.setState({ sensorForm: false });
	}

	openSensorForm() {
		this.setState({ sensorForm: true });
	}

	listSensorByRoomType(root, roomType, res) {
		var self = this;
		if (root) {
			if (root.type == roomType.code) {
				root.children.forEach((child) => {
					if (child.type == "sensor") {
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
			if (root.type == type.code) {
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
		this.setState({ mousePos: { top: ypercent, left: xpercent }, sensorForm: true });
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
		var imageElement = this.refs['floorplan-image'];
		var containerX = imageElement.offsetWidth;
		var containerY = imageElement.offsetHeight;
		var xpercent = (mouseX / containerX) * 100;
		var ypercent = (mouseY / containerY) * 100;
		return {
			x: xpercent,
			y: ypercent,
		}
	}

	onMouseDownSensor(e, sensor) {
		var upFunc = (e) => this.onMouseUpSensor(e, sensor);
		var moveFunc = (e) => this.onMouseMoveSensor(e, sensor);

		var mousePos = this.getMousePos(e);
		console.log(">>>WTF")
		this.setState({
			dragging: true,
			draggedSensor: sensor,
			mousePos: mousePos,
			upFunc: upFunc,
			moveFunc: moveFunc,
		})
		window.addEventListener("mouseup", upFunc);
		window.addEventListener("mousemove", moveFunc);
	}
	onMouseUpSensor(e, sensor) {
		e.stopPropagation();
		console.log("WTF")
		window.removeEventListener("mouseup", this.state.upFunc);
		window.removeEventListener("mousemove", this.state.moveFunc);
		this.props.dispatch(this.moveSensor(this.state.draggedSensor, this.state.mousePos)).then(() => {
			console.log("done");
			this.setState({
				dragging: false,
				sensor: {},
				mousePos: {},
				upFunc: {},
				moveFunc: {},
			});
		})
	}
	onMouseMoveSensor(e, sensor) {
		this.setState({
			mousePos: this.getMousePos(e),
		});
	}

	moveSensor(ss, pos) {
		console.log(ss, pos);
		var newSensor = {
			id: ss.id,
			xpercent: pos.x,
			ypercent: pos.y,
		}
		console.log(newSensor);
		return updateSensor(newSensor);
	}

	render() {
		var MRs = [], sensors = [];
		this.listSensorByRoomType(this.props.root, config.room.OPENAREA, sensors);
		if (this.props.groupMR && this.props.viewFilter != config.viewFilter.MAINTENANCE) {
			this.listNodeByType(this.props.root, config.room.MEETINGROOM, MRs);
		} else {
			this.listSensorByRoomType(this.props.root, config.room.MEETINGROOM, sensors);
		}
		return (
			<div className="container-fluid">
				<ColorNote />
				{(!this.props.root.info.empty) ? (
					(this.props.root.info.hasfloorplan) ? (
						<div className="floorplan-container">
							<img
								src={this.props.imageURL}
								alt="Floorplan"
								className="floorplan-image"
								ref="floorplan-image"
								onError={this.imageError.bind(this)}
								draggable="false"
								// onClick={this.imageClick.bind(this)}
								key="image"
							/>
							{false && this.state.sensorForm && <SensorForm node={this.props.root} sensorForm={this.state.sensorForm} closeSensorForm={this.closeSensorForm.bind(this)} mousePos={this.state.mousePos} />}
							{sensors.map((sensor) => {
								return (
									<Sensor
										key={sensor.id}

										openSensorForm={this.openSensorForm.bind(this)}
										sensor={sensor}
										viewFilter={this.props.viewFilter}
										selectedSensor={this.props.selectedSensor}

										onMouseDown={(e, ss) => this.onMouseDownSensor(e, ss)}
										dragged={this.state.dragging && this.state.draggedSensor.id == sensor.id}
										draggingX={this.state.dragging && this.state.mousePos.x}
										draggingY={this.state.dragging && this.state.mousePos.y}
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
								<br />
								<h2>Oops ! No floor plan uploaded for this location...</h2>
							</div>
						)
				) : (
						<div className="floorplan-error">
							<br />
							<h2>Loading...</h2>
						</div>
					)}
			</div>
		);
	}
}

function mapStateToProps(state) {
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
