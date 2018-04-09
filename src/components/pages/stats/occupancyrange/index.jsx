import React from 'react';
import { connect } from 'react-redux';
import RangeChartContainer from 'components/pages/stats/occupancyrange/rangechartcontainer';
import { getNodeSeriesStats, getParams } from 'actions/stats';

export class OccupancyRange extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentNode.id) {
            let params = getParams(nextProps);
            params.groupby = 'hour';
            params.chart = 'range';
            this.props.dispatch(getNodeSeriesStats(params));
        }
    }
    render() {
        return (
            <div className="stats-graph-card">
                <div className="stats-card-shape clearfix" ref={(e) => {document.charts.occupancyRange = e}}>
                    <div className="graph-header clearfix">
                        <h2>{this.props.querySettings.tag} Range</h2>

                    </div>
                    <div className="the-graph clearfix">
                        <RangeChartContainer />
                    </div>
                </div>
            </div>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(null, mapDispatchToProps)(OccupancyRange);