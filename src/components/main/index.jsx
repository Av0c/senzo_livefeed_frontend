import React from 'react';
import { connect } from 'react-redux';
import MainComponent from './maincomponent';
import moment from 'moment';
import * as a from 'actions/data';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    fetchStats() {
        if (this.props.url) {
            var periodString = "days";
            switch (this.props.url.period) {
                case 1:
                    periodString = "days"
                break;
                case 2:
                    periodString = "weeks"
                break;
                case 3:
                    periodString = "months"
                break;
                case 4:
                    periodString = "years"
                break;
                default:
                    periodString = "days";
            }
            var startdate = moment().subtract(1, periodString).add(1, "days").format('DD-MM-YYYY');
            var enddate = moment().format('DD-MM-YYYY');
            if (this.state.startdate != startdate || this.state.enddate != enddate) {
                this.setState({
                    startdate: startdate,
                    enddate: enddate
                });
                this.props.dispatch(a.fetchStats(this.props.url.key, startdate, enddate));
            }
        }
    }

    componentDidMount() {
        var key = this.props.location.query["k"];
        this.props.dispatch(a.fetchSummary());
        this.props.dispatch(a.fetchStructure(key)).then(() => this.fetchStats());
        this.props.dispatch(a.fetchLive(key));
        var I = setInterval(() => {
            let key = this.props.location.query["k"];
            this.props.dispatch(a.fetchLive(key));
            this.fetchStats();
        }, 5000);
        this.setState({I: I});
    }

    componentWillUnmount() {
        clearInterval(this.state.I)
    }

    render() {
        if (this.props.url && this.props.sensorsData && this.props.stats) {
            return (
                <MainComponent
                    key={this.props.url.key}
                    name={this.props.url.name}
                    owner={this.props.url.owner}
                    logo={this.props.url.logo}
                    color={this.props.url.color}
                    period={this.props.url.period}
                    duration={this.props.url.duration}
                    details={this.props.url.details}
                    subscribers={this.props.url.subscribers}
                    locations={this.props.url.locations}
                    treeMap={this.props.url.treeMap}
                    sensorsData={this.props.sensorsData}
                    stats={this.props.stats}
                    startdate={this.state.startdate}
                    enddate={this.state.enddate}
                    floorplan={this.props.url.floorplan}
                />
            );
        } else {
            return null;
        }
    }
}

function mapStateToProps(state) {
    return {
        url: state.dataReducer.url,
        sensorsData: state.dataReducer.sensorsData,
        stats: state.dataReducer.stats,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
