import React from 'react';
import { connect } from 'react-redux';
import * as a from 'actions/data';
import { clearToken } from 'actions/authentication'
import moment from 'moment';
import MainComponent from './maincomponent';

import appHistory from 'components/common/appHistory';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchedLive: false,
            fetchedStructure: false,
        };
    }

    fetchStats() {
        // Keep here for reference, remove if not used
        // if (this.props.url) {
        //     var periodString = "days";
        //     switch (this.props.url.period) {
        //         case 1:
        //             periodString = "days"
        //         break;
        //         case 2:
        //             periodString = "weeks"
        //         break;
        //         case 3:
        //             periodString = "months"
        //         break;
        //         case 4:
        //             periodString = "years"
        //         break;
        //         default:
        //             periodString = "days";
        //     }
        //     var startdate = moment().subtract(1, periodString).add(1, "days").format('DD-MM-YYYY');
        //     var enddate = moment().format('DD-MM-YYYY');
        //     if (this.state.startdate != startdate || this.state.enddate != enddate) {
        //         this.setState({
        //             startdate: startdate,
        //             enddate: enddate
        //         });
        //         this.props.dispatch(a.fetchStats(this.props.url.key, startdate, enddate));
        //     }
        // }
    }

    componentDidMount() {
        var key = this.props.location.query["k"];
        this.fetch(key);
    }

    fetch(key) {
        this.props.dispatch(a.fetchStructure(key, () => {this.setState({fetchedStructure: true})}));
        this.props.dispatch(a.fetchLive(     key, () => {this.setState({fetchedLive     : true})}));
        var I = setInterval(() => {
            let key = this.props.location.query["k"];
            this.props.dispatch(a.fetchStructure(key, () => {this.setState({fetchedStructure: true})}));
            this.props.dispatch(a.fetchLive(     key, () => {this.setState({fetchedLive     : true})}));
        }, 5*60*1000);
        this.setState({I: I});
    }

    componentWillUnmount() {
        clearInterval(this.state.I)
    }

    logOut() {
        this.props.dispatch(clearToken());
    }

    render() {
        // console.log("Props: ");
        // console.log(this.props);
        if (this.props.location.query["k"]) {
            if (this.state.fetchedLive && this.state.fetchedStructure) {
                if (this.props.url && this.props.sensorsData || this.props.stats) {
                    return (
                        <MainComponent
                            key={this.props.url.key}
                            name={this.props.url.name}
                            owner={this.props.url.owner}
                            subscribers={this.props.url.subscribers}

                            templateData={this.props.url.fullTemplate}
                            slideContainer={this.props.url.slideContainer}

                            floorplan={this.props.url.floorplan}
                            treeMap={this.props.url.treeMap}
                            sensorsData={this.props.sensorsData}

                            stats={this.props.stats}

                            colorPrimary="#3cb54a"
                            colorSecondary="#fff"

                            logOut={() => {this.logOut()}}
                        />
                    );
                } else {
                    return (
                        <div>This livefeed is invalid or no longer available.</div>
                    );
                }
            } else {
                return (
                    <div></div>
                );
            }
        } else {
            return (
                <div></div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        url: state.dataReducer.url,
        sensorsData: state.dataReducer.sensorsData,
        summary: state.dataReducer.summary,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
