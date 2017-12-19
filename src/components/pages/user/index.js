import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"
import UserList from "./userlist"
import { listContact, inviteUser, deleteUser } from "actions/user"

class User extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			AAOpen: false, // add account modal open ?
			AArespond: "",
			AArespondClass: "",

			DAOpen: false, // delete account model open ? 
			DArespond: "",
			DArespondClass: "",
			
			fetched: false,
			interval: {}
		};
	}

	componentWillMount() {
		this.props.dispatch(listContact());
		var itv = setInterval(this.props.dispatch, 100000, listContact());
		this.setState({ interval: itv })
	}

	componentWillUnmount() {
		clearInterval(this.state.interval);
	}


	AAOpen() {
		this.setState({AAOpen: true})
	}

	AAClose() {
		this.setState({AAOpen: false})
	}

	DAOpen() {
		this.setState({DAOpen: true})
	}

	DAClose() {
		this.setState({DAOpen: false})
	}

	clickDeleteButton() {
		this.props.dispatch(deleteUser(this.props.DAselectedUser));
	}

	componentWillReceiveProps(nextProps) {
		switch (nextProps.AAstage) {
			case "inviting":
				this.setState({
					AArespond: "Sending...",
					AArespondClass: "text-loading",
					fetched: false
				})
				break;
			case "invited":
				let fetched = this.state.fetched;
				if (fetched==false) {
					fetched = true;
					this.props.dispatch(listContact());
				} 
				this.setState({
					AArespond: "Invitation email sent.",
					AArespondClass: "text-green",
					fetched: fetched,
				});
				break;
			case "invite-failed":
				this.setState({
					AArespond: "Provided information is invalid.",
					AArespondClass: "text-red"
				})
				break;
			default: // "nothing"
				this.setState({
					AArespond: "",
					AArespondClass: "",
					fetched: false
				});
		}
		console.log(nextProps.DAstage)
		switch (nextProps.DAstage) {
			case "deleting" :
				this.setState({
					fetched: false
				})
				break;
			case "deleted" :
				console.log("fetched :", this.state.fetched)
				let fetched = this.state.fetched;
				if (fetched==false) {
					this.DAClose();
					fetched = true;
					this.props.dispatch(listContact());
				} 
				this.setState({
					fetched: fetched
				})
			default:
		}
	}

	listNodes(root, depth, res, incharge) {
		var self = this;
		if (root && root.type!="sensor") {
			if (incharge) {
				res.push({
					node: root,
					padding: "\u00a0\u00a0".repeat(depth)
				});
			}
			root.children.forEach((child) => {
				self.listNodes(child, depth+1, res, incharge || root.id==self.props.me.rootnodeid);
			})
		}
	}

	render() {
		var nodes = [];
		this.listNodes(this.props.tree, 0, nodes, this.props.tree.id==this.props.me.rootnodeid)
		return (
			<div>
				<div className="settings-wrapper">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12">
								<div className="clearfix user-table">
									<h2 className="pull-left">User Administration</h2>
									<div className="button" style={{marginLeft: "14px"}} onClick={this.AAOpen.bind(this)}>
										Add Account
									</div>
								</div>
								<UserList contact={this.props.contact} openDeleteModal={this.DAOpen.bind(this)}/>
							</div>
						</div>
					</div>
				</div>
				<InviteModal
					open={this.state.AAOpen}
					closeModal={this.AAClose.bind(this)}
					nodes={nodes}
					respond={this.state.AArespond}
					respondClass={this.state.AArespondClass}
				/>
				<DeleteModal
					open={this.state.DAOpen}
					closeModal={this.DAClose.bind(this)}
					respond={this.state.DArespond}
					respondClass={this.state.DArespondClass}
					clickButton={this.clickDeleteButton.bind(this)}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		tree: state.overviewReducer.customerOverview,
		me: state.authReducer.user,

		AAstage: state.userInviteReducer.stage,
		AArespond: state.userInviteReducer.respond,

		contact: state.userAdminReducer.contact,
		DAselectedUser: state.userAdminReducer.DAselectedUser,
		DAstage: state.userAdminReducer.DAstage,
		DArespond: state.userAdminReducer.DArespond,
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
			loaded: false,
			location: {
				node: {
					id: -2
				}
			},
			disabled: true
		};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.open != nextProps.open) {
			this.setState({
				loaded: true,
			});
		}
		if (!this.state.loaded && nextProps.nodes.length) {
			this.setState({
				location: nextProps.nodes[0],
				disabled: false
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

	changeRole(e) {
		if (e.target.value==config.roles[0].code) {
			this.setState({
				location: this.findCustomerNode(this.props.nodes),
				disabled: true
			});
		} else {
			this.setState({
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
						<select required ref="role" onChange={this.changeRole.bind(this)}>
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
								<option value={i} key={"o"+x.node.id}>
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

InviteModal = connect(null, mapDispatchToProps)(InviteModal);

class DeleteModal extends React.Component {
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
						<p>Are you sure you want to delete this user account and all related information?</p>
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


export default connect(mapStateToProps, mapDispatchToProps)(User);