import React from 'react';
import { connect } from 'react-redux';
import Path from "./path"
import NodeFilterDropdown from "./nodedropdown"

import {
	selectNodeFilter,
	selectViewFilter
} from "actions/live/filter"


export default class Live extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			currentNode: {
				info: {
					name: "",
					empty: true
				},
				children: [],
				type: null
			},
			path: [],
		};
	}

	componentWillReceiveProps(nextProps) {
		var oldnode = this.state.currentNode;
		var currentNode = this.prepare(nextProps).currentNode;
		if ((oldnode != currentNode) || (nextProps.nodeFilter.info.empty && (typeof currentNode.info.empty != "undefined"))) {
			// either change floor or no node filter yet => set node filter to all areas.
			this.props.dispatch(selectNodeFilter(currentNode));
		}
	}

	prepare(props) {
		var status = {found: false};
		var path = [];
		var res = {currentNode: null};
		this.findNode(props.tree, props.params.id, path, status, res);
		return res;
	}

	findNode(tree, id, path, status, res) {
		var self = this;
		if (tree) {
			path.push(tree.info.name);
			if (id == tree.id) {
				this.setState({
					currentNode: tree,
					path: path
				});
				res.currentNode = tree;
				status.found = true;
				return;
			}

			else if(tree.type!="meeting_room" && tree.type!="open_area" ) {
				tree.children.forEach((child) => {
					if (!status.found) {
						self.findNode(child, id, path, status, res);
					}
				})
			}
			if (!status.found) {
				path.pop();
			}
		}
	}

	render() {
		console.log(this.props.nodeFilter);
		return (
			<div>
				<div className="live-header-wrapper">
				  <div className="stats-menu">     
					<div className="container-fluid">
					  <div className="row">
						<div className="col-sm-12">
						  <div className="main-menu-left pull-left"><a className="button" href="#">
							<i className="fa fa-home" aria-hidden="true"></i>
							<span> Overview   </span></a>
							<a className="button" href="#"> <i className="fa fa-bar-chart" aria-hidden="true"></i><span> Comparison </span></a>
						  </div>
						  <div className="live-title pull-left">
							<h1>{this.state.currentNode.info.name}</h1>
						  </div>
						  <div className="live-top-menu pull-right">
							<div className="live-select pull-left">
							<i className="fa fa-chevron-down" aria-hidden="true"> </i>
							  	<div className="dropdown">
							  		<NodeFilterDropdown
							  			root={this.state.currentNode}
							  			nodeFilter={this.props.nodeFilter}
							  			click={
							  				(node) => { this.props.dispatch(selectNodeFilter(node)) }
							  			}
							  		/>
								</div>
							</div>
							<div className="live-select pull-left"><span>Live View </span><i className="fa fa-chevron-down" aria-hidden="true"></i>
							  <div className="dropdown">
								<ul>
								  <li> <a href="#">Maintenance View</a></li>
								</ul>
							  </div>
							</div><a className="stats-live-btn button-sm pull-left" href="#">Stats</a>
						  </div>
						{/*
						  <div className="toolbar">
							<div className="toolbr-tools clearfix"><a className="toolbar-seat" href="#"></a><a className="toolbar-meeting-room" href="#"></a><a className="toolbar-mr" href="#"></a></div>
							<div className="toolbar-close clearfix"><a className="toolbar-arrow-right" href="#"></a><a className="toolbar-arrow-left" href="#"></a></div>
						  </div>
					  */}
						</div>
					  </div>
					</div>
				  </div>
				</div>
				<Path path={this.state.path} />
				<div className="container-fluid">
				  <div className="row">
					<div className="col-md-12">
					  <div className="floorplan-container">
						<div className="temp-floorplan"></div>
					  </div>
					</div>
				  </div>
				</div>
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
						  <tr className="objects-list"> 
							<td className="object-name">West Wing</td>
							<td>50</td>
							<td>31</td>
							<td>19</td>
							<td>62%</td>
						  </tr>
						  <tr className="objects-list"> 
							<td className="object-name">Mid Wing</td>
							<td>24</td>
							<td>4</td>
							<td>20</td>
							<td>17%</td>
						  </tr>
						  <tr className="objects-list"> 
							<td className="live-stats-heading">Meeting Rooms</td>
							<td> </td>
							<td>Status</td>
							<td>Users</td>
							<td>Efficiency</td>
						  </tr>
						  <tr className="objects-list"> 
							<td className="object-name">Blue Room</td>
							<td>8</td>
							<td> <img src="/src/assets/images/room-free.svg" alt="Free"/></td>
							<td>0</td>
							<td></td>
						  </tr>
						  <tr className="objects-list"> 
							<td className="object-name">Executive Room</td>
							<td>12</td>
							<td> <img src="/src/assets/images/room-taken.svg" alt="Taken"/></td>
							<td>2</td>
							<td>16%</td>
						  </tr>
						  <tr className="objects-list"> 
							<td className="object-name">Red Room</td>
							<td>8</td>
							<td> <img src="/src/assets/images/room-taken.svg" alt="Taken"/></td>
							<td>5</td>
							<td>62%  </td>
						  </tr>
						</tbody></table>
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
		nodeFilter: state.liveReducer.nodeFilter,
		viewFilter: state.liveReducer.viewFilter
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Live);