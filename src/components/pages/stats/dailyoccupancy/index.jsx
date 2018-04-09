import React from 'react';
import { connect } from 'react-redux';
import PianoChartContainer from 'components/pages/stats/dailyoccupancy/pianochartcontainer';
import { getStatsDaily, getParams } from 'actions/stats';
import ModeSelector from 'components/common/modeselector';

export class DailyOccupancy extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentNode.id) {
            let params = getParams(nextProps);
            this.props.dispatch(getStatsDaily(params));
        }
    }
    render() {
        let show = (this.props.querySettings.startdate == this.props.querySettings.enddate);
        return (
            <div>
                {show || <PianoChartContainer tag={this.props.querySettings.tag} />}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(null, mapDispatchToProps)(DailyOccupancy);