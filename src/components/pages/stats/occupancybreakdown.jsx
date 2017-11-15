import React from 'react';
import { connect } from 'react-redux';
import BreakDownChart from 'components/common/breakdownchart';
import { getNodeSeriesStats, getParams } from 'actions/stats';

export class OccupancyBreakDown extends React.Component {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }
    render() {
        return (
            <BreakDownChart id="occupancybreakdown" />
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

export default connect(mapStateToProps, mapDispatchToProps)(OccupancyBreakDown);