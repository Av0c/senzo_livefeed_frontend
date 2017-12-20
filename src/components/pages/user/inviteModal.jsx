import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"

import {
	inviteUser,
} from "actions/user"

class InviteModal extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			loaded: false,
			role: config.roles[0].code,
			location: {
				node: {
					id: -2
				}
			},
			disabled: true
		};
	}

	componentWillReceiveProps(nextProps) {
		let hasCompany = (this.props.nodes.length && this.props.nodes[0].node.type == config.nodeType.customer.code);
		if (this.props.open != nextProps.open) {
			this.setState({
				role: config.roles[hasCompany ? 0 : 1].code,
				loaded: true,
			});
		}
		if (!this.state.loaded && nextProps.nodes.length) {
			this.setState({
				location: nextProps.nodes[0],
				disabled: hasCompany
			});
		}
	}

	sendInvitation() {
		var inv = {
			rootnodeid: this.state.location.node.id,
			companyid: this.state.location.node.id,
			email: this.refs.email.value,
			role: this.refs.role.value.substring(1)
		}
		this.props.dispatch(inviteUser(inv));
	}

	findCustomerNode(nodes) {
		var res = {};
		nodes.map((x) => {
			if (x.node.type==config.nodeType.customer.code) {
				res = x;
			}
		});
		return res;
	}

	findNotCustomerNode(nodes) {
		var res = {};
		for (var i = 0; i < nodes.length; i++) {
			if (nodes[i].node.type!=config.nodeType.customer.code) {
				return (nodes[i]);
			}
		}
		return res;
	}

	changeRole(e) {
		if (e.target.value==config.roles[0].code) {
			this.setState({
				role: e.target.value,
				location: this.findCustomerNode(this.props.nodes),
				disabled: true
			});
		} else {
			let loc = this.state.location;
			if (loc.node.type==config.nodeType.customer.code) {
				loc = this.findNotCustomerNode(this.props.nodes);
			}
			this.setState({
				role: e.target.value,
				location: loc,
				disabled: false
			});
		}
	}

	changeLocation(e) {
		this.setState({location: this.props.nodes[e.target.value]})
	}

	findNode() {
		var idx = 0;
		this.props.nodes.map((x, i) => {
			if (x.node.id == this.state.location.node.id) {
				idx = i;
			}
		});
		return idx;
	}

	render() {
		let type = "hidden";
		if (this.state.loaded) {
			type = this.props.open ? "open" : "closed";
		}
		let hasCompany = (this.props.nodes.length && this.props.nodes[0].node.type == config.nodeType.customer.code);
		return (
			<div>
				<div className={"modal-overlay "+type} onClick={this.props.closeModal}></div>
				<div className={"add-account-wrapper invite-modal "+type}>
					<div className="modal-header">
						<button className="close" onClick={this.props.closeModal}>×</button>
						<h4 className="modal-title">Add Account</h4>
					</div>
					<div className="modal-body">
						<label>Add New</label>
						<select required ref="role" onChange={this.changeRole.bind(this)} value={this.state.role}>
							{config.roles.map((role, i) => {
								if (!hasCompany && i==0) {
									return null
								}
								return <option value={role.code} key={role.text}> {role.text} </option>
							})}
						</select>

						<label>Location</label>
						<select required ref="location" disabled={this.state.disabled} value={this.findNode()} onChange={this.changeLocation.bind(this)}>
						{this.props.nodes.map((x, i) => {
							return (
								<option value={i} key={"o"+x.node.id} disabled={i==0}>
									{x.padding}
									{x.node.info.name}
								</option>
							);
						})}
						</select>

						<label>Email</label>
						<input type="email" placeholder="new@user.com" ref="email"/>
						<span className={this.props.respondClass}>{this.props.respond}</span>
					</div>
					<div className="modal-footer">
						<button className="btn btn-default" type="button" onClick={this.props.closeModal}>Cancel</button>
						<button className="btn btn-success" type="button" onClick={this.sendInvitation.bind(this)}>Send Invitation</button>
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


export default connect(null, mapDispatchToProps)(InviteModal);