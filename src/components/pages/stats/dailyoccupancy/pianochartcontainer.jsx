import React from 'react';
import { connect } from 'react-redux';
import PianoChart from 'components/common/pianochart';
import config from 'config';
import ModeSelector from 'components/common/modeselector';
import DaySelector from 'components/common/dayselector';
import LineChart from 'components/common/linechart';

export class PianoChartContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            mode: 'Average',
            day: 'Mondays',
            pianoChart: this.getDataForPianoChart(this.props, "Average"),
            lineChart: this.getLineChartData(this.props, "Mondays"),
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            pianoChart: this.getDataForPianoChart(nextProps, this.state.mode),
            lineChart: this.getLineChartData(nextProps, this.state.day),
        })
    }

    chooseMode(mode) {
        this.setState({ mode: mode }, () => {
            this.setState({
                pianoChart: this.getDataForPianoChart(this.props, this.state.mode),
            });
        });
    }

    chooseDay(day) {
        this.setState({ day: day }, () => {
            this.setState({
                lineChart: this.getLineChartData(this.props, this.state.day),
            });
        });
    }

    // Piano chart functions

    getDataForPianoChart(props, mode) {
        let data = {
            labelsY: [],
            labelsX: [],
            values: []
        }
        this.getStatsDayInWeek(props,data, mode);
        this.getStatsAllDay(data, mode);
        if (props.stats.constraint) {
            for (var i = parseInt(props.stats.constraint.starthour); i <= parseInt(props.stats.constraint.endhour); i++) {
                data.labelsX.push(i);
            }
        }
        for (let i in data.values) {
            for (let j in data.values[i]) {
                data.values[i][j] = Math.round(data.values[i][j]);
            }
        }
        return data;
    }

    getStatsDayInWeek(props, data, mode) {
        let count = 0;
        for (let name in props.stats.values) {
            data.values[count] = [];
            for (let hour in props.stats.values[parseInt(name)]) {
                if (mode == 'Average') {
                    data.values[count].push(props.stats.values[name][hour].avg * 100);
                }
                else {
                    data.values[count].push(props.stats.values[name][hour].pk * 100);
                }
            }
            count++;
            data.labelsY.push(config.day[parseInt(name)]);
        }
    }

    getStatsAllDay(data, mode) {
        var res = [];
        if (data.values.length == 0) return;
        for (var hour = 0; hour < data.values[0].length; hour++) { // all hours (column)
            let avg = 0;
            let count = 0;
            let pk = 0;
            for (var weekday = 0; weekday < data.values.length; weekday++) { // all weekdays (rows, except last rows which is for all days)
                if (data.values[weekday][hour] >= 0) {
                    avg += data.values[weekday][hour];
                    pk = Math.max(pk, data.values[weekday][hour]);
                    count++;
                }
            }
            if (mode == "Average") {
                res.push(avg / count);
            } else {
                res.push(pk);
            }
        }
        data.values.push(res);
        data.labelsY.push("All days");
    }

    // Line chart functions

    getLineChartData(props, day) {
        let data = {
            labels: [],
            peaks: [],
            avgs: []
        }
        if (props.stats.constraint && props.stats.values) {
            let values = props.stats.values;
            let starthour = props.stats.constraint.starthour;
            let endhour = props.stats.constraint.endhour;

            for (let hour = starthour; hour <= endhour; hour++) {
                var sumAvg = 0, cntAvg = 0, peak = 0;
                for (let weekday in values) {
                    if (day == "All days" || config.day.indexOf(day)==parseInt(weekday)) {
                        if (values[weekday][hour].avg >= 0 && values[weekday][hour].pk >= 0) {
                            sumAvg += values[weekday][hour].avg;
                            cntAvg ++;
                            peak = Math.max(peak, values[weekday][hour].pk)
                        }
                    }
                }
                var avg = sumAvg / cntAvg;
                data.labels.push(hour);
                if (avg >= 0 && peak >= 0) {
                    data.avgs.push(Math.round(avg * 100));
                    data.peaks.push(Math.round(peak * 100));
                } else {
                    data.peaks.push(null);
                    data.avgs.push(null);
                }
            }
        }
        return data;
    }

    // ---

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="stats-graph-card card-shape clearfix" style={{ minHeight: '650px' }}>
                        <div className="row">
                            <div className="col-sm-offset-3 col-sm-6 col-xs-12 graph-header clearfix">
                                <h2>Daily {this.props.tag}: All Weekdays</h2>
                            </div>
                            <div style={{marginRight: '30px'}} className="pull-right">
                                <ModeSelector mode={this.state.mode} chooseMode={this.chooseMode.bind(this)} />
                            </div>
                        </div>
                        <div className="the-graph clearfix">
                            <PianoChart data={this.state.pianoChart} />
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
                                <DaySelector day={this.state.day} chooseDay={this.chooseDay.bind(this)} items={this.state.pianoChart.labelsY} />
                            </div>
                        </div>
                        <div className="the-graph clearfix">
                            <LineChart id="dailylinechart" stats={this.state.lineChart} />
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