import React from 'react';
import { connect } from 'react-redux';
import * as a from 'actions/data';
import moment from 'moment';
import MainComponent from './maincomponent';

import appHistory from 'components/common/appHistory';
import { setAPIKey } from 'actions/authentication';
import { clearToken } from 'actions/authentication'
import { redirectToLogin } from 'actions/authentication';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchedLive: false,
            fetchedStructure: false,
        };
    }

    componentDidMount() {
        var chain = () => {
            console.log("Chain running");
            var key = this.props.location.query["k"];
            this.props.dispatch(a.fetchSummary());
            this.props.dispatch(a.fetchLive(     key, () => {this.setState({fetchedLive     : true})}));
            this.props.dispatch(a.fetchStructure(key, () => {this.setState({fetchedStructure: true})}));
            var I = setInterval(() => {
                let key = this.props.location.query["k"];
                this.props.dispatch(a.fetchLive(     key, () => {this.setState({fetchedLive     : true})}));
                this.props.dispatch(a.fetchStructure(key, () => {this.setState({fetchedStructure: true})}));
            }, 5*60*1000);
            this.setState({I: I});
        }

        // Check if preview or not
        if (this.props.location.query["apikey"] && this.props.location.query["apikey"] != 0) {
            if (this.props.apikey != this.props.location.query["apikey"]) {
                this.props.dispatch(setAPIKey(this.props.location.query["apikey"])).then(() => chain());
            } else {
                chain();
            }
        } else {
            chain();
            let token = this.props.token;
            let localToken = localStorage.token;
            if (token == undefined || token === null || localToken == undefined || localToken === null ) {
                this.props.dispatch(redirectToLogin());
            }
            if (!(this.props.url && this.props.sensorsData)) {
                this.props.dispatch(redirectToLogin());
            }
        }
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
        token: state.authReducer.token,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
