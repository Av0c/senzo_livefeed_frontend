import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"

import Timestamp from "react-timestamp"
import Sensor from "components/pages/live/sensor"

import * as a from "actions/sensorsettings" // SELECT_SENSOR

class SensorList extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	openEdit(sensor) {
		this.props.dispatch(a.selectSensorButton(sensor));
		this.props.openEditModal();
	}
	openDelete(sensor) {
		this.props.dispatch(a.selectSensorButton(sensor));
		this.props.openDeleteModal();
	}
	filter(sensor) {
		var ss = this.props.sensorMap.get(sensor.id);
		if (!ss) {
			return false;
		}
		var status = "free";
		if (ss.registered) {
			if (ss.faulty) {
				status ="faulty";
			} else {
				if (ss.inuse) {
					status = "inuse";
				} else if (ss.standby) {
					status = "standby";
				}
			}
		} else {
			status = "unregistered"
		}
		switch (this.props.statusFilter.code) {
			case "ALL":
				return true;
			case "ONLINE":
				return status=="free" || status=="inuse" || status=="standby";
			case "OFFLINE":
				return status=="faulty";
			case "UNREG":
				return status=="unregistered";
			default:
				return false;
		}
	}

	listSensors(root, res) {
		var self = this;
		if (root) {
			if (root.type=="sensor" && this.filter(root)) {
				res.push(root);
			} else {
				root.children.map((x) => self.listSensors(x, res));
			}
		}
	}

	render() {
		var sensors = [];
		this.listSensors(this.props.root, sensors);
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6">
						<table className="table sensor-settings-table"><tbody>
							<tr>
								<td> </td>
								<td> <strong>MAC Address</strong></td>
								<td> <strong>Name</strong></td>
								<td><strong>Offline Since</strong></td>
								<td colSpan="3">   </td>
							</tr>
							{
								sensors.map((x, idx) => {
									var ss = Object.assign({}, this.props.sensorMap.get(x.id));
									if (!ss) {
										return null;
									}
									ss.xpercent = 50;
									ss.ypercent = 50;
									var par = this.props.nodeMap[x.id].parent;
									return (
										<tr key={idx} className={this.props.selectedSensor.id == x.id && "bold"}>
											<td className="color-note-td"><Sensor sensor={ss}/></td>
											<td>{ss.macaddress}</td>
											<td>{ss.name}</td>
											<td><Timestamp time={ss.lastonl}/></td>
											<td className="button-holder">
												<div className="button" onClick={() => this.openEdit(ss)}>Edit</div>
											</td>
											<td className="button-holder">
												<Link className="button" to={"/live/"+par.id} target="_blank">Floorplan</Link>
											</td>
											<td className="button-holder">
												<img className="bin" onClick={() => this.openDelete(ss)} src="/src/assets/images/bin.svg"/>
											</td>
										</tr>
									);
								})
							}
						</tbody></table>
					</div>
				</div>
			</div>
		);
	}
}


function mapDispatchToProps(dispatch) {
	return  {
		dispatch
	};
}

function mapStateToProps(state) {
	return {
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(SensorList);
