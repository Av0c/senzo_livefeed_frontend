import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"
import ReactTooltip from 'react-tooltip'
import Path from "components/common/path"

import NodeDropdown from "components/common/nodedropdown"
import ListDropdown from "components/common/listdropdown"

import ColorNote from "components/common/popupcolornote"
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
			showDetails: true,
			I: {}
		};
		this.prepare(this.props);
	}

	fetchLive(id) {
	    this.props.dispatch(fetchLiveData(this.props.user.companyid));
	}

	componentDidMount() {
		this.prepare(this.props);
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
		var path = [];
		var res = { currentNode: {} };
		this.findNode(props.nodeMap, props.params.id, path, res);
		this.setState({ currentNode: res.currentNode, path: path });

		var oldnode = this.state.currentNode;
		var currentNode = res.currentNode;

		var cond1 = (oldnode.id != currentNode.id && !this.empty(currentNode));
		var cond2 = (props.nodeFilter.info.empty && !this.empty(currentNode));
		var cond3 = (oldnode.id == currentNode.id && oldnode.children.length != currentNode.children.length);
		// console.log(oldnode, currentNode, cond1, cond2);
		if (cond1 || cond2 || cond3) {
			// either floor changed or no node filter yet => set node filter to all areas.
			this.props.dispatch(selectNodeFilter(currentNode));
		}
		if (currentNode.type == config.room.MEETINGROOM.code || props.nodeFilter.type == config.room.MEETINGROOM.code || props.viewFilter == config.viewFilter.MAINTENANCE) {
			this.setState({
				showDetails: true
			})
		}
	}

	findNode(nodeMap, id, path, res) {
		res.currentNode = nodeMap[id]
		if (!res.currentNode) {
			res.currentNode = {};
			return;
		}
		var tmp = [], cur = res.currentNode;
		while (cur) {
			tmp.push(cur);
			cur = cur.parent;
		}
		while (tmp.length) {
			path.push(tmp[tmp.length - 1]);
			tmp.pop();
		}
	}

	changeMRMode() {
		this.setState({
			showDetails: !this.state.showDetails
		});
	}

	listNodeFilter(root, res) {
		var self = this;
		if (root) {
			if (root.type == config.room.MEETINGROOM.code || root.type == config.room.OPENAREA.code) {
				res.push(root);
			}
			if (root.children) {
				root.children.forEach((child) => {
					self.listNodeFilter(child, res);
				})
			}
		}
	}

	render() {
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
											{(this.state.showDetails) ? "Hide details" : "Show details"}
										</div>

										<NodeDropdown
											outsideClass="live-select pull-left"
											root={this.state.currentNode}
											nodeFilter={this.props.nodeFilter}
											click={
												(node) => { this.props.dispatch(selectNodeFilter(node)) }
											}
											list={this.listNodeFilter.bind(this)}
											header="All areas"
										/>

										<ListDropdown
											outsideClass="live-select pull-left"
											items={config.viewFilter}
											getText={(x) => x.text}
											selected={this.props.viewFilter}
											click={(view) => { this.props.dispatch(selectViewFilter(view)) }}
										/>
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
				<Path path={this.state.path} linkOn={(x) => x.info.hasfloorplan} link={(x) => "live/"+x.id} marginTop={true}/>
				<ColorNote />
				<div className="container-fluid">
					<div className="floorplan-margin">
						<FloorPlan
							root={this.props.nodeMap[this.props.nodeFilter.id]}
							viewFilter={this.props.viewFilter}
							showDetails={this.state.showDetails}
							tooltipGroup="index"
							thumbnail={false}
						/>
					</div>
				</div>
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
		nodeMap: state.overviewReducer.nodeMap,
		nodeFilter: state.liveReducer.nodeFilter,
		viewFilter: state.liveReducer.viewFilter,
		sensorMap: state.nodeReducer.map,
		sensorMapError: state.nodeReducer.error,
		user: state.myAccountReducer.user,
		images: state.floorPlanReducer.images,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Live);