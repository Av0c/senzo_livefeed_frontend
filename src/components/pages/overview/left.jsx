import React from 'react';
import { connect } from 'react-redux';
import appHistory from 'components/common/appHistory';
import Loading from 'components/common/loading';
import Section from 'components/common/section';
import SingleBarChart from 'components/common/graphs/singlebarchart';
import BigText from 'components/common/bigtext';
import { fetchCustomerOverview, getNodeStatistic } from 'actions/overview';
import { fetchLiveData } from 'actions/node';
import DateSelector from 'components/common/dateselector';
import LineChart from 'components/common/linechart';
import { selectNodeStats } from 'actions/node';
import { getOccupancyOverview, getParams } from 'actions/stats';
import Widget from 'components/pages/overview/widget';
import SearchContainer from 'components/pages/overview/searchcontainer';
import SearchBar from 'components/common/searchbar';

class OverviewLeft extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchLiveData(this.props.user.rootnodeid));

  }

  countTreeStatistic(root, map, type) {
    var statistic = {
      allRooms: 0,
      allSensors: 0,
      roomsInUse: 0,
      desksInUse: 0
    };
    this.count(root, statistic, map, type);
    return statistic;
  }

  count(root, statistic, map, type) {
    var self = this;
    if (root != null && root.children != null && root.children.length > 0) {
      if (((root.type == 'meeting_room' || root.type == 'open_area') && type == 'all_areas') || root.type == type) {
        statistic.allRooms++;
        let occupied = false;
        root.children.forEach((sensor) => {
          if (map.get(sensor.id)) {
            if (map.get(sensor.id).inuse) {
              occupied = true;
              statistic.desksInUse++;
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
          self.count(node, statistic, map, type);
        });
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    let params = getParams(nextProps);
    params.tag = 'TTO';
    this.props.dispatch(getOccupancyOverview(params));
  }

  renderWidget(){
    
  }

  render() {
    var stats = this.countTreeStatistic(this.props.currentNode, this.props.currentSensor, this.props.querySettings.room.code);
    return (
      <div style={{ marginTop: '20px' }} className="overview-block">
        <div className="container-fluid">
          <div style={{ marginBottom: '30px' }} className="row">
            <div className="col-md-12">
              <div className="main-menu-left pull-left">
                <a className="button active" href="#"> <i className="fa fa-home" aria-hidden="true"></i><span> Overview   </span></a>
                <a className="button" href="#"> <i className="fa fa-bar-chart" aria-hidden="true"></i><span> Comparison  </span></a>
              </div>
              <DateSelector />
            </div>
          </div>
          <div className="row">
            <Widget currentNode={this.props.currentNode} stats={stats} />
            <SearchContainer tree={this.props.overview}/>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.authReducer.user,
    currentSensor: state.nodeReducer.map,
    currentNode: state.overviewReducer.currentNode,
    querySettings: state.querySettingsReducer,
    overview: state.overviewReducer.customerOverview
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewLeft);

