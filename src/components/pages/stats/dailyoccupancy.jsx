import React from 'react';
import { connect } from 'react-redux';
import PianoChart from 'components/common/pianochart';
import { getNodeStatsDaily, getParams } from 'actions/stats';

export class DailyOccupancy extends React.Component {

    componentWillReceiveProps(nextProps) {
        let params = getParams(nextProps);
    }

    render() {
        return (
            <PianoChart />
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DailyOccupancy);