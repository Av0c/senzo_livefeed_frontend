import React from 'react';
import { connect } from 'react-redux';
import { getNodeSeriesStats, getParams, findOccupancyTag, findEfficiencyTag } from 'actions/stats';
import { RECEIVE_FIRST_LOCATION_RANGE, RECEIVE_SECOND_LOCATION_RANGE } from 'actions/comparison';
import RangeChart from 'components/common/rangechart';
import ModeSelector from 'components/common/modeselector';
import TagSelector from 'components/common/tagselector';

class RangeChartComparison extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            mode: 'Average',
            tag: 'Occupancy'
        };
    }

    chooseMode(mode) {
        this.setState({ mode: mode });
    }

    chooseTag(tag) {
        this.setState({ tag: tag });
        let params = getParams({ querySettings: this.props.querySettings, currentNode: this.props.first });
        params.action = RECEIVE_FIRST_LOCATION_RANGE;
        let params1 = getParams({ querySettings: this.props.querySettings, currentNode: this.props.second });
        params1.action = RECEIVE_SECOND_LOCATION_RANGE;
        params.groupby = "hour"
        params1.groupby = "hour"

        if(tag=='Occupancy') {
            params.tag = findOccupancyTag(this.props.first);
            params1.tag = findOccupancyTag(this.props.second);
        }
        else {
            params.tag = findEfficiencyTag(this.props.first);
            params1.tag = findEfficiencyTag(this.props.second);
        }
        this.props.dispatch(getNodeSeriesStats(params));
        this.props.dispatch(getNodeSeriesStats(params1));
    }

    getValues(index) {
        let attribute = this.state.mode == 'Average' ? 'avg' : 'pk';
        let values = [0, 0, 0, 0, 0, 0, 0];
        this.props.stats[index].data.points.forEach((point) => {
            if (point[attribute] < 0.00001) {
                values[0] += 1;
                values[1] += 1;
            }
            else if (point[attribute] < 0.2) {
                values[1] += 1;
            }
            else if (point[attribute] < 0.4) {
                values[2] += 1;
            }
            else if (point[attribute] < 0.6) {
                values[3] += 1;
            }
            else if (point[attribute] < 0.8) {
                values[4] += 1;
            }
            else if (point[attribute] < 0.99999) {
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
        let values = [];
        let values1 = [];
        if (this.props.stats.length == 2) {
            values = this.getValues(0);
            values1 = this.getValues(1);
        }
        return (
            <div className="comparison-graph-card card-shape clearfix">
                <div className="graph-header clearfix">
                    <h2 className="pull-left">{this.state.tag} Range Comparison</h2>
                    <div className="graph-options pull-right clearfix">
                        <div className="graph-options-average pull-left"><ModeSelector mode={this.state.mode} chooseMode={this.chooseMode.bind(this)} /></div>
                        <div className="graph-options-occupancy pull-left"><TagSelector tag={this.state.tag} chooseTag={this.chooseTag.bind(this)} /></div>
                    </div>
                </div>
                <div className="the-graph clearfix">
                    <RangeChart id="rangecomparisonchart" values={values} values1={values1} />
                </div>
                <div className="the-graph-legend">
                    <div className="legend-location-box pull-left">
                        <div className="legend-location-color location-color-green pull-left"></div>
                        <div className="legend-location-name pull-left">{this.props.first.info ? this.props.first.info.name : 'Location 1'} </div>
                    </div>
                    <div className="legend-location-box pull-left">
                        <div className="legend-location-color location-color-blue pull-left"></div>
                        <div className="legend-location-name pull-left">{this.props.second.info ? this.props.second.info.name : 'Location 2'}</div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(null, mapDispatchToProps)(RangeChartComparison);