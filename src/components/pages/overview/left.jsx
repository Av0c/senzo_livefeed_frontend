import React from 'react';
import Loading from 'components/common/loading';
import Section from 'components/common/section';
import SingleBarChart from 'components/common/graphs/singlebarchart';
import BigText from 'components/common/bigtext';
import { fetchCustomerOverview, getNodeStatistic } from 'actions/overview';
import { fetchLiveData } from 'actions/node';
import { connect } from 'react-redux';
import RoomTypeSelector from 'components/common/roomtypeselector';
import LocationStats from 'components/common/locationstats';
import LocationBottomMenu from 'components/common/locationbottommenu';
import Gauge from 'components/common/gauge';
import DateSelector from 'components/common/dateselector';

class OverviewLeft extends React.Component {

  componentDidMount() {
    console.log(this.props.user.rootnodeid);
    this.props.dispatch(fetchLiveData(this.props.user.rootnodeid));
    this.props.dispatch(fetchCustomerOverview(this.props.user.rootnodeid, this.props.currentSensor));
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
    if (root.children != null && root.children.length > 0) {
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

  render() {
    var overviewData = this.props.overview;
    var stats = this.countTreeStatistic(this.props.currentNode, this.props.currentSensor, this.props.roomType.code);
    return (
      <div style={{ marginTop: '20px' }} className="overview-block">
        <div className="container-fluid">
          <div style={{ marginBottom: '30px' }} className="row">
            <div className="col-md-12">
              <div className="main-menu-left pull-left">
                <a className="button active" href="#"> <i className="fa fa-home" aria-hidden="true"></i><span> Overview   </span></a>
                <a className="button" href="#"> <i className="fa fa-bar-chart" aria-hidden="true"></i><span> Comparison  </span></a>
              </div>
              <div className="main-menu-time pull-right">
                <ul>
                  <li><a className="button" href="#"> <span>Today</span></a></li>
                  <li><a className="button" href="#"> <span>This Week</span></a></li>
                  <li><a className="button" href="#"> <span>This Month</span></a></li>
                  <li><a className="button" href="#"> <span>This Year</span></a></li>
                  {/*  <li className="datepicker-parent"><a className="button active custom-time" href="#"><span>Custom</span></a>
                    <div className="datepicker">
                      <input className="start-date pull-left" type="text" placeholder="01.01.2017" />
                      <div className="date-divider pull-left">-</div>
                      <input className="end-date pull-left" type="text" placeholder="01.10.2017" />
                      <div className="datepicker-circle"></div><a className="timepicker-icon pull-left"><img src="src/assets/images/icon-clock.svg" /></a>
                    </div>
                  </li> */}
                </ul>
                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-xs-12">
              <div className="the-card clearfix">
                <h1 className="card-location">{this.props.currentNode.info.name}</h1>
                <div className="card-buttons clearfix">
                  <div className="card-inner-location pull-left">
                    <RoomTypeSelector />
                  </div>
                  <div className="card-nav pull-right"><a className="button-sm pull-right" href="#">LIVE </a><a className="button-sm pull-right nav-stats" href="#">Stats</a></div>
                </div>
                <div className="card-gauge-block">
                  <Gauge />
                </div>
                <div className="card-marks-block"> </div>
                <LocationStats stats={stats} />
                <LocationBottomMenu />
              </div>
            </div>
            <div className="col-sm-8 col-xs-12 text-center add-cart-zone"><a className="add-card"> <img src="src/assets/images/plus.svg" />
              <div className="add-card-descr">Add Location</div></a>
            </div>
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
    currentNode: state.overviewReducer.currentNode || state.overviewReducer.customerOverview,
    roomType: state.querySettingsReducer.room
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewLeft);

