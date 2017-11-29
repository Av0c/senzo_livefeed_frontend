import React from 'react';
import { connect } from 'react-redux';
import DateSelector from 'components/common/dateselector';
import StatsMenu from 'components/common/statsmenu';
import TotalOccupancy from 'components/pages/stats/totaloccupancy';
import { getNodeSeriesStats, getParams } from 'actions/stats';
import OccupancyRange from 'components/pages/stats/occupancyrange';
import DailyOccupancy from 'components/pages/stats/dailyoccupancy';
import OccupancyBreakDown from 'components/pages/stats/occupancybreakdown';
import LeftMenu from 'components/common/leftmenu';
export class Charts extends React.Component {

    render() {
        return (
            <div className="stats-body" id="stats-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="comparison-graph-card card-shape clearfix">
                                <div className="graph-header clearfix">
                                    <h2 className="pull-left">Total Occupancy Comparison</h2>
                                    <div className="graph-options pull-right clearfix">
                                        <div className="graph-options-average pull-left"><span>Average </span><i className="fa fa-chevron-down" aria-hidden="true">   </i></div>
                                        <div className="graph-options-occupancy pull-left"><span>Occupancy </span><i className="fa fa-chevron-down" aria-hidden="true"></i></div>
                                    </div>
                                </div>
                                <div className="the-graph clearfix">    </div>
                                <div className="the-graph-legend">
                                    <div className="legend-location-box pull-left">
                                        <div className="legend-location-color location-color-green pull-left"></div>
                                        <div className="legend-location-name pull-left">Location 1 </div>
                                    </div>
                                    <div className="legend-location-box pull-left">
                                        <div className="legend-location-color location-color-blue pull-left"></div>
                                        <div className="legend-location-name pull-left">Location 2   </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="comparison-graph-card card-shape clearfix">
                                <div className="graph-header clearfix">
                                    <h2 className="pull-left">Occupancy Range Comparsion</h2>
                                    <div className="graph-options pull-right clearfix">
                                        <div className="graph-options-average pull-left"><span>Average </span><i className="fa fa-chevron-down" aria-hidden="true">   </i></div>
                                        <div className="graph-options-occupancy pull-left"><span>Occupancy </span><i className="fa fa-chevron-down" aria-hidden="true"></i></div>
                                    </div>
                                </div>
                                <div className="the-graph clearfix">    </div>
                                <div className="the-graph-legend">
                                    <div className="legend-location-box pull-left">
                                        <div className="legend-location-color location-color-green pull-left"></div>
                                        <div className="legend-location-name pull-left">Location 1 </div>
                                    </div>
                                    <div className="legend-location-box pull-left">
                                        <div className="legend-location-color location-color-blue pull-left"></div>
                                        <div className="legend-location-name pull-left">Location 2   </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="comparison-graph-card card-shape clearfix">
                                <div className="graph-header clearfix">
                                    <h2 className="pull-left">Occupancy Range Comparsions</h2>
                                    <div className="graph-options pull-right clearfix">
                                        <div className="graph-options-average pull-left"><span>Average </span><i className="fa fa-chevron-down" aria-hidden="true">   </i></div>
                                        <div className="graph-options-occupancy pull-left"><span>Occupancy </span><i className="fa fa-chevron-down" aria-hidden="true"></i></div>
                                    </div>
                                </div>
                                <div className="the-graph clearfix">    </div>
                                <div className="the-graph-legend">
                                    <div className="legend-location-box pull-left">
                                        <div className="legend-location-color location-color-green pull-left"></div>
                                        <div className="legend-location-name pull-left">Location 1 </div>
                                    </div>
                                    <div className="legend-location-box pull-left">
                                        <div className="legend-location-color location-color-blue pull-left"></div>
                                        <div className="legend-location-name pull-left">Location 2   </div>
                                    </div>
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
        comparisonStats: state.comparisonReducer,
        querySettings: state.querySettingsReducer
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Charts);