import React from 'react';
import { connect } from 'react-redux';
import PianoChartContainer from 'components/pages/stats/dailyoccupancy/pianochartcontainer';
import { getStatsDaily, getParams } from 'actions/stats';
import ModeSelector from 'components/common/modeselector';

export class DailyOccupancy extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            mode: 'Average',
            day: 'Monday'
        };
    }

    chooseMode(mode) {
        this.setState({ mode: mode });
    }

    chooseDay(day) {
        this.setState({ day: day });
    }

    componentWillReceiveProps(nextProps) {
        let params = getParams(nextProps);
        this.props.dispatch(getStatsDaily(params));
    }

    render() {
        return (
            <PianoChartContainer mode={this.state.mode} chooseMode={this.chooseMode.bind(this)} day={this.state.day} chooseDay={this.chooseDay.bind(this)} />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(null, mapDispatchToProps)(DailyOccupancy);