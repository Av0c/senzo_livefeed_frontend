import React from 'react';
import { connect } from 'react-redux';
import { fetchCustomerOverview, getNodeStatistic } from 'actions/overview';
import { fetchLiveData } from 'actions/node';
import DateSelector from 'components/common/dateselector';
import { selectNodeStats } from 'actions/node';
import { getOccupancyOverview, getParams, findOccupancyTag } from 'actions/stats';
import Widgets from 'components/pages/overview/widget';
import SearchContainer from 'components/pages/overview/searchcontainer';
import LeftMenu from 'components/common/leftmenu';


class OverviewLeft extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchLiveData(this.props.user.rootnodeid));

  }

  componentWillReceiveProps(nextProps) {
    var self = this;
    nextProps.widgets.forEach((node) => {
      let params = getParams({querySettings: nextProps.querySettings, currentNode: node});
      params.tag = findOccupancyTag(node);
      nextProps.dispatch(getOccupancyOverview(params, node));
    });
    let params = getParams(nextProps);
    params.tag = findOccupancyTag(nextProps.currentNode);
    this.props.dispatch(getOccupancyOverview(params, nextProps.currentNode));
  }

  render() {
    return (
      <div style={{ marginTop: '20px' }} className="overview-block">
        <div className="container-fluid">
          <div style={{ marginBottom: '30px' }} className="row">
            <div className="col-md-12">
              <LeftMenu overview='active' comparison='' />
              <DateSelector />
            </div>
          </div>
          <div className="row">
            <Widgets querySettings={this.props.querySettings} allSensors={this.props.currentSensor} />
            <SearchContainer tree={this.props.overview} querySettings={this.props.querySettings} />
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
    overview: state.overviewReducer.customerOverview,
    widgets: state.statsReducer.widgets
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewLeft);

