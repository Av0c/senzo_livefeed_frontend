import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"

import {
	editUser,
} from "actions/user"

class EditModal extends React.Component {
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

	editUser() {
		var info = {
			username: this.props.user.username,
			rootnodeid: this.state.location.node.id,
			companyid: this.state.location.node.id,
			role: this.refs.role.value.substring(1)
		}
		this.props.dispatch(editUser(info));
	}

	findRole(u) {
		// Company admin
		var res = "";
		var allUsers = [
			this.props.contact.companyadmins,
			this.props.contact.localadmins,
			this.props.contact.localusers,
			this.props.contact.supportusers
		]
		allUsers.map((userlist, i)=> {
			userlist.map((user)=> {
				if (u.username==user.username) {
					res = config.roles[i].code;
				}
			});
		});
		return res;
	}

	componentWillReceiveProps(nextProps) {
		let hasCompany = (this.props.nodes.length && this.props.nodes[0].node.type == config.nodeType.customer.code);
		if (this.props.open != nextProps.open) {
			let role = this.findRole(nextProps.user);
			this.setState({
				role: this.findRole(nextProps.user),
				location: nextProps.nodes[this.findNode(nextProps.user.rootnodeid)],
				loaded: true,
				disabled: (role == config.roles[0].code)
			});
		}
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

	findNode(id) {
		var idx = 0;
		this.props.nodes.map((x, i) => {
			if (x.node.id == id) {
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
						<h4 className="modal-title">Edit Account</h4>
					</div>
					<div className="modal-body">
						<label>Change Role</label>
						<select required ref="role" onChange={this.changeRole.bind(this)} value={this.state.role}>
							{config.roles.map((role, i) => {
								if (!hasCompany && i==0) {
									return null
								}
								return <option value={role.code} key={role.text}> {role.text} </option>
							})}
						</select>

						<label>Change Location</label>
						<select required ref="location"
							disabled={this.state.disabled}
							value={this.findNode(this.state.location.node.id)}
							onChange={this.changeLocation.bind(this)}
						>
							{this.props.nodes.map((x, i) => {
								return (
									<option value={i} key={"o"+x.node.id} disabled={i==0}>
										{x.padding}
										{x.node.info.name}
									</option>
								);
							})}
						</select>
						<div><span className={this.props.respondClass}>{this.props.respond}</span></div>
					</div>
					<div className="modal-footer">
						<button className="btn btn-default" type="button" onClick={this.props.closeModal}>Cancel</button>
						<button className="btn btn-success" type="button" onClick={this.editUser.bind(this)}>Edit</button>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		nodeMap: state.overviewReducer.nodeMap,
	};
}

function mapDispatchToProps(dispatch) {
	return  {
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
