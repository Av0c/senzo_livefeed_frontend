import React from 'react';
import { connect } from 'react-redux';
import config from 'config';
import Widget from 'components/pages/overview/widget/widget';
import { getOccupancyOverview, getParams, findOccupancyTag } from 'actions/stats';
import { selectViewFilter } from "actions/live/filter";

export class WidgetContainer extends React.Component {

	constructor(props, context) {
		super(props, context);
		let area = {};
		let type = this.props.node.type;
		switch (type) {
			case "open_area":
				area = config.room.OPENAREA;
				break;
			case "meeting_room":
				area = config.room.MEETINGROOM;
				break;
			default:
				area = config.room.ALLAREA;
		}

		this.state = {
			area: area,
			data: {},
		};
	}

	componentDidMount() {
		this.setState({data: this.getOverview(this.props)});
	}

	querySettingsChanged(node, querrySettings, rawParams) {
		let params = getParams({ querySettings: querrySettings, currentNode: node });
		params.tag = findOccupancyTag({type: this.state.area.code});
		return (
			params.startdate !== rawParams.startdate ||
			params.enddate !== rawParams.enddate ||
			params.starthour !== rawParams.starthour ||
			params.endhour !== rawParams.endhour ||
			params.weekdaymask !== rawParams.weekdaymask ||
			params.tag !== rawParams.tag ||
			params.room !== rawParams.room
		);
	}

	getOverview(props) {
		let node = props.node;
		let data = this.state.data;
		if (node) {
			let id = node.id;
			var overview = props.overviewMap[id];
			if (overview && !overview.loading && !this.querySettingsChanged(node, props.querySettings, overview.params)) {
				data = overview.data;
			} else if (overview && overview.loading) {
				// just wait
			} else {
				let params = getParams({ querySettings: props.querySettings, currentNode: node });
				params.tag = findOccupancyTag({type: this.state.area.code});
				props.dispatch(getOccupancyOverview(params, node));
			}
		}
		return data;
	}


	componentWillReceiveProps(nextProps) {
		let type = nextProps.node.type;
		if (this.props.node.type != type) {
			let area = {};
			switch (type) {
				case "open_area":
					area = config.room.OPENAREA;
					break;
				case "meeting_room":
					area = config.room.MEETINGROOM;
				default:
					area = config.room.ALLAREA;
			}
			this.selectAreaFilter(area)
		} else {
			this.setState({data: this.getOverview(nextProps)});
		}
	}

	selectAreaFilter(area) {
		this.setState({ area: area }, () => this.setState({data: this.getOverview(this.props)}));
	}

	countTreeStatistic(root, map) {
		var statistic = {
			allRooms: 0,
			allSensors: 0,
			roomsInUse: 0,
			desksInUse: 0,
			faulties: 0
		};
		this.count(root, statistic, map);
		return statistic;
	}

	count(root, statistic, map) {
	var self = this;
	if (root != null && root.children != null && root.children.length > 0) {
		if (((root.type == 'meeting_room' || root.type == 'open_area') && this.state.area.code == 'all_areas') || root.type == this.state.area.code) {
			statistic.allRooms++;
			let occupied = false;
			root.children.forEach((sensor) => {
				if (map.get(sensor.id)) {
					if (map.get(sensor.id).inuse) {
						occupied = true;
						statistic.desksInUse++;
					} else if (map.get(sensor.id).faulty) {
						statistic.faulties++;
					}
				}
			});
			statistic.allSensors += root.children.length;
			if (occupied) {
				statistic.roomsInUse++;
			}
		}
		else {
			root.children.forEach(function (node) {
				self.count(node, statistic, map);
			});
		}
	}
	}

	redirectMaintenanceView(node) {
		if (node.info.hasfloorplan) {
			this.props.dispatch(selectViewFilter(config.viewFilter[2]));
		}
	}

	render() {
		let stats = this.countTreeStatistic(this.props.node, this.props.allSensors);
		let gauge = [this.state.data.average || 0, this.state.data.peak || 0];
		let bar = this.state.data.marks || [1, 0, 0];
		return (
			<Widget bar={bar} gauge={gauge} type={this.state.area.type}
			node={this.props.node} stats={stats} id={this.props.id}
			getOverview={this.selectAreaFilter.bind(this)} action={this.props.action}
			redirectMaintenanceView={this.redirectMaintenanceView.bind(this)}
			deleteWidget={this.props.deleteWidget.bind(this)} tree={this.props.tree}
			editWidget={this.props.editWidget} />
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.myAccountReducer.user,
        overviewMap: state.statsReducer.overviewMap,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetContainer);
