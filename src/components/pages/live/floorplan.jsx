import React from 'react';
import { connect } from 'react-redux';
import toastr from "toastr"

import Sensor from './sensor';
import Area from './area';
import config from 'config';
import { Link } from 'react-router'
import ReactTooltip from 'react-tooltip'
import SensorForm from './sensorform';
import Modal from "components/common/modal"

import { updateNode } from 'actions/node';
import { createSensor, removeSensor, updateSensor, fetchImage } from 'actions/floorplan';
import * as a from 'actions/floorplan';
import { fetchCustomerOverview } from 'actions/overview';
import { deleteNode, fetchLiveData, setParent } from 'actions/node';

export class FloorPlan extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			loading: false,

			mode: "done", // "move", "add", "editing"
			lastMode: "done",

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
				this.onCancel(e);
			}
		}
	}

	changeMode(mode, e) {
		this.setState({mode: mode, lastMode: this.state.mode});
		if (mode=="add") {
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
			macaddress: state.macaddress,
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
					this.props.dispatch(fetchCustomerOverview(this.props.user.companyid)).then(() => {
						this.props.dispatch(fetchLiveData(this.props.user.companyid));
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
			macaddress: state.macaddress,
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
				this.props.dispatch(fetchCustomerOverview(this.props.user.companyid)).then((response) => {
					this.props.dispatch(fetchLiveData(this.props.user.companyid));
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

	render() {
		if (!this.props.root) {
			return null;
		}
		var areas = [], sensors = [];
		this.listNodes(this.props.root, areas, sensors)
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

					{
						!this.props.thumbnail && <div className="options">
							<i className={"material-icons option-done " + (this.state.mode=="done" ? "ticked" : "")}
								onClick={(e) => this.changeMode("done", e)}
								data-tooltip="Done">
								done
							</i>
							<i className={"material-icons option-move " + (this.state.mode=="move" ? "ticked" : "")}
								onClick={(e) => this.changeMode("move", e)}
								data-tooltip="Move sensor">
								pan_tool
							</i>
							<i className={"material-icons option-add " + (this.state.mode=="add" ? "ticked" : "")}
								onClick={(e) => this.changeMode("add", e)}
								data-tooltip="Add sensor">
								add_circle_outline
							</i>
						</div>
					}
					{
						(this.state.mode == "add") && <Sensor
							sensor={{dummy: true}}
							dragged={true}
							draggingX={this.state.mousePos.x}
							draggingY={this.state.mousePos.y}
						/>						
					}

					{false && this.state.sensorForm && <SensorForm node={this.props.root} sensorForm={this.state.sensorForm} closeSensorForm={this.closeSensorForm.bind(this)} mousePos={this.state.mousePos} />}
					{sensors.map((sensor) => {
						var ss = this.props.sensorMap.get(sensor.id);
						return (ss &&
							<Sensor
								key={sensor.id}

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
