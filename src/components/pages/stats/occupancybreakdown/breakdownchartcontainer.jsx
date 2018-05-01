import React from 'react';
import { connect } from 'react-redux';
import BreakDownChart from 'components/common/breakdownchart';

export class BreakdownChartContainer extends React.Component {

    getData() {
        let data = {
            labels: [],
            stats: []
        };
        if (this.props.areas) {
            for (let i = 0; i < this.props.areas.length; i++) {
                var id = this.props.areas[i].id;
                var label = this.props.areas[i].label;
                var statIndex = this.props.stats.findIndex((a) => {return a.id == id})
                if (this.props.mode == 'Average') {
                    data.stats.push(Math.round(this.props.stats[statIndex].average * 100));
                }
                else {
                    data.stats.push(Math.round(this.props.stats[statIndex].peak * 100));
                }

                data.labels.push(label);
            }
        }
        var id1 = 478;
        var statIndex1 = this.props.stats.findIndex((a) => {return a.id == id1})
        console.log("STATS: ");
        console.log(this.props.stats);
        console.log(this.props.stats[statIndex1]);
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
