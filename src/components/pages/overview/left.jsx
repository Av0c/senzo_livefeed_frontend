import React from 'react';
import Loading from 'components/common/loading';
import Section from 'components/common/section';
import SingleBarChart from 'components/common/graphs/singlebarchart';
import BigText from 'components/common/bigtext';
import { fetchCustomerOverview, getNodeStatistic } from 'actions/overview';
import { fetchLiveData }from 'actions/node';
import { connect } from 'react-redux';

class OverviewLeft extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchLiveData(this.props.user.rootnodeid));
    this.props.dispatch(fetchCustomerOverview(this.props.user.rootnodeid, this.props.currentSensor));
  }

  countTreeStatistic(root, map) {
    var statistic = {
      allRooms: 0,
      meetingRooms: 0,
      workingRooms: 0,
      allSensors: 0,
      roomsInUse: 0,
      desksInUse: 0
    };
    this.count(root, statistic, map);
    statistic.allSensors += map.size;
    console.log(statistic);
    return statistic;
  }

  count(root, statistic, map) {
    var self = this;
    if (root.children != null && root.children.length > 0){
      if (root.type == 'meeting_room' || root.type == 'open_area'){
        statistic.allRooms++;
        let occupied = false;
        root.children.forEach((sensor) => {
          if(map.get(sensor.id).inuse){
            occupied = true;
            statistic.desksInUse++;
          }
        });
        if (occupied) {
          statistic.roomsInUse++;
        }
        let len = root.children.length;
        if (root.type == 'meeting_room') {
          statistic.meetingRooms++;
        }
        else {
          statistic.workingRooms++;
        }
      }
      else {
        root.children.forEach(function (node) {
          self.count(node, statistic, map);
        });
      }
    }
  }

  render() {
    var overviewData = this.props.overview;
    this.countTreeStatistic(this.props.currentNode, this.props.currentSensor);
    return (
      <div style={{marginTop:'20px'}} className="overview-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4 col-xs-12">
              <div className="the-card clearfix">
                <h1 className="card-location">Main Office</h1>
                <div className="card-buttons clearfix">
                  <div className="card-inner-location pull-left"><span>Meeting Rooms </span><i className="fa fa-chevron-down" aria-hidden="true"></i>
                    <div className="dropdown card-area-dropdown">
                      <ul>
                        <li> <a href="#">Working Areas</a></li>
                        <li> <a href="#">Meeting Rooms</a></li>
                        <li className="all-areas"> <a href="#">All areas</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-nav pull-right"><a className="button-sm pull-right" href="#">LIVE </a><a className="button-sm pull-right nav-stats" href="#">Stats</a></div>
                </div>
                <div className="card-gauge-block"></div>
                <div className="card-marks-block"> </div>
                <div className="card-stats-numeric clearfix">
                  <div className="total-rooms-container text-center pull-left">
                    <div className="total-rooms-title"><span>Total Rooms</span></div>
                    <div className="total-rooms-number"><span>42</span></div>
                    <div className="total-rooms-inuse"><span id="rooms-inuse">12</span><span> in use   </span></div>
                  </div>
                  <div className="total-desks-container text-center pull-right">
                    <div className="total-desks-title"><span>Total Desks</span></div>
                    <div className="total-desks-number"><span>42</span></div>
                    <div className="total-desks-inuse"><span id="desks-inuse">12</span><span> in use   </span></div>
                  </div>
                </div>
                <div className="card-bottom-menu">
                  <div className="row">
                    <div className="col-xs-4 text-center"><a className="card-settings" href="#"><img src="src/assets/images/card-settings.svg" /></a></div>
                    <div className="col-xs-4 text-center"><a className="card-export" href="#"><img src="src/assets/images/export.svg" /></a></div>
                    <div className="col-xs-4 text-center"><a className="card-settings" href="#"><img src="src/assets/images/maintenance.svg" /></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-xs-12 text-center add-cart-zone"><a className="add-card"> <img src="src/assets/images/plus.svg" />
              <div className="add-card-descr">Add Location</div></a></div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    overview: state.overviewReducer.customerOverview,
    statistic: state.overviewReducer.treeStatistic,
    user: state.authReducer.user,
    currentSensor: state.nodeReducer.map,
    currentNode: state.overviewReducer.currentNode || state.overviewReducer.customerOverview
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewLeft);

