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
            <div className="grid-card-center">
                <div className="the-card clearfix" ref={(e) => {this.widget = e}}>
                    <div data-tooltip={this.props.node.info.name}>
                        <h1 className="card-location">{this.props.node.info.name}</h1>
                    </div>
                    <div className="card-buttons clearfix">
                        <div className="card-inner-location pull-left">
                            <RoomTypeSelector roomType={this.props.node.type} type={this.props.type} chooseType={this.props.getOverview} />
                        </div>
                        <div className="card-nav pull-right">
                            {
                                this.props.node.info.hasfloorplan ?
                                <Link
                                    className='widget-button pull-right'
                                    data-tooltip="Live"
                                    to={'live/' + this.props.node.id}
                                    onClick={() => this.props.dispatch(selectViewFilter(config.viewFilter[1]))}
                                >
                                    <i className="material-icons">&#xE1E2;</i>
                                </Link>
                                : <div className='widget-button-disabled pull-right' data-tooltip="Live not available"><i className="material-icons">&#xE0CE;</i></div>
                            }
                            <Link className='widget-button pull-right' data-tooltip="Heatmap"
                                 to={'/heatmap/' + this.props.node.id}><i className="material-icons">&#xE3A5;</i>
                            </Link>
                            <Link className='widget-button pull-right' data-tooltip="Stats"
                                 to={'/statistic/' + this.props.node.id}><i className="material-icons">&#xE801;</i>
                            </Link>
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
                        tree={this.props.tree} editWidget={this.props.editWidget}
                        widget={this.widget}
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.myAccountReducer.user,
        nodeMap: state.overviewReducer.nodeMap,
        overviewMap: state.statsReducer.overviewMap,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Widget);
