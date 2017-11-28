import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"
import { inviteUser } from "actions/user"

class User extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			AAOpen: true, // add account modal open ?
			Role: "ADMIN"
		};
	}

	componentDidMount() {

	}

	addAccountOpen(e) {
		e.stopPropagation()
		this.setState({AAOpen: true})
	}

	addAccountClose(e) {
		e.stopPropagation()
		this.setState({AAOpen: false})
	}

	sendInvitation() {
		var inv = {
			rootnodeid: Number(this.refs.location.value),
			companyid: Number(this.refs.location.value),
			email: this.refs.email.value,
			role: this.refs.role.value
		}
		console.log(inviteUser(inv))
		this.props.dispatch(inviteUser(inv))
	}

	componentWillReceiveProps(nextProps) {

	}

	listNodes(root, depth, res) {
		var self = this;
		if (root && root.type!="sensor") {
			res.push({
				node: root,
				padding: "\u00a0\u00a0".repeat(depth)
			});
			root.children.forEach((child) => {
				self.listNodes(child, depth+1, res);
			})
		}
	}

	render() {
		var nodes = [];
		this.listNodes(this.props.tree, 0, nodes)
		return (
			<div>
				<div className="settings-wrapper">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12">
								<div className="clearfix user-table">
									<h2 className="pull-left">User Administration</h2>
									<div className="button" style={{marginLeft: "14px"}} onClick={this.addAccountOpen.bind(this)}>
										Add Account
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className={"modal-overlay"+(this.state.AAOpen ? "" : " closed")} onClick={this.addAccountClose.bind(this)}></div>
					<div className={"add-account-wrapper invite-modal"+(this.state.AAOpen ? "" : " closed")}>
						<div className="modal-header">
							<button className="close" onClick={this.addAccountClose.bind(this)}>×</button>
							<h4 className="modal-title">Add Account</h4>
						</div>
						<div className="modal-body">
							<label>Add New</label>
							<select required ref="role">
								{config.roles.map((role) => (
									<option value={role.code} key={role.code}> {role.text} </option>
								))}
							</select>

							<label>Location</label>
							<select required ref="location">
							{nodes.map((x) => {
								console.log(x.node.id);
								return (
									<option value={x.node.id} key={x.node.id}>
										{x.padding}
										{x.node.info.name}
									</option>
								);
							})}
							</select>

							<label>Email</label>
							<input type="email" placeholder="new@user.com" ref="email"/>
						</div>
						<div className="modal-footer">
							<button className="btn btn-default" type="button" onClick={this.addAccountClose.bind(this)}>Cancel</button>
							<button className="btn btn-success" type="button" onClick={this.sendInvitation.bind(this)}>Send Invitation</button>
						</div>
					</div>
				</div>
				<div className="modal fade" id="delete-user-modal">
					<div className="modal-dialog modal-sm">
						<div className="modal-content">
							<div className="modal-header">
								<button className="close" type="button" data-dismiss="modal" aria-hidden="true">×</button>
								<h4 className="modal-title">Delete User</h4>
							</div>
							<div className="modal-body delete-user-wrapper">
								<p>Are you sure you want to delete this user account and all related information?</p>
							</div>
							<div className="modal-footer">
								<button className="btn btn-default" type="button" data-dismiss="modal">Cancel</button>
								<button className="btn btn-danger" type="button">Delete</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		tree: state.overviewReducer.customerOverview,
		user: state.authReducer.user,
		respond: state.userReducer.respond,
		loading: state.userReducer.loading
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(User);