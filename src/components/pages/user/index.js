import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"
import UserList from "./userlist"

import InviteModal from "./inviteModal"
import DeleteModal from "./deleteModal"
import EditModal from "./editModal"

import NodeDropdown from "components/common/nodedropdown"
import ListDropdown from "components/common/listdropdown"
import LeftMenu from 'components/common/leftmenu';

import {
	listContact,
	needContact,
	selectUser,
	deleteUser,
	resetInviteStatus,
	useradSelectNode,
	useradSelectType,
} from "actions/user"

class User extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			AAOpen: false, // add account modal open ?
			AArespond: "",
			AArespondClass: "",

			DAOpen: false, // delete account modal open ?
			DArespond: "",
			DArespondClass: "",

			EAOpen: false, // edit account modal open ?
			EArespond: "",
			EArespondClass: "",

			interval: {}
		};
	}

	componentWillMount() {
		this.props.dispatch(listContact());
		var itv = setInterval(this.props.dispatch, 3000000, listContact());
		this.setState({ interval: itv });
	}

	componentWillUnmount() {
		clearInterval(this.state.interval);
	}


	AAOpen() {
		this.props.dispatch(resetInviteStatus());
		this.setState({ AAOpen: true });
	}

	AAClose() {
		this.props.dispatch(resetInviteStatus());
		this.setState({ AAOpen: false });
	}

	DAOpen() {
		this.setState({ DAOpen: true });
	}

	DAClose() {
		this.props.dispatch(selectUser({}));
		this.setState({ DAOpen: false });
	}

	EAOpen() {
		this.setState({ EAOpen: true });
	}

	EAClose() {
		this.props.dispatch(selectUser({}));
		this.setState({ EAOpen: false });
	}

	clickDeleteButton() {
		this.props.dispatch(deleteUser(this.props.selectedUser));
	}

	componentWillReceiveProps(nextProps) {
		// Init nodeFilter
		if (this.props.nodeFilter.id == -2 && nextProps.tree.id != -2) {
			this.props.dispatch(useradSelectNode(nextProps.tree));
		}
		// Inviting stages
		switch (nextProps.AAstage) {
			case "inviting":
				this.setState({
					AArespond: "Sending...",
					AArespondClass: "text-loading",
				})
				if (nextProps.contactFetched) {
					nextProps.dispatch(needContact());
				}
				break;
			case "invited":
				if (!nextProps.contactFetched) {
					nextProps.dispatch(listContact());
				}
				this.setState({
					AArespond: "Invitation email sent.",
					AArespondClass: "text-green",
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
				});
				break;
		}
		// Editing stages
		switch (nextProps.EAstage) {
			case "editing":
				this.setState({
					EArespond: "Editing...",
					EArespondClass: "text-loading",
				})
				if (nextProps.contactFetched) {
					nextProps.dispatch(needContact());
				}
				break;
			case "edited":
				this.setState({
					EArespond: "User edited.",
					EArespondClass: "text-green",
				});
				if (!nextProps.contactFetched) {
					nextProps.dispatch(listContact());
				}
				break;
			case "edit-failed":
				this.setState({
					EArespond: "Failed to edit this user !",
					EArespondClass: "text-red"
				})
				break;
			default: // "nothing"
				this.setState({
					EArespond: "",
					EArespondClass: "",
				});
		}
		// Deleting stages
		switch (nextProps.DAstage) {
			case "deleting":
				if (nextProps.contactFetched) {
					nextProps.dispatch(needContact());
				}
				break;
			case "deleted":
				if (!nextProps.contactFetched) {
					nextProps.dispatch(listContact());
				}
				this.DAClose();
				break;
			default: // nothing
		}
	}

	listNodes(root, depth, res) {
		var self = this;
		if (root && root.type != "sensor") {
			res.push({
				node: root,
				padding: "\u00a0\u00a0".repeat(depth)
			});
			root.children.forEach((child) => {
				self.listNodes(child, depth + 1, res);
			})
		}
	}

	listNodeFilter(root, res) {
		var self = this;
		if (root) {
			if (root.type != "sensor") {
				res.push(root);
				root.children.forEach((child) => {
					self.listNodeFilter(child, res);
				})
			}
		}
	}

	render() {
		var nodes = [];
		this.listNodes(this.props.nodeMap[this.props.me.rootnodeid], 0, nodes)
		return (
			<div className="white-padded">
				<div className="settings-wrapper">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12">
								<LeftMenu overview='' comparison='' />
							</div>
						</div>
						<hr className="settings-divider"></hr>
						<div className="row">
							<div className="col-md-12">
								<div className="clearfix user-table">
									<h2 className="pull-left">{(this.props.me.role == "ADMIN") ? "User Administration" : "Contact"}</h2>
									{
										(this.props.me.role == "ADMIN") ? ([
											<div key="0" className="button" style={{ marginLeft: "14px" }} onClick={this.AAOpen.bind(this)}>Add Account</div>,
											<NodeDropdown
												key="1"
												outsideClass="dropdown-btn settings-dropdown pull-left"
												root={this.props.tree}
												nodeFilter={this.props.nodeFilter}
												click={
													(node) => { this.props.dispatch(useradSelectNode(node)) }
												}
												list={this.listNodeFilter.bind(this)}
												header="All locations"
											/>,
											<ListDropdown
												key="2"
												outsideClass="dropdown-btn settings-dropdown pull-left"
												items={config.userTypeFilter}
												getText={(x) => x.text}
												selected={this.props.userTypeFilter}
												click={(code) => { this.props.dispatch(useradSelectType(code)) }}
											/>,
										]
										) : (
												<div />
											)
									}
								</div>
								<UserList
									contact={this.props.contact}
									openDeleteModal={this.DAOpen.bind(this)}
									openEditModal={this.EAOpen.bind(this)}
									nodeFilter={this.props.nodeFilter}
									userTypeFilter={this.props.userTypeFilter}
									tree={this.props.tree}
								/>
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
				<EditModal
					open={this.state.EAOpen}
					closeModal={this.EAClose.bind(this)}
					user={this.props.selectedUser}
					contact={this.props.contact}
					nodes={nodes}
					respond={this.state.EArespond}
					respondClass={this.state.EArespondClass}
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
		nodeMap: state.overviewReducer.nodeMap,
		me: state.authReducer.user,

		AAstage: state.userInviteReducer.stage,
		AArespond: state.userInviteReducer.respond,

		EAstage: state.userAdminReducer.EAstage,
		EArespond: state.userAdminReducer.EArespond,

		DAstage: state.userAdminReducer.DAstage,
		DArespond: state.userAdminReducer.DArespond,

		selectedUser: state.userAdminReducer.selectedUser,
		contact: state.userAdminReducer.contact,
		contactFetched: state.userAdminReducer.contactFetched,
		nodeFilter: state.userAdminReducer.nodeFilter,
		userTypeFilter: state.userAdminReducer.userTypeFilter
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
