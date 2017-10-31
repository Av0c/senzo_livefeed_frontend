import React from 'react';
import Loading from 'components/common/loading';
import Section from 'components/common/section';
import SingleBarChart from 'components/common/graphs/singlebarchart';
import BigText from 'components/common/bigtext';
import { fetchCustomerOverview, getNodeStatistic } from 'actions/overview';
import { connect } from 'react-redux';

class OverviewLeft extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCustomerOverview(this.props.user.rootnodeid));
  }

  render() {
    var overviewData = this.props.overview;
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
    user: state.authReducer.user
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewLeft);

