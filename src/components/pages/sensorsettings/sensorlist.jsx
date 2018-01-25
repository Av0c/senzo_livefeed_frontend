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

	getStatus(ss) {
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
		return status
	}

	filter(sensor) {
		var ss = this.props.sensorMap.get(sensor.id);
		if (!ss) {
			return false;
		}
		var status = this.getStatus(ss);
		switch (this.props.statusFilter.code) {
			case config.sensorStatusFilter[0].code: // All
				return true;
			case config.sensorStatusFilter[1].code: // Online
				return status=="free" || status=="inuse" || status=="standby";
			case config.sensorStatusFilter[2].code: // Offine
				return status=="faulty" || status=="unregistered";
			// case "UNREG":
			// 	return status=="unregistered";
			default:
				return false;
		}
	}

	OfflineSince(ss) {
		if (!ss) {
			return null;
		}
		var status = this.getStatus(ss);
		switch (status) {
			case "faulty" :
				return <Timestamp time={ss.lastonl}/>;
			default :
				return <span className="dash-dash">--</span>;
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
				<div className="sensors-section">
					<div className="popup-container">
						<table className="flat-table sensor-table"><tbody>
							<tr className="table-header-row">
								<th></th>
								<th>MAC ADDRESS</th>
								<th>NAME</th>
								<th>LOCATION</th>
								<th>OFFLINE SINCE</th>
								<th colSpan="3"></th>
							</tr>
							{
								sensors.map((x, idx) => {
									var ss = Object.assign({}, this.props.sensorMap.get(x.id));
									console.log(this.props);
									if (!ss) {
										return null;
									}
									ss.xpercent = 50;
									ss.ypercent = 50;
									var par = this.props.nodeMap[x.id].parent;
									return (
										<tr key={idx} className={this.props.selectedSensor.id == x.id && "bold"}>
											<td className="sensor-color-note-td"><Sensor sensor={ss}/></td>
											<td>{ss.macaddress}</td>
											<td><Link to={"/live/"+par.id} target="_blank">{ss.name}</Link></td>
											<td>{par.info.name}</td>
											<td>{this.OfflineSince(ss)}</td>

											<td className="button-holder">
												<div className="button" onClick={() => this.openEdit(ss)}>Edit</div>
											</td>
											<td className="button-holder">
												<Link className="button" to={"/live/"+par.id} target="_blank">Floorplan</Link>
											</td>
											<td className="button-holder" style={{paddingLeft: "0px"}}>
												<i className="material-icons cursor-pointer" style={{color: "#F44336", fontSize: "2em"}} onClick={() => this.openDelete(ss)}>{"delete_forever"}</i>
											</td>
										</tr>
									);
								})
							}
						</tbody></table>
					</div>
				</div>
				<table className="popup-color-note"><tbody>
						<tr>
							<td>
								<span className="popup-color-note-td red">Occupied</span>
							</td>
						</tr>
						<tr>
							<td>
								<span className="popup-color-note-td yellow">Standby</span>
							</td>
						</tr>
						<tr>
							<td>
								<span className="popup-color-note-td green">Unoccupied</span>
							</td>
						</tr>
						<tr>
							<td>
                                {/* Spacing */}
							</td>
						</tr>
						<tr>
							<td>
								<span className="popup-color-note-td blue">Offline</span>
							</td>
						</tr>
						<tr>
							<td>
								<span className="popup-color-note-td brown">Unregistered</span>
							</td>
						</tr>
				</tbody></table>
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
