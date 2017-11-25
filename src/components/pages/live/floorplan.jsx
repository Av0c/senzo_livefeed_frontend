import React from 'react';
import { connect } from 'react-redux';
import Sensor from './sensor';
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
					if(child.type==type.code) {
						res.push(child);
					}
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
		var MRs = [], OAsensors = [];
		this.listNodeByType(this.props.root, config.room.MEETINGROOM, MRs);
		this.listSensorByRoomType(this.props.root, config.room.OPENAREA, OAsensors);
		this.listSensorByRoomType(this.props.root, config.room.MEETINGROOM, OAsensors);

		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<div className="floorplan-container">
							{
								(!this.state.imageError) ? ([
									<img src={this.props.imageURL} alt="Floorplan" className="floorplan-image" onError={this.imageError.bind(this)} key="image" />,
									OAsensors.map((sensor) => {
											return (
												<Sensor sensor={sensor} viewFilter={this.props.viewFilter} selectedSensor={this.props.selectedSensor} key={sensor.id}/>
											);
									}),
									<Sensor sensor={{id: 0, xpercent: 0, ypercent: 0}}
										viewFilter={this.props.viewFilter}
										selectedSensor={this.props.selectedSensor}
										key={0}
									/>,
									<Sensor sensor={{id: 1, xpercent: 100, ypercent: 0}}
										viewFilter={this.props.viewFilter}
										selectedSensor={this.props.selectedSensor}
										key={1}
									/>,
									<Sensor sensor={{id: 2, xpercent: 0, ypercent: 100}}
										viewFilter={this.props.viewFilter}
										selectedSensor={this.props.selectedSensor}
										key={2}
									/>,
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
