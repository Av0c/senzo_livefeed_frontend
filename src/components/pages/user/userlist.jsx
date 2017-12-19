import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"
import { selectDeleteUser } from "actions/user"

class UserList extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	openDelete(username) {
		this.props.dispatch(selectDeleteUser(username));
		this.props.openDeleteModal();
	}

	renderUser(u, nodeNames) {
		console.log(this)
		return (
			<tr key={u.username}>
				<td> <span className={u.registered ? "active-user" : "pending-user"}>{u.title + " " + u.firstname + " " + u.lastname}</span></td>
				<td>{u.username + ((u.username == this.props.me.username) ? " (Me)" : "")}</td>
				<td> <a className="table-email" href={"mailto:"+u.email}>{u.email}</a></td>
				<td>{u.phone}</td>
				<td>Administrator</td>
				<td>{nodeNames[String(u.rootnodeid)]}</td>
				<td className="text-right">
					{
						(u.canmodify && u.username != this.props.me.username) ?
						<div className="bin" onClick={() => this.openDelete(u.username)}/> :
						<div/>
					}
				</td>
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
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
