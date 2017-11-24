import React from 'react';
import Dropdown from 'components/common/dropdown';
import DropdownItem from 'components/common/dropdownitem';
import config from 'config';

import { connect } from 'react-redux';

export default class LiveSummary extends React.Component {
	optionClicked(node) {
		this.props.click(node);
	}

	listAreas(root, type, res) {
		var self = this;
		if (root) {
			root.children.forEach((child) => {
				if(child.type==type) {
					res.push(child);
				}
			})
		}
	}

	summary(node) {
		var res = {
			total: 0,
			inUse: 0,
		}
		node.children.forEach((child) => {
			if (child.type == "sensor") {
				var ss = this.props.sensorMap.get(child.id);
				if (typeof ss != "undefined") {
					res.total++;
					if (ss.inuse) {
						res.inUse++;
					}
				}
			}
		});
		return res;
	}

	render() {
		var OAs = [], MRs = [];
		this.listAreas(this.props.root, config.room.OPENAREA.code, OAs);
		this.listAreas(this.props.root, config.room.MEETINGROOM.code, MRs);
		console.log("sensor", this.props.sensorMap);

		return (
			<div className="container-fluid"> 
			  <div className="row">
				<div className="col-md-6">
				  <div className="live-stats-card card">
					<table className="table text-center"><tbody>
					  <tr>
						<td></td>
						<td className="live-stats-heading">Total:</td>
						<td className="live-stats-heading" colSpan="3">Current Usage:</td>
					  </tr>
					  <tr className="objects-list"> 
						<td className="live-stats-heading">Working Areas </td>
						<td> </td>
						<td>In Use</td>
						<td>Unused</td>
						<td>Occupancy</td>
					  </tr>
					  {
					  	OAs.map((x) => {
							var smr = this.summary(x);
							return (
								<tr className="objects-list" key={x.id}> 
									<td className="object-name">{x.info.name}</td>
									<td>{smr.total}</td>
									<td>{smr.inUse}</td>
									<td>{smr.total-smr.inUse}</td>
									<td>{(smr.total>0) ? Math.round(100*smr.inUse/smr.total)/100 : 0}%</td>
								</tr>
							);
					  	})
					  }
					  <tr className="objects-list"> 
						<td className="live-stats-heading">Meeting Rooms</td>
						<td> </td>
						<td>Status</td>
						<td>Users</td>
						<td>Efficiency</td>
					  </tr>
					  {
					  	MRs.map((x) => {
							var smr = this.summary(x);
							return (
								<tr className="objects-list" key={x.id}> 
									<td className="object-name">{x.info.name}</td>
									<td>{smr.total}</td>
									<td><Status taken={(smr.inUse >0)} /></td>
									<td>{smr.inUse}</td>
									<td>{(smr.inUse>0) ? Math.round(100*smr.inUse/smr.total)/100+"%" : ""}</td>
								</tr>
							);
					  	})
					  }
					</tbody></table>
				  </div>
				</div>
			  </div>
			</div>
		)
	}
}

class Status extends React.Component {
	render() {
		if (this.props.taken) {
			return (<img src="/src/assets/images/room-taken.svg" alt="Taken"/>);
		} else {
			return (<img src="/src/assets/images/room-free.svg" alt="Free"/>);
		}
	}
}