import React from 'react';
import { connect } from 'react-redux';
import LineChart from 'components/common/linechart';

export class TotalOccupancy extends React.Component {

    render() {
        return (
            <div>
                <LineChart id="totalOccupancy" stats={this.props.stats} />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        stats: state.statsReducer.stats
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TotalOccupancy);