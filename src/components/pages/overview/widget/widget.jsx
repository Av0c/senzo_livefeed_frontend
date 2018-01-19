import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"
import {
    selectViewFilter
} from "actions/live/filter"

import Gauge from 'components/common/gauge';
import Bar from 'components/common/bar';
import RoomTypeSelector from 'components/common/roomtypeselector';
import LocationStats from 'components/common/locationstats';
import LocationBottomMenu from 'components/common/locationbottommenu';
import { RECEIVE_FIRST_LOCATION_OVERVIEW, RECEIVE_SECOND_LOCATION_OVERVIEW } from 'actions/comparison';


class Widget extends React.Component {

    render() {
        let style = null;
        if ((this.props.action == RECEIVE_SECOND_LOCATION_OVERVIEW) || (this.props.action == RECEIVE_FIRST_LOCATION_OVERVIEW)) {
            style = "widget";
        }
        return (
                <div className="the-card clearfix">
                    <h1 className="card-location" title={this.props.node.info.name}>{this.props.node.info.name}</h1>
                    <div className="card-buttons clearfix">
                        <div className="card-inner-location pull-left">
                            <RoomTypeSelector roomType={this.props.node.type} type={this.props.type} chooseType={this.props.getOverview} />
                        </div>
                        <div className="card-nav pull-right">
                            {
                                this.props.node.info.hasfloorplan ?
                                    <Link className='button-sm pull-right'
                                        to={'live/' + this.props.node.id}
                                        onClick={() => this.props.dispatch(selectViewFilter(config.viewFilter[1]))}
                                    > Live</Link>
                                : <div className='button-disabled pull-right'> Live</div>
                            }
                            <Link className='button-sm pull-right nav-stats' to={'/statistic/' + this.props.node.id}> Stats</Link>
                        </div>
                    </div>
                    <Gauge
                        label="Occupancy"
                        arcParams={[180, 125]}
                        values={this.props.gauge}
                    />
                    <Bar values={this.props.bar} />
                    <LocationStats stats={this.props.stats} />
                    <LocationBottomMenu faulty={this.props.stats.faulties} node={this.props.node}
                        redirectMaintenanceView={this.props.redirectMaintenanceView}
                        deleteWidget={this.props.deleteWidget}
                        tree={this.props.tree} editWidget={this.props.editWidget} />
                </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(null, mapDispatchToProps)(Widget);