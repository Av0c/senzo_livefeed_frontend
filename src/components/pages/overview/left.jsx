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
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.dispatch(fetchLiveData(this.props.user.companyid));
        this.props.dispatch(fetchCurrentUser());
    }

    componentWillReceiveProps(nextProps) {
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
                    <div className="overview-grid">
                        <Widgets tree={this.props.tree} querySettings={this.props.querySettings} allSensors={this.props.currentSensor} />
                        <SearchContainer tree={this.props.tree} querySettings={this.props.querySettings} />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.myAccountReducer.user,
        currentSensor: state.nodeReducer.map,
        currentNode: state.overviewReducer.currentNode,
        querySettings: state.querySettingsReducer,
        tree: state.overviewReducer.customerOverview,
        nodeMap: state.overviewReducer.nodeMap,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewLeft);
