import React from 'react';
import { connect } from 'react-redux';

export class ComparisonStats extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            peak: 0,
            average: 0,
            aboveHighMark: 0,
            belowHighMark: 0
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.nodes[0] && nextProps.nodes[1]) {
            var overview0 = nextProps.overviewMap[nextProps.nodes[0].id];
            var overview1 = nextProps.overviewMap[nextProps.nodes[1].id];
            if (overview0 && overview1 && !overview0.loading && !overview1.loading) {
                var data0 = overview0.data;
                var data1 = overview1.data;
                if (data0 && data1) {
                    var mHigh = 0, mLow = 0;
                    if (data0.marks && data1.marks) {
                        mHigh = Math.round((data0.marks[2] - data1.marks[2]) * 10000)/100;
                        mLow = Math.round((data0.marks[0] - data1.marks[0]) * 10000)/100;
                    }
                    this.setState({
                        peak: Math.round((data0.peak - data1.peak) * 10000)/100,
                        average: Math.round((data0.average - data1.average) * 10000)/100,
                        aboveHighMark: mHigh,
                        belowHighMark: mLow,
                    });
                }
            }
        }
    }

    render() {
        return (
            <div className="col-sm-4 comparison-stats">
                <div className="comparison-title-card card-shape text-center">
                    <h2>Comparison</h2>
                </div>
                <div className="comparison-stats-card card-shape">
                    <p>Peak: <span className="peak-value"> {this.state.peak > 0 ? `+${this.state.peak}` : this.state.peak}%</span></p>
                    <p>Average: <span className="average-value">  {this.state.average > 0 ? `+${this.state.average}` : this.state.average}%  </span></p>
                    <p>Above High Mark: <span className="above-high-mark-value"> {this.state.aboveHighMark > 0 ? `+${this.state.aboveHighMark}` : this.state.aboveHighMark}%  </span></p>
                    <p>Below Low Mark: <span className="below-low-mark-value"> {this.state.belowHighMark > 0 ? `+${this.state.belowHighMark}` : this.state.belowHighMark}%  </span></p>
                    <p className="comparison-export"><img src="src/assets/images/export.svg" /></p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        nodes: state.comparisonReducer.nodes,
        overviewMap: state.statsReducer.overviewMap,
    };
}

export default connect(mapStateToProps, null)(ComparisonStats);
