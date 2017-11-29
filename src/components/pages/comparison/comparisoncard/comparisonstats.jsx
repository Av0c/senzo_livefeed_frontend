import React from 'react';
import { connect } from 'react-redux';

export class ComparisonStats extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            peak:0,
            average:0,
            aboveHighMark:0,
            belowHighMark:0
        };
    }

    componentWillReceiveProps(nextProps) {
        let overview = nextProps.overview;
        if(nextProps.overview.length==2) {
            this.setState({
                peak: Math.round((overview[0].data.peak-overview[1].data.peak)*100)
            });
        }
    }
    render() {
        return (
            <div className="col-sm-4">
                <div className="comparison-title-card card-shape text-center">
                    <h2>Comparison</h2>
                </div>
                <div className="comparison-stats-card card-shape">
                    <p>Peak: <span className="peak-value"> {this.state.peak}%</span></p>
                    <p>Average: <span className="average-value"> {this.state.average}%  </span></p>
                    <p>Above High Mark: <span className="above-high-mark-value"> {this.state.aboveHighMark}%  </span></p>
                    <p>Below Low Mark: <span className="below-low-mark-value"> {this.state.belowHighMark}%  </span></p>
                    <p className="comparison-export"><img src="src/assets/images/export.svg" /></p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        overview: state.comparisonReducer.overview
    };
}

export default connect(mapStateToProps, null)(ComparisonStats);