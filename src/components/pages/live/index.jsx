import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"
import Path from "./path"
import NodeFilterDropdown from "./nodedropdown"
import ViewFilterDropdown from "./viewdropdown"
import LiveSummary from "./summary"
import FloorPlan from "./floorplan"
import LeftMenu from 'components/common/leftmenu';

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
			groupMR: false,
			I: {}
		};
	}

	fetchLive(id) {
		this.props.dispatch(fetchLiveData(id));
	}

	componentDidMount() {
		this.fetchLive(this.props.user.rootnodeid);
		var I = setInterval(this.fetchLive.bind(this, this.props.user.rootnodeid), 5000);
		this.setState({ I: I });
	}

	componentWillUnmount() {
		clearInterval(this.state.I);
	}

	empty(node) {
		return (node.info.empty == true)
	}

	componentWillReceiveProps(nextProps) {
		this.prepare(nextProps);
	}

	prepare(props) {
		var status = { found: false };
		var path = [];
		var res = { currentNode: null };
		this.findNode(props.tree, props.params.id, path, status, res);

		var oldnode = this.state.currentNode;
		var currentNode = res.currentNode;

		var cond1 = (oldnode.id != currentNode.id && !this.empty(currentNode));
		var cond2 = (props.nodeFilter.info.empty && !this.empty(currentNode));
		// console.log(oldnode, currentNode, cond1, cond2);
		if (cond1 || cond2) {
			// either floor changed or no node filter yet => set node filter to all areas.
			this.props.dispatch(selectNodeFilter(currentNode));
		}
		if (currentNode.type == config.room.MEETINGROOM.code || props.nodeFilter.type == config.room.MEETINGROOM.code || props.viewFilter == config.viewFilter.MAINTENANCE) {
			this.setState({
				groupMR: false
			})
		}
		if (oldnode.id != currentNode.id) {
			// floor changed => fetch new image
			this.props.dispatch(fetchImage(currentNode.id));
		}
	}

	findNode(tree, id, path, status, res) {
		var self = this;
		if (tree) {
			path.push(tree);
			if (id == tree.id) {
				this.setState({
					currentNode: tree,
					path: path
				});
				res.currentNode = tree;
				status.found = true;
				return;
			}

			else if (tree.type != "meeting_room" && tree.type != "open_area" && tree.children) {
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
									<LeftMenu overview='active' comparison='' />

									<div className="live-title pull-left">
										<h1>{this.state.currentNode.info.name}</h1>
									</div>

									<div className="live-top-menu pull-right">
										<div className="button-sm pull-left nav-stats show-hide-details" onClick={this.changeMRMode.bind(this)}>
											{(this.state.groupMR) ? "Hide details" : "Show details"}
										</div>

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
													(node) => { console.log(node);
														this.props.dispatch(selectViewFilter(node)); }
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