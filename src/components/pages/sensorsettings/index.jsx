import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"
import * as a from "actions/sensorsettings"
import * as aNode from "actions/node"

import NodeDropdown from "components/common/nodedropdown"
import ListDropdown from "components/common/listdropdown"
import Path from "components/common/path"

import SensorList from "./sensorlist"
import EditModal from "./editModal"
import DeleteModal from "./deleteModal"
import LeftMenu from 'components/common/leftmenu';

class SensorSettings extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			I: {},
			DOpen: false, // delete sensor modal open ?
			Drespond: "",
			DrespondClass: "",

			EOpen: false, // edit sensor modal open ?
			Erespond: "",
			ErespondClass: "",
		};
	}

	DOpen() {
		this.setState({ DOpen: true });
	}

	DClose() {
		this.props.dispatch(a.selectSensorButton({}));
		this.setState({ DOpen: false });
	}

	EOpen() {
		this.setState({ EOpen: true });
	}

	EClose() {
		this.props.dispatch(a.selectSensorButton({}));
		this.setState({ EOpen: false });
	}

	fetchData() {
		this.props.dispatch(aNode.fetchLiveData())
	}

	componentDidMount() {
		this.fetchData();
		var self = this;
		var I = setInterval(function () { self.fetchData() }, 5000);
		this.setState({ I: I });
	}

	componentWillUnmount() {
		clearInterval(this.state.I);
	}

	componentWillReceiveProps(nextProps) {
		// Init nodeFilter
		if (this.props.nodeFilter.id == -2 && nextProps.tree.id != -2) {
			this.props.dispatch(a.selectNodeFilter(nextProps.tree));
		}
		// Editing stages
		switch (nextProps.Estage) {
			case "editing":
				this.setState({
					Erespond: "Editing...",
					ErespondClass: "text-loading",
				});
				if (nextProps.fetched) {
					this.props.dispatch(a.needData());
				}
				break;
			case "edited":
				this.setState({
					Erespond: "Sensor edited.",
					ErespondClass: "text-green",
				});
				if (!nextProps.fetched) {
					this.fetchData();
				}
				break;
			case "edit-failed":
				this.setState({
					Erespond: "Failed to edit this sensor !",
					ErespondClass: "text-red"
				})
				break;
			default: // "nothing"
				this.setState({
					Erespond: "",
					ErespondClass: "",
				});
		}
		// Deleting stages
		switch (nextProps.Dstage) {
			case "deleting":
				if (nextProps.fetched) {
					this.props.dispatch(a.needData());
				}
				break;
			case "deleted":
				if (!nextProps.fetched) {
					this.fetchData();
				}
				this.DClose();
			default: // nothing
		}

	}

	getPath() {
		var cur = this.props.nodeFilter, tmp = [], path = [];
		while (cur) {
			tmp.push(cur);
			cur = cur.parent;
		}
		// reverse tmp to get the path.
		while (tmp.length) {
			path.push(tmp[tmp.length - 1]);
			tmp.pop();
		}
		return path
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

	clickDeleteButton() {
		this.props.dispatch(a.deleteSensor(this.props.selectedSensor));
	}

	linkOn(x) {
		return true;
	}

	link(x) {
		return null
	}

	onClick(e, x) {
		e.preventDefault()
		this.props.dispatch(a.selectNodeFilter(x));
	}

	render() {
		return (
			<div>
				<div className="settings-wrapper">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12">
								<LeftMenu overview='' comparison='' />
							</div>
						</div>
						<hr className="setting-divider"></hr>
						<div className="row">
							<div className="col-md-12">
								<div className="settings-header clearfix">
									<h2 className="account-title pull-left">Sensor Settings</h2>
									<NodeDropdown
										outsideClass="dropdown-btn settings-dropdown pull-left"
										root={this.props.tree}
										nodeFilter={this.props.nodeFilter}
										click={
											(node) => { this.props.dispatch(a.selectNodeFilter(node)) } /* this.props.dispatch(useradSelectNode(node)) }*/
										}
										list={this.listNodeFilter.bind(this)}
										header="All locations"
									/>
									<ListDropdown
										outsideClass="dropdown-btn settings-dropdown pull-left"
										items={config.sensorStatusFilter}
										getText={(x) => x.text}
										selected={this.props.sensorStatusFilter}
										click={(status) => { this.props.dispatch(a.selectSensorStatusFilter(status)) }}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Path
					path={this.getPath()}
					linkOn={this.linkOn.bind(this)}
					link={this.link.bind(this)}
					onClick={this.onClick.bind(this)}
				/>
				<SensorList
					root={this.props.nodeFilter}
					statusFilter={this.props.sensorStatusFilter}
					sensorMap={this.props.sensorMap}
					nodeMap={this.props.nodeMap}
					openDeleteModal={this.DOpen.bind(this)}
					openEditModal={this.EOpen.bind(this)}
					selectedSensor={this.props.selectedSensor}
				/>

				<EditModal
					open={this.state.EOpen}
					closeModal={this.EClose.bind(this)}
					sensor={this.props.selectedSensor}
					respond={this.state.Erespond}
					respondClass={this.state.ErespondClass}
				/>
				<DeleteModal
					open={this.state.DOpen}
					closeModal={this.DClose.bind(this)}
					respond={this.state.Drespond}
					respondClass={this.state.DrespondClass}
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
		sensorMap: state.nodeReducer.map,
		me: state.myAccountReducer.user,

		selectedSensor: state.sensorSettingsReducer.selectedSensor,
		nodeFilter: state.sensorSettingsReducer.nodeFilter,
		sensorStatusFilter: state.sensorSettingsReducer.sensorStatusFilter,


		Estage: state.sensorSettingsReducer.Estage,
		Erespond: state.sensorSettingsReducer.Erespond,

		Dstage: state.sensorSettingsReducer.Dstage,
		Drespond: state.sensorSettingsReducer.Drespond,
		fetched: state.sensorSettingsReducer.fetched,

	};
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SensorSettings);
