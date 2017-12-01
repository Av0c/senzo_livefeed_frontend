import React from 'react';
import { connect } from 'react-redux';
import PianoChart from 'components/common/pianochart';
import config from 'config';
import ModeSelector from 'components/common/modeselector';
import DaySelector from 'components/common/dayselector';
import LineChart from 'components/common/linechart';

export class PianoChartContainer extends React.Component {

    getDataForPianoChart() {
        let data = {
            labelsY: [],
            labelsX: [],
            values: []
        }
        this.getStatsDayInWeek(data);
        this.getStatsAllDay(data);
        if (this.props.stats.constraint) {
            for (var i = parseInt(this.props.stats.constraint.starthour); i <= parseInt(this.props.stats.constraint.endhour); i++) {
                data.labelsX.push(i);
            }
        }
        return data;
    }

    getStatsAllDay(data) {
        for (var i = 0; i < data.values[0].length; i++) {
            let avg = 0;
            let count = 0;
            for (var j = 0; j < data.values.length - 1; j++) {
                if (data.values[j][i] >= 0) {
                    avg += data.values[j][i];
                }
                else {
                    count++;
                }
            }
            data.values[data.values.length - 1].push(Math.round(avg / (data.values.length - 1 - count)));
        }
        data.labelsY.push("All day");
    }

    getStatsDayInWeek(data) {
        let count = 0;
        for (let name in this.props.stats.values) {
            data.values[count] = [];
            for (let hour in this.props.stats.values[parseInt(name)]) {
                if (this.props.mode == 'Average') {
                    data.values[count].push(Math.round(this.props.stats.values[name][hour].avg * 100));
                }
                else {
                    data.values[count].push(Math.round(this.props.stats.values[name][hour].pk * 100));
                }
            }
            count++;
            data.labelsY.push(config.day[parseInt(name)]);
        }
        data.values[count] = [];
    }

    getLineChartData() {
        let data = {
            labels: [],
            peaks: [],
            avgs: []
        }
        if (this.props.stats.values) {
            let arrays = this.props.stats.values[config.day.indexOf(this.props.day)];
            for (let hour in arrays) {
                if (arrays[hour].pk > 0) {
                    data.labels.push(hour);
                    data.peaks.push(Math.round(arrays[hour].pk * 100));
                    data.avgs.push(Math.round(arrays[hour].avg * 100));
                }
            }
        }
        return data;
    }

    render() {
        let pianoChart = this.getDataForPianoChart();
        let lineChart = this.getLineChartData();
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="stats-graph-card card-shape clearfix" style={{ minHeight: '650px' }}>
                        <div className="row">
                            <div className="col-sm-offset-3 col-sm-6 col-xs-12 graph-header clearfix">
                                <h2>Daily {this.props.tag}: All Weekdays</h2>
                            </div>
                            <div style={{marginRight: '30px'}} className="pull-right">
                                <ModeSelector mode={this.props.mode} chooseMode={this.props.chooseMode} />
                            </div>
                        </div>
                        <div className="the-graph clearfix">
                            <PianoChart data={pianoChart} />
                            <div style={{ marginLeft: '50px' }}>
                                <img src="src/assets/images/degree.png" />
                                <h5 style={{ marginLeft: '0px', marginTop: '5px' }}>0 - 20% &emsp; &emsp; &emsp;20 - 40% &emsp; &emsp;&emsp;40 - 60%&emsp; &emsp; &emsp;60  -80%&emsp; &emsp; &emsp;80 - 100% </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="stats-graph-card card-shape clearfix">
                        <div className="row">
                            <div className="col-sm-offset-3 col-sm-6 graph-header clearfix">
                                <h2>Daily {this.props.tag}</h2>
                            </div>
                            <div style={{marginRight: '30px'}} className="pull-right">
                                <DaySelector day={this.props.day} chooseDay={this.props.chooseDay} items={pianoChart.labelsY} />
                            </div>
                        </div>
                        <div className="the-graph clearfix">
                            <LineChart id="dailylinechart" stats={lineChart} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        stats: state.statsReducer.daily
    };
}

export default connect(mapStateToProps, null)(PianoChartContainer);