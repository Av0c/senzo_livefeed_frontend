import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"

export default class DeleteModal extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			loaded: false,
		};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.open != nextProps.open) {
			this.setState({
				loaded: true,
			});
		}
	}

	render() {
		let type = "hidden";
		if (this.state.loaded) {
			type = this.props.open ? "open" : "closed";
		}
		return (
			<div>
				<div className={"modal-overlay "+type} onClick={this.props.closeModal}></div>
				<div className={"add-account-wrapper invite-modal "+type}>
					<div className="modal-header">
						<button className="close" onClick={this.props.closeModal}>×</button>
						<h4 className="modal-title">Delete User</h4>
					</div>
					<div className="modal-body">
						<p>Are you sure you want to delete this sensor and all related data ?</p>
					</div>
					<div className="modal-footer">
						<button className="btn btn-default" type="button" onClick={this.props.closeModal}>Cancel</button>
						<button className="btn btn-danger" type="button" onClick={this.props.clickButton}>Delete</button>
					</div>
				</div>
			</div>
		);
	}
}