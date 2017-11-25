import React from 'react';
import { connect } from 'react-redux';
import Sensor from './sensor';
import MeetingRoom from './meetingroom';
import config from 'config';
import {Link} from 'react-router'

import {
	saveSensor,
	removeSensor,
	fetchSensorFloorplanInfo,
	updateSensor,
	fetchImage,
	selectSensor
} from 'actions/floorplan';

export class FloorPlan extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			imageError: false
		};
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


	render() {
		var MRs = [], sensors = [];
		this.listSensorByRoomType(this.props.root, config.room.OPENAREA, sensors);
		if (this.props.groupMR) {
			this.listNodeByType(this.props.root, config.room.MEETINGROOM, MRs);
		} else {
			this.listSensorByRoomType(this.props.root, config.room.MEETINGROOM, sensors);
		}

		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<div className="floorplan-container">
							{
								(!this.state.imageError) ? ([
									<img src={this.props.imageURL} alt="Floorplan" className="floorplan-image" onError={this.imageError.bind(this)} key="image" draggable="false"/>,
									sensors.map((sensor) => {
										return (
											<Sensor
												sensor={sensor}
												viewFilter={this.props.viewFilter}
												selectedSensor={this.props.selectedSensor}
												key={sensor.id}
											/>
										);
									}),
									MRs.map((node) => {
										return (
											<MeetingRoom
												node={node}
												viewFilter={this.props.viewFilter}
												selectedMR={this.props.selectedSensor}
												key={node.id}
												sensorMap={this.props.sensorMap}
											/>
										);
									}),
								]) : (
									<h1>Oops ! No image uploaded ?? :D ??</h1>
								)						
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {

	}
}
function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(FloorPlan);
