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
		var res = null;
		nodes.map((x) => {
			if (x.node.type==config.nodeType.customer.code) {
				res = x;
			}
		});
		return res;
	}

	findNotCustomerNode(nodes) {
		var res = null;
		for (var i = 0; i < nodes.length; i++) {
			if (nodes[i].node.type!=config.nodeType.customer.code) {
				return (nodes[i]);
			}
		}
		return res;
	}

	PairOk(roleCode, location) {
		switch (roleCode) {
			case config.roles[0].code : // Company admin
				return location.type==config.nodeType.customer.code;
			case config.roles[1].code : // Local admin
				return location.type!=config.nodeType.customer.code;
			default :
				return true;
		}
	}

	changeRole(e) {
		var loc = {};
		switch (e.target.value) {
			case config.roles[0].code:
				loc = this.findCustomerNode(this.props.nodes);
				break;
			case config.roles[1].code:
				loc = this.findNotCustomerNode(this.props.nodes);
				break;
			case config.roles[2].code:
			case config.roles[3].code:
			default:
				loc = this.state.location;
				break;
		}
		this.setState({
			role: e.target.value,
			location: loc,
		});
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
		let hasCompany = this.findCustomerNode(this.props.nodes) != null;
		let hasNonCompany = this.findNotCustomerNode(this.props.nodes) != null;
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
								if (!hasNonCompany && i==1) {
									return null
								}
								return <option value={role.code} key={role.text}> {role.text} </option>
							})}
						</select>

						<label>Location</label>
						<select required ref="location" value={this.findNode()} onChange={this.changeLocation.bind(this)}>
						{this.props.nodes.map((x, i) => {
							if (x.node.type!="location" && x.node.type!="customer") {
								return null;
							}
							return (
								<option value={i} key={"o"+x.node.id} disabled={!this.PairOk(this.state.role, x.node)}>
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