import React from 'react';
import { connect } from 'react-redux';
import { getNodeSeriesStats, getParams, findOccupancyTag, findEfficiencyTag } from 'actions/stats';
import { RECEIVE_FIRST_LOCATION_TOTAL, RECEIVE_SECOND_LOCATION_TOTAL } from 'actions/comparison';
import LineChart from 'components/common/linechart';
import ModeSelector from 'components/common/modeselector';
import TagSelector from 'components/common/tagselector';

export class TotalChart extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            mode: 'Average',
            tag: 'Occupancy'
        };
    }

    getLabels() {
        if (this.props.stats[0].data.constraint.startdate == this.props.stats[0].data.constraint.enddate) {
            return this.props.stats[0].data.points.map((point) => { return point.time.substr(0, 2); });
        }

        else if (this.props.stats[0].data.constraint.groupby == 'month') {
            return this.props.stats[0].data.points.map((point) => { return point.time.substr(0, 8); });
        }
        else {
            return this.props.stats[0].data.points.map((point) => { return point.time.substr(0, 11); });
        }
    }

    getData(index) {
        if (this.props.stats[index]) {
            return this.props.stats[index].data.points.map((point) => { return Math.round(point[this.state.mode == 'Average' ? 'avg' : 'pk'] * 100); });
        }
        else {
            return [];
        }
    }

    chooseMode(mode) {
        this.setState({ mode: mode });
    }

    chooseTag(tag) {
        this.setState({ tag: tag });
        let params = getParams({ querySettings: this.props.querySettings, currentNode: this.props.first });
        params.action = RECEIVE_FIRST_LOCATION_TOTAL;
        let params1 = getParams({ querySettings: this.props.querySettings, currentNode: this.props.second });
        params1.action = RECEIVE_SECOND_LOCATION_TOTAL;
        if (tag == 'Occupancy') {
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

    render() {
        let data = {};
        if (this.props.stats.length > 0) {
            data.labels = this.getLabels();
            data.avgs = this.getData(1);
            data.peaks = this.getData(0);
        }
        let first = '';
        let second = '';
        if (this.props.first.info && this.props.first.info) {
            first = this.props.first.info.name;
            second = this.props.second.info.name;
        }
        return (
            <div className="comparison-graph-card card-shape clearfix">
                <div className="graph-header clearfix">
                    <h2 className="pull-left">Total {this.state.tag} Comparison</h2>
                    <div className="graph-options pull-right clearfix">
                        <div className="graph-options-average pull-left"><ModeSelector mode={this.state.mode} chooseMode={this.chooseMode.bind(this)} /></div>
                        <div className="graph-options-occupancy pull-left"><TagSelector tag={this.state.tag} chooseTag={this.chooseTag.bind(this)} /></div>
                    </div>
                </div>
                <div className="the-graph clearfix">
                    <LineChart id="totalOccupancy1" stats={data} first={first} second={second} />
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

export default connect(null, mapDispatchToProps)(TotalChart);