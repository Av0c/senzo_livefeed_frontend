import React from 'react';
import { connect } from 'react-redux';
import LineChart from 'components/common/linechart';

export class LineChartContainer extends React.Component {

    getLabels() {
        if (this.props.stats.constraint.startdate == this.props.stats.constraint.enddate) {
            return this.props.stats.points.map((point) => { return point.time.substr(0, 2); });
        }

        else if (this.props.stats.constraint.groupby == 'month') {
            return this.props.stats.points.map((point) => { return point.time.substr(0, 8); });
        }
        else {
            return this.props.stats.points.map((point) => { return point.time.substr(0, 11); });
        }
    }

    getAverage() {
        return this.props.stats.points.map((point) => { return Math.round(point.avg * 100); });
    }

    getPeak() {
        let max = 0;
        if (this.props.stats.constraint.startdate == this.props.stats.constraint.enddate) {
            return this.props.stats.points.map((point) => {
                max = Math.round(point.pk * 100) > max ? Math.round(point.pk * 100) : max;
                return max;
            });
        }
        else {
            return this.props.stats.points.map((point) => { return Math.round(point.pk * 100); });
        }
    }


    render() {
        let data = {};
        data.labels = this.getLabels();
        data.avgs = this.getAverage();
        data.peaks = this.getPeak();
        return (
            <div className="stats-graph-card">
                <div className="stats-card-shape clearfix" ref={(e) => {document.charts.totalOccupancy = e}}>
                    <div className="graph-header clearfix">
                        <h2>Total {this.props.tag}</h2>
                    </div>
                    <div className="the-graph clearfix">
                        <LineChart id="totalOccupancy" stats={data} />
                    </div>
                </div>
            </div>

        );
    }
}
function mapStateToProps(state) {
    return {
        stats: state.statsReducer.stats
    };
}

export default connect(mapStateToProps, null)(LineChartContainer);