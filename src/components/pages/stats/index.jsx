import React from 'react';
import { connect } from 'react-redux';
import DateSelector from 'components/common/dateselector';
import StatsMenu from 'components/common/statsmenu';
import TotalOccupancy from 'components/pages/stats/totaloccupancy';
import { getNodeSeriesStats, getParams } from 'actions/stats';

export class Stats extends React.Component {

    componentWillReceiveProps(nextProps) {
        let params = getParams(nextProps);
        this.props.dispatch(getNodeSeriesStats(params));
    }

    render() {
        
        return (
            <div className="stats-body" id="stats-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12" style={{ backgroundColor: 'white', paddingTop: '10px' }}>
                            <div className="main-menu-left pull-left">
                                <a className="button active"> <i className="fa fa-home" aria-hidden="true"></i><span> Overview   </span></a>
                                <a className="button"> <i className="fa fa-bar-chart" aria-hidden="true"></i><span> Comparison  </span></a>
                            </div>
                            <DateSelector />
                            <StatsMenu />
                        </div>
                        <div className="col-md-12">
                            <div className="col-sm-12">
                                <div className="stats-graph-card card-shape clearfix">
                                    <div className="graph-header clearfix">
                                        <h2>Total Occupancy</h2>
                                    </div>
                                    <div className="the-graph clearfix">
                                        <TotalOccupancy />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="stats-graph-card card-shape clearfix">
                                    <div className="graph-header clearfix">
                                        <h2>Occupancy Range</h2>

                                    </div>
                                    <div className="the-graph clearfix">    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="stats-graph-card card-shape clearfix">
                                    <div className="graph-header clearfix">
                                        <h2>Occupancy Breakdown</h2>

                                    </div>
                                    <div className="the-graph clearfix">    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="stats-graph-card card-shape clearfix">
                                    <div className="graph-header clearfix">
                                        <h2>Daily Occupancy: All Weekdays</h2>

                                    </div>
                                    <div className="the-graph clearfix">    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="stats-graph-card card-shape clearfix">
                                    <div className="graph-header clearfix">
                                        <h2>Daily Occupancy</h2>

                                    </div>
                                    <div className="the-graph clearfix">    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentNode: state.overviewReducer.currentNode,
        querySettings: state.querySettingsReducer
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);