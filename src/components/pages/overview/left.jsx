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
import Widgets from 'components/pages/overview/widget';
import SearchContainer from 'components/pages/overview/searchcontainer';
import SearchBar from 'components/common/searchbar';

class OverviewLeft extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchLiveData(this.props.user.companyid));

  }

  componentWillReceiveProps(nextProps) {
    let params = getParams(nextProps);
    params.tag = 'TTO';
    this.props.dispatch(getOccupancyOverview(params, nextProps.currentNode));
  }

  renderWidget() {

  }

  render() {
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewLeft);

