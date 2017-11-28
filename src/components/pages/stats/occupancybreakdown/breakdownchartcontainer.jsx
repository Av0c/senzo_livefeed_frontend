import React from 'react';
import { connect } from 'react-redux';
import BreakDownChart from 'components/common/breakdownchart';

export class BreakdownChartContainer extends React.Component {

    getData() {
        let data = {
            labels: [],
            stats: []
        };
        if (this.props.areas.get) {
            for (let i = 0; i < (7 < this.props.stats.length ? 7 : this.props.stats.length); i++) {
                if (this.props.mode == 'Average') {
                    data.stats.push(Math.round(this.props.stats[i].average * 100));
                }
                else {
                    data.stats.push(Math.round(this.props.stats[i].peak * 100));
                }

                data.labels.push(this.props.areas.get(this.props.stats[i].id));
            }
        }
        return data;
    }

    render() {
        let data = this.getData();
        return (
            <BreakDownChart data={data} />
        );
    }


}

function mapStateToProps(state) {
    return {
        stats: state.statsReducer.breakdown
    }
}


export default connect(mapStateToProps, null)(BreakdownChartContainer);