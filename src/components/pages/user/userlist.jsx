import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"
import { listContact } from "actions/user"

export default class UserList extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		let u1 = this.props.contact.companyadmins;
		let u2 = this.props.contact.localadmins;
		let u3 = this.props.contact.localusers;
		let u4 = this.props.contact.supportusers;
		let names = this.props.contact.nodenames;
		if (u1 && u2 && u3 && u4 && names) {
			return (
				<div className="users-section">
					<table className="table"><tbody>
					<tr>
						<td className="table-heading">
						<h4>Company administrators  </h4>
						</td>
					</tr>
					{
						u1.map((u) => (
							<tr key={u.username}>
								<td> <span className={u.registered ? "active-user" : "pending-user"}>{u.title + " " + u.firstname + " " + u.lastname}</span></td>
								<td> <a className="table-email" href={"mailto:"+u.email}>{u.email}</a></td>
								<td>{u.phone}</td>
								<td>Administrator</td>
								<td>{names[String(u.rootnodeid)]}</td>
								<td className="text-right">{u.canmodify? <a className="bin" href="#delete-user-modal" data-toggle="modal"/> : <div/>}</td>
							</tr>
						))
					}
					<tr>
						<td className="table-heading">
						<h4>Local administrators      </h4>
						</td>
					</tr>
					{
						u2.map((u) => (
							<tr key={u.username}>
								<td> <span className={u.registered ? "active-user" : "pending-user"}>{u.title + " " + u.firstname + " " + u.lastname}</span></td>
								<td> <a className="table-email" href={"mailto:"+u.email}>{u.email}</a></td>
								<td>{u.phone}</td>
								<td>Local Administrator</td>
								<td>{names[String(u.rootnodeid)]}</td>
								<td className="text-right">{u.canmodify? <a className="bin" href="#delete-user-modal" data-toggle="modal"/> : <div/>}</td>
							</tr>
						))
					}
					<tr>
						<td className="table-heading">
						<h4>Local Users</h4>
						</td>
					</tr>
					{
						u3.map((u) => (
							<tr key={u.username}>
								<td> <span className={u.registered ? "active-user" : "pending-user"}>{u.title + " " + u.firstname + " " + u.lastname}</span></td>
								<td> <a className="table-email" href={"mailto:"+u.email}>{u.email}</a></td>
								<td>{u.phone}</td>
								<td>Local User</td>
								<td>{names[String(u.rootnodeid)]}</td>
								<td className="text-right">{u.canmodify? <a className="bin" href="#delete-user-modal" data-toggle="modal"/> : <div/>}</td>
							</tr>
						))
					}
					<tr>
						<td className="table-heading">    
						<h4>Support         </h4>
						</td>
					</tr>
					{
						u4.map((u) => (
							<tr key={u.username}>
								<td> <span className={u.registered ? "active-user" : "pending-user"}>{u.title + " " + u.firstname + " " + u.lastname}</span></td>
								<td> <a className="table-email" href={"mailto:"+u.email}>{u.email}</a></td>
								<td>{u.phone}</td>
								<td>Support User</td>
								<td>{names[String(u.rootnodeid)]}</td>
								<td className="text-right"> {u.canmodify? <a className="bin" href="#delete-user-modal" data-toggle="modal"/> : <div/>}</td>
							</tr>
						))
					}
					</tbody></table>
				</div>
			);
		} else {
			return <div/>
		}
	}
}