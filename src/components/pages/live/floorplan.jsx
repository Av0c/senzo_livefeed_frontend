import React from 'react';
import { connect } from 'react-redux';
import Sensor from './sensor';
import Area from './area';
import config from 'config';
import { Link } from 'react-router'
import ReactTooltip from 'react-tooltip'
import SensorForm from './sensorform';

import { updateNode } from 'actions/node';
import { updateSensor, fetchImage } from 'actions/floorplan';

export class FloorPlan extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			loading: false,
			sensorForm: false,
			dragging: false,
			draggedSensor: {},
			mousePos: {},
			upFunc: {},
			moveFunc: {},
			url: "",
		};
	}
	closeSensorForm() {
		this.setState({ sensorForm: false });
	}

	openSensorForm() {
		this.setState({ sensorForm: true });
	}

	getImage(urlList, node) {
		while (node) {
			if (node.info.useownfp) {
				return urlList[node.id.toString()];
			}
			node = node.parent;
		}
		// return undefined
	}

	componentWillReceiveProps(nextProps) {
		if (this.state.loading) {
			var url = this.getImage(nextProps.images, nextProps.root)
			if (url!=this.state.url) {
				this.setState({url: url, loading: false});
			}
		}
	}

	imageError() {
		this.setState({
			loading: true,
		})
		this.props.dispatch(fetchImage(this.props.user.companyid))
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
		xpercent = Math.max(0, Math.min(100, xpercent));
		ypercent = Math.max(0, Math.min(100, ypercent));
		return {
			x: xpercent,
			y: ypercent,
		}
	}

	onMouseDownSensor(e, sensor) {
		var upFunc = (e) => this.onMouseUpSensor(e, sensor);
		var moveFunc = (e) => this.onMouseMoveSensor(e, sensor);

		var mousePos = this.getMousePos(e);
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
		window.removeEventListener("mouseup", this.state.upFunc);
		window.removeEventListener("mousemove", this.state.moveFunc);
		var reset = () => {
			var node = this.props.nodeMap[sensor.id];
			console.log("lol", node.info.xpercent, node.info.ypercent)
			this.setState({
				dragging: false,
				draggedSensor: {},
				mousePos: {},
				upFunc: {},
				moveFunc: {},
			});
		}
		if (this.props.nodeMap[sensor.id]) {
			var node = this.props.nodeMap[sensor.id];
			if (node.type=="sensor") {
				this.props.dispatch(this.moveSensor(this.state.draggedSensor, this.state.mousePos)).then(reset)
			} else {
				var newNode = {
					id: node.id,
					info: {
						name: node.info.name,
						xpercent: this.state.mousePos.x,
						ypercent: this.state.mousePos.y,
					}
				}
			 	this.props.dispatch(updateNode(newNode)).then(reset);
			}
		}
	}
	onMouseMoveSensor(e, sensor) {
		this.setState({
			mousePos: this.getMousePos(e),
		});
	}

	moveSensor(ss, pos) {
		var newSensor = {
			id: ss.id,
			xpercent: pos.x,
			ypercent: pos.y,
		}
		return updateSensor(newSensor);
	}

	listNodes(root, areas, sensors) {
		var self = this;
		if (root) {
			var isArea = (root.type=="meeting_room" && !this.props.showDetails)
			isArea |= (root.id != this.props.root.id && root.info.useownfp);
			if (isArea) {
				areas.push(root);
			} else {
				if (root.type=="sensor") {
					sensors.push(root);
				}
				if (root.children) {
					root.children.forEach((child) => {
						self.listNodes(child, areas, sensors);
					});
				}
			}
		}
	}

	render() {
		if (!this.props.root) {
			return null;
		}
		var areas = [], sensors = [];
		this.listNodes(this.props.root, areas, sensors)
		console.log(areas, sensors)
		if (!this.state.loading && !this.props.root.info.empty) {
			var url = this.getImage(this.props.images, this.props.root)
			if (url && this.props.root.info.hasfloorplan) {
				return <div className={!this.props.thumbnail ? "floorplan-container" : "floorplan-container-thumbnail"}>
					<img
						src={url}
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
						var ss = this.props.sensorMap.get(sensor.id);
						return (ss &&
							<Sensor
								key={sensor.id}

								openSensorForm={this.openSensorForm.bind(this)}
								sensor={ss}
								viewFilter={this.props.viewFilter}
								selectedSensor={this.props.selectedSensor}

								onMouseDown={(e, ss) => this.onMouseDownSensor(e, ss)}
								dragged={this.state.dragging && this.state.draggedSensor.id == sensor.id}
								draggingX={this.state.dragging && this.state.mousePos.x}
								draggingY={this.state.dragging && this.state.mousePos.y}

								thumbnail={this.props.thumbnail}
							/>
						);
					})}
					{areas.map((node) => {
						return (
							<Area
								key={node.id}
								node={node}
								selectedArea={this.props.selectedSensor}
								viewFilter={this.props.viewFilter}

								onMouseDown={(e, ss) => this.onMouseDownSensor(e, ss)}
								dragged={this.state.dragging && this.state.draggedSensor.id == node.id}
								draggingX={this.state.dragging && this.state.mousePos.x}
								draggingY={this.state.dragging && this.state.mousePos.y}


								thumbnail={this.props.thumbnail}
							/>
						);
					})}
				</div>
			} else {
				return <div className="floorplan-error">
					<br />
					<h2>Oops ! We can't find this location's floorplan...</h2>
				</div>
			}
		} else {
			return <div className="floorplan-error">
				<br />
				<h2>Loading...</h2>
			</div>
		}
	}
}

function mapStateToProps(state) {
	return {
		sensorMap: state.nodeReducer.map,
		nodeMap: state.overviewReducer.nodeMap,
		images: state.floorPlanReducer.images,
		user: state.myAccountReducer.user,
		selectedSensor: state.floorPlanSensorReducer.selectedSensor,
	}
}
function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(FloorPlan);
