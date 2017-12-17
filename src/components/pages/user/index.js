import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"
import UserList from "./userlist"
import { listContact, inviteUser } from "actions/user"

class User extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			AAOpen: false, // add account modal open ?
			Role: "ADMIN",
			respond: "",
			respondClass: "",
			interval: {}
		};
	}

	componentWillMount() {
		this.props.dispatch(listContact());
		var itv = setInterval(this.props.dispatch, 5000, listContact());
		this.setState({ interval: itv })
	}

	componentWillUnmount() {
		clearInterval(this.state.interval);
	}


	addAccountOpen(e) {
		e.stopPropagation()
		this.setState({AAOpen: true})
	}

	addAccountClose(e) {
		e.stopPropagation();
		console.log(this.state.AAOpen);
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
		let respond = nextProps.respond
		switch (nextProps.stage) {
			case "inviting":
				console.log("Inviting", this.state);
				this.setState({
					respond: "Sending...",
					respondClass: "text-loading"
				})
				break;
			case "invited":
				this.setState({
					respond: "Invitation email sent.",
					respondClass: "text-green"
				});
				break;
			case "invite-failed":
				this.setState({
					respond: "Provided information is invalid.",
					respondClass: "text-red"
				})
				break;
			default: // "nothing"
				this.setState({
					respond: "",
					respondClass: ""
				});
		}
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
								<UserList contact={this.props.contact}/>
							</div>
						</div>
					</div>
				</div>
				<InviteModal
					open={this.state.AAOpen}
					closeModal={this.addAccountClose.bind(this)}
					nodes={nodes}
					respond={this.state.respond}
					respondClass={this.state.respondClass}
					sendInvitation={this.sendInvitation}
				/>
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

		stage: state.userInviteReducer.stage,
		respond: state.userInviteReducer.respond,

		contact: state.userAdminReducer.contact
	};
}

function mapDispatchToProps(dispatch) {
	return  {
		dispatch
	};
}

class InviteModal extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			loaded: false
		};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.open != nextProps.open) {
			this.setState({loaded: true});
		}
	}

	render() {
		console.log("Modal", this.props);
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
						{this.props.nodes.map((x) => {
							return (
								<option value={x.node.id} key={"o"+x.node.id}>
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
						<button className="btn btn-success" type="button" onClick={this.props.sendInvitation.bind(this)}>Send Invitation</button>
					</div>
				</div>
			</div>
		);
	}
}

InviteModal = connect(null, mapDispatchToProps)(InviteModal);

export default connect(mapStateToProps, mapDispatchToProps)(User);