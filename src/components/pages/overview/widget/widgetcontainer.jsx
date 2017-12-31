import React from 'react';
import { connect } from 'react-redux';
import config from 'config';
import Widget from 'components/pages/overview/widget/widget';
import { getOccupancyOverview, getParams } from 'actions/stats';
import { selectViewFilter } from "actions/live/filter";
import { updateUser } from 'actions/myaccount';

export class WidgetContainer extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      area: config.room.ALLAREA
    };
  }

  componentDidMount() {
    let type = this.props.node.type;
    if (type == 'open_area') {
      this.setState({ area: config.room.OPENAREA });
    }
    else if (type == 'meeting_room') {
      this.setState({ area: config.room.MEETINGROOM });
    }
  }

  componentWillReceiveProps(nextProps) {
    let type = nextProps.node.type;
    if (type == 'open_area' || type == 'meeting_room') {
      if (this.state.area.code != type) {
        if (type == 'open_area') {
          this.setState({ area: config.room.OPENAREA });
        }
        else if (type == 'meeting_room') {
          this.setState({ area: config.room.MEETINGROOM });
        }
      }
    }
  }

  chooseArea(area) {
    this.setState({ area: area });
  }

  getOverview(area) {
    var self = this;
    this.setState({ area: area }, () => {
      self.props.querySettings.room = self.state.area;
      let params = getParams({ currentNode: self.props.node, querySettings: self.props.querySettings });
      if (this.props.action) {
        params.action = this.props.action;
      }
      this.props.dispatch(getOccupancyOverview(params, self.props.node));
    }
    );
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
            }
            else if (map.get(sensor.id).faulty) {
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
    let gauge = [this.props.stats.average, this.props.stats.peak];
    let bar = this.props.stats.marks || [1, 0, 0];
    return (
      <Widget bar={bar} gauge={gauge} type={this.state.area.type}
        node={this.props.node} stats={stats} id={this.props.id}
        getOverview={this.getOverview.bind(this)} action={this.props.action}
        redirectMaintenanceView={this.redirectMaintenanceView.bind(this)}
        deleteWidget={this.props.deleteWidget.bind(this)} tree={this.props.tree}
        editWidget={this.props.editWidget} />
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.myAccountReducer.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetContainer);