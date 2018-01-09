import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"

import * as a from "actions/sensorsettings"

class EditModal extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			macaddress: "",
			name:"",
			loaded: false,
		};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.open != nextProps.open) {
			this.setState({
				macaddress: nextProps.sensor.macaddress,
				name: nextProps.sensor.name,
				loaded: true,
			});
		}
	}


	editSensor() {
		var ss = {
			id: this.props.sensor.id,
			macaddress: this.state.macaddress,
			name: this.state.name,
		}
		this.props.dispatch(a.editSensor(ss));
	}

	changeMacAddress(e) {
		this.setState({macaddress: e.target.value});
	}

	changeName(e) {
		this.setState({name: e.target.value});
	}

	render() {
		let type = "hidden";
		if (this.state.loaded) {
			type = this.props.open ? "open" : "closed";
		}
		return (
			<div>
				<div className={"modal-overlay "+type} onClick={this.props.closeModal}></div>
				<div className={"edit-sensor-wrapper invite-modal "+type}>
					<div className="modal-header">
						<button className="close" onClick={this.props.closeModal}>×</button>
						<h4 className="modal-title">Edit Sensor</h4>
					</div>
					<div className="modal-body">
						<label>MAC Address</label>
						<input type="text" placeholder="f8:f0:05:f7:fc:cc" value={this.state.macaddress} onChange={this.changeMacAddress.bind(this)}/>

						<label>Name</label>
						<input type="text" placeholder="ZA1" value={this.state.name} onChange={this.changeName.bind(this)}/>

						<div><span className={this.props.respondClass}>{this.props.respond}</span></div>
					</div>
					<div className="modal-footer">
						<button className="btn btn-default" type="button" onClick={this.props.closeModal}>Cancel</button>
						<button className="btn btn-success" type="button" onClick={this.editSensor.bind(this)}>OK</button>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
	};
}

function mapDispatchToProps(dispatch) {
	return  {
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
