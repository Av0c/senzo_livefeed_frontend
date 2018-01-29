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
import TotalChart from 'components/pages/comparison/charts/totalchart';
import RangeChart from 'components/pages/comparison/charts/rangechart';
import DailyChart from 'components/pages/comparison/charts/dailychart';

export class Charts extends React.Component {

    render() {
        let first = {};
        let second = {};
        if(this.props.comparisonStats.nodes[0] && this.props.comparisonStats.nodes[1]){
            first = this.props.comparisonStats.nodes[0];
            second = this.props.comparisonStats.nodes[1];
        }
        return (
            
            <div className="stats-body" id="stats-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <TotalChart querySettings={this.props.querySettings} stats= {this.props.comparisonStats.total} first={first} second={second} />
                        </div>
                        <div className="col-sm-12">
                            <RangeChart querySettings={this.props.querySettings} stats= {this.props.comparisonStats.range} first={first} second={second} />
                        </div>
                        <div className="col-sm-12">
                            <DailyChart querySettings={this.props.querySettings} stats= {this.props.comparisonStats.daily} first={first} second={second} />
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