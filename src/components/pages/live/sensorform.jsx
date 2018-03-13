import React from 'react'
import { connect } from 'react-redux';
import toastr from 'toastr';
import { createSensor, removeSensor, updateSensor } from 'actions/floorplan';
import { deleteNode, fetchLiveData } from 'actions/node';
import { fetchCustomerOverview } from 'actions/overview';
import Sensor from './sensor';
import Modal from "components/common/modal"

export default class SensorForm extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			id: -1,
			name: "",
			macaddress: "",
			location: -1,
		}
	}

	componentDidMount() {
		this.reset();
	}

	reset() {
		var nodes = [];
		this.getAllAreas(this.props.node, nodes);
		var location = -1;
		if (nodes.length > 0) {
			location = nodes[0].id;
		}
		if (this.props.mode=="editing") {
			if (this.props.sensor.id && this.props.nodeMap[this.props.sensor.id] && this.props.nodeMap[this.props.sensor.id].parent) {
				var parent = this.props.nodeMap[this.props.sensor.id].parent;
				if (parent.id && parent.type == "open_area" || parent.type == "meeting_room") {
					location = parent.id;
				}
			}
			this.setState({
				id: this.props.sensor.id || -1,
				name: this.props.sensor.name || "",
				macaddress: this.props.sensor.macaddress || "",
				location: location,
			});
		} else {
			this.setState({
				id: -1,
				name: "",
				macaddress: "",
				location: location,
			});
		}
	}

	createLocationOptions(options) {
		return options.map((element, index) => {
			return <option key={index} value={element.id}>{element.info.name}</option>
		});
	}

	getAllAreas(tree, options) {
		var self = this;
		if (tree.type == 'meeting_room' || tree.type == 'open_area') {
			options.push(tree);
		} else {
			tree.children.forEach(function (element) {
				self.getAllAreas(element, options);
			});
		}
	}

	open(e) {
		this.modal.open(e);
	}

	close(e) {
		this.modal.close(e);
	}

	render() {
		let options = [];
		this.getAllAreas(this.props.node, options);
		let locations = this.createLocationOptions(options);
		return (
			<Modal
				ref={(elem) => {this.modal = elem}}
				clickButton={(e) => { this.props.onSubmit(e, this.state)}}
				header={this.props.mode == "add" ? "Add Sensor" : "Edit Sensor"}
				buttonText={this.props.mode == "add" ? "Add Sensor" : "Edit Sensor"}
				buttonClass="btn-success"
				entry={ null }
				onClose={this.props.onClose}
			>
				<label>
					<span>MAC address </span>
					<input type="username" id="macaddress" placeholder="AABBCC112233 / aa:bb:cc:11:22:33" value={this.state.macaddress} onChange={this.changeHandler.bind(this)} required />
				</label>
				<label>
					<span>Name</span>
					<input type="username" id="name" value={this.state.name} onChange={this.changeHandler.bind(this)} placeholder="e.g. Meeting Room 23" required />
				</label>
				<div>
					<label>Room / Area</label>
					<select value={this.state.location} id="location" onChange={this.changeHandler.bind(this)}>
						{locations}
					</select>
				</div>
			</Modal>
		)
	}

	changeHandler(e) {
		let key = e.target.id;
		let value = e.target.value;
		this.setState({ [key]: value });
	}
}