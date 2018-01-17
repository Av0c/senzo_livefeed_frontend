import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import CountriesAndTimezones from 'countries-and-timezones';
import { fetchCustomerOverview, getNodeStatistic } from 'actions/overview';
import { fetchLiveData } from 'actions/node';
import { fetchCurrentUser } from 'actions/myaccount';
import DateSelector from 'components/common/dateselector';
import { selectNodeStats, updateNode } from 'actions/node';
import { getOccupancyOverview, getParams, findOccupancyTag } from 'actions/stats';
import Widgets from 'components/pages/overview/widget';
import SearchContainer from 'components/pages/overview/searchcontainer';
import LeftMenu from 'components/common/leftmenu';
import getCountryName from '../../../countries';
import DeleteLocationForm from 'components/common/deletelocationform';

class OverviewLeft extends React.Component {

    componentDidMount() {
        let self = this;
        this.props.dispatch(fetchLiveData(this.props.user.companyid));
        this.props.dispatch(fetchCurrentUser());
    }

    getOverViewOfFavoriteNodes(node, querySettings, ids) {
        var self = this;
        if (ids.indexOf(node.id) != -1) {
            let params = getParams({ querySettings: querySettings, currentNode: node });
            params.tag = findOccupancyTag(node);
            self.props.dispatch(getOccupancyOverview(params, node));
        }
        if (node.type != 'meeting_room' && node.type != 'open_area' && node.children) {
            node.children.forEach((element) => {
                self.getOverViewOfFavoriteNodes(element, querySettings, ids)
            });
        }
    }

    fixLocationSensor(node) {
        let self = this;
        if (node.children && node.children.length > 0) {
            node.children.forEach((element) => {
                if (element.type == 'sensor') {
                    let sensor = Object.assign({}, element);
                    sensor.info.xpercent = sensor.info.xpercent - 0.7;
                    sensor.info.ypercent = sensor.info.ypercent - 0.7;
                    self.props.dispatch(updateNode(sensor));
                }
                else {
                    self.fixLocationSensor(element);
                }
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userDetails.details && nextProps.userDetails.details.location.length > 0) {
            if (!(this.props.user.details && (this.props.userDetails.details.location.length == nextProps.userDetails.details.location.length))) {
                this.getOverViewOfFavoriteNodes(nextProps.overview, nextProps.querySettings, nextProps.userDetails.details.location);
            }
        }
    }

    render() {
        return (
            <div className="overview-block">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 static-menu">
                            <LeftMenu overview='active' comparison='' />
                            <DateSelector />
                        </div>
                    </div>
                    <div className="row">
                        <Widgets tree={this.props.overview} querySettings={this.props.querySettings} allSensors={this.props.currentSensor} />
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
        userDetails: state.myAccountReducer.user,
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
