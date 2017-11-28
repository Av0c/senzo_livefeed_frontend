import React from 'react';
import { connect } from 'react-redux';
import RangeChart from 'components/common/rangechart';

export class RangeChartContainer extends React.Component {
    
    getValues() {
        let values = [0, 0, 0, 0, 0, 0, 0];
        this.props.range.points.forEach((point) => {
            if (point.avg == 0) {
                values[0] += 1;
                values[1] += 1;
            }
            else if (point.avg < 0.2) {
                values[1] += 1;
            }
            else if (point.avg < 0.4) {
                values[2] += 1;
            }
            else if (point.avg < 0.6) {
                values[3] += 1;
            }
            else if (point.avg < 0.8) {
                values[4] += 1;
            }
            else if (point.avg < 1) {
                values[5] += 1;
            }
            else {
                values[5] += 1;
                values[6] += 1;
            }
        });
        return values;
    }

    render() {
        let values = this.getValues();
        return(
            <RangeChart id="occupancyrange" values={values} />
        );
    }
}

function mapStateToProps(state) {
    return {
        range: state.statsReducer.range
    };
}

export default connect(mapStateToProps, null)(RangeChartContainer);