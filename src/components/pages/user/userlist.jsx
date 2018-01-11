import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"
import { selectUser } from "actions/user"
import Modal from "components/common/modal"
import * as a from "actions/user"

class UserList extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	openEdit(user) {
		this.props.dispatch(selectUser(user));
		this.props.openEditModal();
	}

	isDescendant(root, id) {
		var node = this.props.nodeMap[id];
		if (!node) {
			return false;
		}
		while (node.id!=root.id) {
			node = node.parent;
			if (!node) {
				return false;
			}
		}
		return true;
	}

	correctType(u, userTypeFilter) {
		var nodeMap = this.props.nodeMap;
		switch (userTypeFilter.code) {
			case "ALL" :
				return true;
			case "CADMIN" :
				return u.role==config.roles[0].rolecode && nodeMap[u.rootnodeid].type==config.nodeType.customer.code;
			case "LADMIN" :
				return u.role==config.roles[1].rolecode && nodeMap[u.rootnodeid].type!=config.nodeType.customer.code;
			case "LUSER" :
				return u.role==config.roles[2].rolecode;
			case "SUSER" :
				return u.role==config.roles[3].rolecode;
		}
	}

	clickDeleteButton(user) {
		this.props.dispatch(a.deleteUser(user));
	}

	renderUser(u, nodeNames) {
		var ok = this.props.nodeFilter==this.props.tree || this.isDescendant(this.props.nodeFilter, u.rootnodeid);
		ok = ok && this.correctType(u, this.props.userTypeFilter);
		if (!ok) {
			return null;
		}
		return (
			<tr key={u.username} className={(u.username == this.props.me.username) ? "bold" : ""}>
				<td className="tab-left"> <span className={u.registered ? "active-user" : "pending-user"}>{u.title + " " + u.firstname + " " + u.lastname}</span></td>
				<td>{u.title}</td>
{/*				<td>{u.username}</td>*/}
				<td> <a className="table-email" href={"mailto:"+u.email}>{u.email}</a></td>
				<td>{u.phone}</td>
				<td>{nodeNames[String(u.rootnodeid)]}</td>
					{
						(u.canmodify && u.username != this.props.me.username) ?
						[
							<td key="0">
								<img className="pencil" onClick={() => this.openEdit(u)} src="/src/assets/images/pencil.png"/>
							</td>,
							<td key="1">
								<Modal
									clickButton={this.clickDeleteButton.bind(this, u)}
									header="Delete User"
									buttonText="Delete"
									buttonClass="btn-danger"
									entry={ <img className="bin" src="/src/assets/images/bin.svg"/> }
								>
									<p>Are you sure you want to delete this user account and all related information ?</p>
								</Modal>
							</td>
						] : [
							<td key="0">
							</td>,
							<td key="1">
							</td>
						]
					}
			</tr>
		)
	}

	render() {
		let userrows = [
			[this.props.contact.companyadmins, "Company administrators"],
			[this.props.contact.localadmins, "Local administrators"],
			[this.props.contact.localusers, "Local Users"],
			[this.props.contact.supportusers, "Support"],
		]
		let nodeNames = this.props.contact.nodenames;
		let ok = true;
		userrows.map((row) => {
			if (!row[0]) {
				ok = false;
			}
		})
		if (ok && nodeNames) {
			return (
				<div className="users-section">
					<table className="table"><tbody>
					{
						userrows.map((urow) => {
							return [
								<tr>
									<td className="table-heading">
									<h4>{urow[1]}</h4>
									</td>
								</tr>,
								urow[0].map((u) => this.renderUser(u, nodeNames))
							];
						})
					}
					</tbody></table>
				</div>
			);
		} else {
			return <div/>
		}
	}
}


function mapDispatchToProps(dispatch) {
	return  {
		dispatch
	};
}

function mapStateToProps(state) {
	return {
		me: state.authReducer.user,
		nodeMap: state.overviewReducer.nodeMap
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
