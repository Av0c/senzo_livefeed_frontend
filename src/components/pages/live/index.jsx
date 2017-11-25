import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Path from "./path"
import NodeFilterDropdown from "./nodedropdown"
import ViewFilterDropdown from "./viewdropdown"
import LiveSummary from "./summary"
import FloorPlan from "./floorplan"

import {
	selectNodeFilter,
	selectViewFilter
} from "actions/live/filter"
import {
	fetchLiveData
} from 'actions/node';
import {
	fetchImage
} from 'actions/floorplan';



class Live extends React.Component {
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
			groupMR: true
		};
	}

	componentDidMount() {
		console.log(this.props.user);
	    this.props.dispatch(fetchLiveData(this.props.user.rootnodeid));
	}


	empty(node) {
		return (node.info.empty == true)
	}

	componentWillReceiveProps(nextProps) {
		// console.log("Live receive props");
		this.prepare(nextProps);
	}

	prepare(props) {
		var status = {found: false};
		var path = [];
		var res = {currentNode: null};
		this.findNode(props.tree, props.params.id, path, status, res);

		var oldnode = this.state.currentNode;
		var currentNode = res.currentNode;
		// console.log(oldnode, currentNode, (oldnode != currentNode && !this.empty(oldnode)), props);
		if (currentNode!=null && ((oldnode != currentNode && !this.empty(oldnode)) || (props.nodeFilter.info.empty && !this.empty(currentNode)))) {
			// either floor changed or no node filter yet => set node filter to all areas.
			this.props.dispatch(selectNodeFilter(currentNode));
		}
		if (oldnode != currentNode) {
			// floor changed => fetch new image
			this.props.dispatch(fetchImage(currentNode.id));
		}
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

	changeMRMode() {
		this.setState({
			groupMR: !this.state.groupMR
		});
	}

	render() {
		// ?? how to fix this ??
		// console.log("live render", this.state.currentNode.info, this.props.tree.info);
		if (this.state.currentNode.info.empty && !this.empty(this.props.tree)) {
			// console.log("render prep", this.props);
			this.prepare(this.props);
		}
		// ??
		return (
			<div>
				<div className="live-header-wrapper">
					<div className="stats-menu">     
						<div className="container-fluid">
							<div className="row">
								<div className="col-sm-12">
									<div className="main-menu-left pull-left">

										<a className="button" href="#">
											<i className="fa fa-home" aria-hidden="true"></i>
											<span> Overview   </span>
										</a>

										<a className="button" href="#">
											<i className="fa fa-bar-chart" aria-hidden="true"></i>
											<span> Comparison </span>
										</a>

									</div>

									<div className="live-title pull-left">
										<h1>{this.state.currentNode.info.name}</h1>
									</div>

									<div className="live-top-menu pull-right">
										<input type="checkbox" onChange={this.changeMRMode.bind(this)}/>

										<div className="live-select pull-left">
											<NodeFilterDropdown
												root={this.state.currentNode}
												nodeFilter={this.props.nodeFilter}
												click={
													(node) => { this.props.dispatch(selectNodeFilter(node)) }
												}
											/>
										</div>

										<div className="live-select pull-left">
											<ViewFilterDropdown
												viewFilter={this.props.viewFilter}
												click={
													(node) => { this.props.dispatch(selectViewFilter(node)) }
												}
											/>
										</div>
			                            <Link className='button-sm pull-right nav-stats' to={'/statistic/' + this.state.currentNode.id}> Stats</Link>
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
				<FloorPlan
					imageURL={this.props.imageURL}
					root={this.props.nodeFilter}
					viewFilter={this.props.viewFilter}
					sensorMap={this.props.sensorMap}
					groupMR={this.state.groupMR}
				/>
				<LiveSummary
					root={this.state.currentNode}
					sensorMap={this.props.sensorMap}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		tree: state.overviewReducer.customerOverview,
		nodeFilter: state.liveReducer.nodeFilter,
		viewFilter: state.liveReducer.viewFilter,
		sensorMap: state.nodeReducer.map,
		sensorMapError: state.nodeReducer.error,
	    user: state.authReducer.user,
	    imageURL: state.floorPlanReducer.imageURL
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Live);