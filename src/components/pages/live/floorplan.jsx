import React from 'react';
import { connect } from 'react-redux';
import toastr from "toastr";
import math from "mathjs";

import Sensor from './sensor';
import Area from './area';
import config from 'config';
import { Link } from 'react-router'
import ReactTooltip from 'react-tooltip'
import SensorForm from './sensorform';
import FloorplanOptions from './floorplanoptions';
import Modal from "components/common/modal"

import { updateNode } from 'actions/node';
import { createSensor, removeSensor, updateSensor, fetchImage } from 'actions/floorplan';
import * as a from 'actions/floorplan';
import { fetchCustomerOverview } from 'actions/overview';
import { getSensorAverage, getParams } from 'actions/stats';
import { deleteNode, fetchLiveData, setParent } from 'actions/node';
import { selectViewFilter } from "actions/live/filter"
import enhanceWithClickOutside from "react-click-outside";
import DateSelector from 'components/common/dateselector';



export class FloorPlan extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			loading: false,

			mode: "done", // "move", "add", "editing"
			lastMode: "done",

			hasPermission: this.hasPermission(),

			editedSensor: {},
			deletedSensor: {},

			dragging: false,
			draggedSensor: {},

			mousePos: {},
			upFunc: {},
			moveFunc: {},
			cancelFunc: {},
			url: "",
		};
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
		this.setState({hasPermission: this.hasPermission(nextProps)})
		if (this.state.loading) {
			var url = this.getImage(nextProps.images, nextProps.root)
			if (url!=this.state.url) {
				this.setState({url: url, loading: false});
			}
		} else {
			console.log(this.props, nextProps)
			if ((!this.props.root && nextProps.root) || this.props.showHeatmap &&
				(
					this.querySettingsChanged(this.props.query, nextProps.query) ||
					this.props.root.id != nextProps.root.id
				)) {
				var params = getParams({
					querySettings: nextProps.query,
					currentNode: nextProps.root,
				})
				this.props.dispatch(getSensorAverage(params, nextProps.root))
			}
		}
	}
	querySettingsChanged(q1, q2) {
		return (
			q1.startdate !== q2.startdate ||
			q1.enddate !== q2.enddate ||
			q1.starthour !== q2.starthour ||
			q1.endhour !== q2.endhour ||
			q1.weekdaymask !== q2.weekdaymask
		);
	}

	imageError() {
		this.setState({
			loading: true,
		})
		this.props.dispatch(fetchImage(this.props.user.companyid))
	}
	getMousePos(evt) {
		console.trace();
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
	onMouseDown(e, sensor) {
		if (this.state.mode == "move") {
			var upFunc = (e) => this.onMouseUp(e, sensor);
			var moveFunc = (e) => this.onMouseMove(e, sensor);

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
	}
	onMouseUp(e, sensor) {
		if (this.state.mode == "move") {
			e.stopPropagation();
			window.removeEventListener("mouseup", this.state.upFunc);
			window.removeEventListener("mousemove", this.state.moveFunc);
			var reset = (respond) => {
				if (respond.status==200) {
					var node = this.props.nodeMap[sensor.id];
					this.setState({
						dragging: false,
						draggedSensor: {},
						mousePos: {},
						upFunc: {},
						moveFunc: {},
					});
				} else {
					toastr.error(respond.data);
				}
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
		} else if (this.state.mode == "add" && e.which == 1) { // e.which = 1 <=> left mouse
			window.removeEventListener("mousemove", this.state.moveFunc);
			window.removeEventListener("mouseup", this.state.upFunc);
			window.removeEventListener("contextmenu", this.state.cancelFunc);
			this.setState({
				moveFunc: {},
				upFunc: {},
				cancelFunc: {},
			});
			this.sensorForm.reset();
			this.sensorForm.open(e);
		}
	}
	onCancel(e, callback) {
		if (this.state.mode == "add") {
			if (typeof callback != "function") {
				e.stopPropagation();
				e.preventDefault();
			}
			window.removeEventListener("contextmenu", this.state.cancelFunc);
			window.removeEventListener("mousemove", this.state.moveFunc);
			window.removeEventListener("mouseup", this.state.upFunc);
			this.setState({
				mode: "done",
				mousePos: {},
				moveFunc: {},
				upFunc: {},
				cancelFunc: {},
			}, callback);
		}
		return false;
	}
	onMouseMove(e, sensor) {
		var pos = this.getMousePos(e);
		this.setState({
			mousePos: pos,
		});
		if (this.state.mode == "add") {
			if (pos.x==0 || pos.x==100 || pos.y==0 || pos.y==100) {
				// this.onCancel(e); // ONLY CANCEL BY RIGHT-CLICK OR PRESSING "ESC"
			}
		}
	}
	changeMode(mode, e) {
		this.setState({mode: mode, lastMode: this.state.mode});
		if (mode=="add") {
			if (this.props.viewFilter.code == "LIVE") {
				console.log("BN");
				this.props.dispatch(selectViewFilter(config.viewFilter[0]));
			}

			var moveFunc = (e) => this.onMouseMove(e);
			var upFunc = (e) => this.onMouseUp(e);
			var cancelFunc = (e) => this.onCancel(e);

			var mousePos = this.getMousePos(e);
			this.setState({
				mousePos: mousePos,
				moveFunc: moveFunc,
				upFunc: upFunc,
				cancelFunc: cancelFunc,
			})
			window.addEventListener("mousemove", moveFunc);
			window.addEventListener("mouseup", upFunc);
			window.addEventListener("contextmenu", cancelFunc);
		}
	}
	moveSensor(ss, pos) {
		var newSensor = {
			id: ss.id,
			xpercent: pos.x,
			ypercent: pos.y,
		}
		return updateSensor(newSensor);
	}
	addSensor(e, state, mousePos) {
		var sensor = {
			name: state.name,
			macaddress: this.cleanMACAddress(state.macaddress),
			xpercent: mousePos.x,
			ypercent: mousePos.y,
		}
		var evt = Object.assign({}, e);
		var location = state.location;
		if (state.location == -1) {
			toastr.error("Error happened : please reload the page.");
		} else if (sensor.name && sensor.macaddress) {
			this.props.dispatch(createSensor(location, sensor)).then((response) => {
				if (response.status == 201) {
					this.props.dispatch(fetchCustomerOverview()).then(() => {
						this.props.dispatch(fetchLiveData());
						toastr.success(`Add new sensor successfully`);
						this.sensorForm.close(evt);
					}).catch(error => {
						toastr.error(error.data);
					});
				} else {
					toastr.error(response.data)
				}
			}).catch(error => {
				toastr.error(error.data);
			});
		} else {
			toastr.error("Name and MAC address must be filled");
		}
	}
	updateSensor(e, state) {
		var sensor = {
			id: state.id,
			name: state.name,
			macaddress: this.cleanMACAddress(state.macaddress),
		}
		var location = Number(state.location);
		if (state.location == -1 || state.id==-1) {
			toastr.error("Error happened : please reload the page.");
		} else if (sensor.name && sensor.macaddress) {
			var parentId = this.props.nodeMap[sensor.id].parent.id;

			var updateInfo = () => {
				this.props.dispatch(updateSensor(sensor)).then((response) => {
					if (response.status == 200) {
						toastr.success(`Update sensor successfully`);
						this.sensorForm.reset();
					} else {
						toastr.error(response.data)
					}
				}).catch(error => {
					toastr.error(error.data);
				});
			}
			// Parent of this sensor changed.
			if (parentId!=location) {
				this.props.dispatch(setParent(sensor.id, location)).then((response) => {
					if (response.status == 200) {
						updateInfo();
					}  else {
						toastr.error(response.data)
					}
				}).catch(error => {
					toastr.error(error.data);
				});
			} else { // doesn't changed
				updateInfo();
			}
		} else {
			toastr.error("Name and MAC address must be filled");
		}
	}
	deleteSensor(sensor) {
		this.props.dispatch(deleteNode(sensor)).then((response) => {
			if (response.status==200) {
				this.props.dispatch(fetchCustomerOverview()).then((response) => {
					this.props.dispatch(fetchLiveData());
					toastr.success(`Delete sensor successfully`);
					this.selectDeletedSensor({}); // also close delete modal.
				}).catch(error => {
					toastr.error(error.data);
				});
			} else {
				toastr.error(response.data);
			}
		}).catch(error => {
			toastr.error(error.data);
		});
	}
	handleClickOutside() {
		// this.hideOptions();
	}
	toggleMove() {
		var mode;
		if (this.state.mode == "move") {
			mode = "done";
		} else if (this.state.mode == "done") {
			mode = "move";
		}
		this.setState({
		    mode: mode,
		});
	}
	toggleHeatmap() {
		if (typeof this.props.onToggleHeatmap == "function") {
			this.props.onToggleHeatmap();
		}
	}
	calculateNormalizer() {
		// return mean and std
		var values = [];
		Object.keys(this.props.sensorAverage.values).map((mac) => {
			var value = this.props.sensorAverage.values[mac];
			if (0 <= value && value <= 1) {
				values.push(value);
			}
		});
		if (values.length == 0) {
			return [0.5, 1];
		}
		return [math.mean(values), math.std(values)];
	}

	render() {
		if (!this.props.root) {
			return null;
		}
		var areas = [], sensors = [];
		this.listNodes(this.props.root, areas, sensors)

		var normalizer = [0.5, 1];
		if (this.props.showHeatmap) {
			normalizer = this.calculateNormalizer();
		}

		if (!this.state.loading && !this.props.root.info.empty) {
			var url = this.getImage(this.props.images, this.props.root)
			if (url && this.props.root.info.hasfloorplan) {
				return (
					<div className="floorplan-outer-container">
						{
							(!this.props.thumbnail && this.state.hasPermission) &&
							((this.props.showHeatmap) ?
								<div className="floorplan-options-container">
				                    <div className="options-help">
				                        <div className="help-icon hi-show">
				                            <i className="material-icons">info_outline</i>
				                        </div>
				                        <div className="help-text ht-show">Hover over a sensor for more info.</div>
				                    </div>
				                    <div className="options-buttons">
				                    </div>
				                </div>
							:
								<div className="floorplan-options-container">
				                    <div className="options-help">
				                        <div className="help-icon hi-show">
				                            <i className="material-icons">info_outline</i>
				                        </div>
				                        <div className={(this.state.mode=="done") ? "help-text ht-show" : "help-text ht-hide"}>Hover over a sensor for more info.</div>
				                        <div className={(this.state.mode=="move") ? "help-text ht-show" : "help-text ht-hide"}>Hold and drag a sensor to move it.</div>
				                        <div className={(this.state.mode=="add") ? "help-text ht-show" : "help-text ht-hide"}>Left-click to place new sensor, right-click to cancel.</div>
				                    </div>
				                    <div className="options-buttons">
				                        <i
				                            className="material-icons"
				                            data-tooltip={(this.state.mode=="move") ? "Sensors can be moved" : "Sensors can not be moved"}
				                            onClick={() => this.toggleMove()}
				                            >
				                            {(this.state.mode=="move") ? "location_searching" : "location_disabled"}
				                        </i>
				                    </div>
				                    <div className="options-buttons">
				                        <i
				                            className="material-icons"
				                            data-tooltip="Add sensor"
				                            onClick={(e) => {this.changeMode("add", e)}}
				                        >
											add_circle_outline
										</i>
				                    </div>
				                </div>
							)

						}
						<div className={!this.props.thumbnail ? "floorplan-container" : "floorplan-container-thumbnail"}>
							<img
								src={url}
								alt="Floorplan"
								className="floorplan-image"
								ref="floorplan-image"
								onError={this.imageError.bind(this)}
								draggable="false"
								key="image"
							/>
							{
								(this.state.mode == "add") &&
								<Sensor
									sensor={{dummy: true}}
									dragged={true}
									draggingX={this.state.mousePos.x}
									draggingY={this.state.mousePos.y}
								/>
							}
							{sensors.map((sensor) => {
								var ss = this.props.sensorMap.get(sensor.id);
								return (ss &&
									<Sensor
										key={sensor.id}

										showHeatmap={this.props.showHeatmap}

										sensor={ss}
										viewFilter={this.props.viewFilter}
										selectedSensor={this.props.selectedSensor}

										onEdit={this.selectEditedSensor.bind(this)}
										onDelete={this.selectDeletedSensor.bind(this)}

										onMouseDown={(e, ss) => this.onMouseDown(e, ss)}
										dragged={this.state.dragging && this.state.draggedSensor.id == sensor.id}
										draggingX={this.state.dragging && this.state.mousePos.x}
										draggingY={this.state.dragging && this.state.mousePos.y}

										thumbnail={this.props.thumbnail}
										hasPermission={this.state.hasPermission && this.state.mode != "add"}

										average={this.props.sensorAverage.values[ss.macaddress]}
										normalizer={normalizer}
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

										onMouseDown={(e, ss) => this.onMouseDown(e, ss)}
										dragged={this.state.dragging && this.state.draggedSensor.id == node.id}
										draggingX={this.state.dragging && this.state.mousePos.x}
										draggingY={this.state.dragging && this.state.mousePos.y}


										thumbnail={this.props.thumbnail}
										/>
								);
							})}
							<SensorForm ref={(elem) => {this.sensorForm = elem}}
								mode={this.state.mode}
								node={this.props.root}
								sensor={this.state.editedSensor}
								nodeMap={this.props.nodeMap}
								onClose={(e) => {
									if (this.state.mode=="add") {
										this.onCancel(e, () => this.changeMode("add", e));
									} else if (this.state.mode=="editing") {
										this.changeMode(this.state.lastMode);
									}
								}}
								onSubmit={(e, state) => {
									if (this.state.mode=="add") {
										console.log(e, this.getMousePos(e));
										this.addSensor(e, state, this.state.mousePos)
									} else if (this.state.mode=="editing") {
										this.updateSensor(e, state)
									}
								}}
								/>
							<Modal
								ref={(elem) => {this.deleteModal = elem}}
								clickButton={(e) => { this.deleteSensor(this.state.deletedSensor)}}
								header="Delete Sensor"
								buttonText="Delete Sensor"
								buttonClass="btn-danger"
								entry={ null }
								onClose={this.props.onClose}
								>
								<p>Are you sure you want to delete sensor <b>{this.state.deletedSensor.name}</b> ({this.state.deletedSensor.macaddress}) ?</p>
							</Modal>
						</div>
					</div>
				);
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

	selectEditedSensor(sensor) {
		if (this.state.mode=="add") {
			this.sensorForm.reset();
			return;
		}
		this.setState({
			editedSensor: sensor,
			mode: "editing",
			lastMode: this.state.mode,
		}, () => {
			this.sensorForm.reset();
			this.sensorForm.open();
		});
	}

	hasPermission(Props) {
		var props = Props || this.props;
		var node = props.root;
		if (props.user.role != "ADMIN" && props.user.role != "SUPPORTUSER") {
			return false;
		}
		while (node) {
			if (node.id == props.user.rootnodeid) {
				return true;
			}
			node = node.parent;
		}
		return false;
	}

	selectDeletedSensor(sensor) {
		if (this.state.mode=="add") {
			return;
		}
		this.setState({
			deletedSensor: sensor,
		}, () => {
			if (sensor.id) {
				this.deleteModal.open();
			} else {
				this.deleteModal.close();
			}
		});
	}

	listNodes(root, areas, sensors) {
		var self = this;
		if (root) {
			var isArea = (root.type=="meeting_room" && !this.props.showDetails)
			isArea |= (root.id != this.props.root.id && root.info.useownfp && root.type!="sensor");
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

	cleanMACAddress(mac) {
		// ABCDEF123456 -> ab:cd:ef:12:34:56
		if (/^([0-9A-F]{2}){6}$/.test(mac.toUpperCase())) {
			return (
				mac.substring(0,2) + ":" + mac.substring(2,4) + ":" +
				mac.substring(4,6) + ":" + mac.substring(6,8) + ":" +
				mac.substring(8,10) + ":" + mac.substring(10,12)
			).toLowerCase();
		}
		return mac;
	}

}

function mapStateToProps(state) {
	return {
		sensorMap: state.nodeReducer.map,
		nodeMap: state.overviewReducer.nodeMap,
		images: state.floorPlanReducer.images,
		user: state.myAccountReducer.user,
		selectedSensor: state.floorPlanSensorReducer.selectedSensor,
		query: state.querySettingsReducer,
		sensorAverage: state.statsReducer.sensorAverage,
	}
}
function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(enhanceWithClickOutside(FloorPlan));
