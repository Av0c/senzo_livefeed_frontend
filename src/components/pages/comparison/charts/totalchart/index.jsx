import React from 'react';
import { connect } from 'react-redux';
import LineChart from 'components/common/linechart';
import LineChartContainer from 'components/pages/stats/totaloccupancy/linechartcontainer';
import { getNodeSeriesStats, getParams } from 'actions/stats';

export class TotalChart extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentNode.id) {
            let params = getParams(nextProps);
            this.props.dispatch(getNodeSeriesStats(params));
        }
    }

    render() {
        return (
            <LineChartContainer />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(null, mapDispatchToProps)(TotalChart);