import React from 'react';
import { connect } from 'react-redux';
import RangeChart from 'components/common/rangechart';
import { getNodeSeriesStats, getParams } from 'actions/stats';

export class OccupancyRange extends React.Component {
    
    componentWillReceiveProps(nextProps) {
        let params= getParams(nextProps);
        params.groupby= 'hour';
        params.chart= 'range';
        this.props.dispatch(getNodeSeriesStats(params));
    }
    render() {
        return(
            <RangeChart id="occupancyrange" />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(null, mapDispatchToProps)(OccupancyRange);