import React from 'react';
import { connect } from 'react-redux';
import config from 'config';
import { getStatsDaily, getParams, findOccupancyTag, findEfficiencyTag } from 'actions/stats';
import { RECEIVE_FIRST_LOCATION_DAILY, RECEIVE_SECOND_LOCATION_DAILY } from 'actions/comparison';
import LineChart from 'components/common/linechart';
import ModeSelector from 'components/common/modeselector';
import TagSelector from 'components/common/tagselector';
import DaySelector from 'components/common/dayselector';

export class DailyChart extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            mode: 'Average',
            tag: 'Occupancy',
            day: 'Monday'
        };
    }

    chooseDay(day) {
        this.setState({ day: day });
    }

    chooseMode(mode) {
        this.setState({ mode: mode });
    }

    chooseTag(tag) {
        this.setState({ tag: tag });
        let params = getParams({ querySettings: this.props.querySettings, currentNode: this.props.first });
        params.action = RECEIVE_FIRST_LOCATION_DAILY;
        let params1 = getParams({ querySettings: this.props.querySettings, currentNode: this.props.second });
        params1.action = RECEIVE_SECOND_LOCATION_DAILY;
        if(tag=='Occupancy') {
            params.tag = findOccupancyTag(this.props.first);
            params1.tag = findOccupancyTag(this.props.second);
        }
        else {
            params.tag = findEfficiencyTag(this.props.first);
            params1.tag = findEfficiencyTag(this.props.second);
        }
        this.props.dispatch(getStatsDaily(params));
        this.props.dispatch(getStatsDaily(params1));
    }

    getLineChartData() {
        let mode = this.state.mode == 'Average' ? 'avg' : 'pk';
        let data = {
            labels: [],
            peaks: [],
            avgs: []
        }
        if (this.props.stats.length == 2) {
            let first = this.props.stats[0].data.values[config.day.indexOf(this.state.day)];
            let second = this.props.stats[1].data.values[config.day.indexOf(this.state.day)];
            for (let hour in first) {
                data.labels.push(hour);
                data.avgs.push(Math.round(second[hour][mode] * 100));
                data.peaks.push(Math.round(first[hour][mode] * 100));
            }
        }
        return data;
    }

    render() {
        
        let data = this.getLineChartData();
        let first = '';
        let second = '';
        if (this.props.first.info && this.props.first.info) {
            first = this.props.first.info.name;
            second = this.props.second.info.name;
        }
        console.log(this.props.stats);
        return (
            <div className="comparison-graph-card card-shape clearfix">
                <div className="graph-header clearfix">
                    <h2 className="pull-left">Occupancy Range Comparsions</h2>
                    <div className="graph-options pull-right clearfix">
                        <div className="graph-options-average pull-left"><DaySelector day={this.state.day} chooseDay={this.chooseDay.bind(this)} items={config.day} /></div>
                        <div className="graph-options-average pull-left"><ModeSelector mode={this.state.mode} chooseMode={this.chooseMode.bind(this)} /></div>
                        <div className="graph-options-occupancy pull-left"><TagSelector tag={this.state.tag} chooseTag={this.chooseTag.bind(this)} /></div>
                    </div>
                </div>
                <div className="the-graph clearfix">
                    <LineChart id="dailycomparison" stats={data} first={first} second={second} />
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

export default connect(null, mapDispatchToProps)(DailyChart);