import React from 'react';
import { connect } from 'react-redux';
import * as a from 'actions/data';
import moment from 'moment';
import { clearToken } from 'actions/authentication'

import appHistory from 'components/common/appHistory';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetched: false,

            logoutModalShowing: false,
        };
    }

    goToLivefeed(key) {
        appHistory.push('/url?k='+key);
    }

    componentDidMount() {
        this.fetch();
    }

    fetch() {
        this.props.dispatch(a.fetchSummary( () => {this.setState({fetched: true})} ));
        var I = setInterval(() => {
            this.props.dispatch(a.fetchSummary());
        }, 5*60*1000);
        this.setState({
            I: I,
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.I)
    }

    logOut() {
        this.props.dispatch(clearToken());
    }

    render() {
        console.log(this.props.summary);
        if (this.state.fetched) {
            if (this.props.summary) {
                const { summary } = this.props;

                if (summary.length <= 0) {
                    livefeedListRender = <div>You haven't been invited to any livefeed.</div>
                } else {
                    var livefeedListRender = [];
                    for (var i = 0; i < summary.length; i++) {
                        let key = summary[i].key;
                        livefeedListRender.push(
                            <div
                                key={"livefeed-"+summary[i].name}
                                className="livefeed-list-child"
                                onClick={() => {this.goToLivefeed(key)}}
                                >
                                {summary[i].name}
                            </div>
                        );
                    }
                }
                return (
                    <div className="dashboard-container">
                        <div className="dashboard-popup">
                            <div className="title">Available livefeeds:
                                <div className="logout-button">
                                    <i className="material-icons logout-button" onClick={() => {this.setState({logoutModalShowing: true})}}>&#xe8ac;</i>
                                </div>
                            </div>

                            <div className="livefeed-list">
                                {livefeedListRender}
                            </div>
                        </div>
                        {this.state.logoutModalShowing &&
                            <div className="logout-modal-container">
                                <div className="logout-modal">
                                    <div className="title">Logout</div>
                                    <div className="content">
                                        Are you sure you want to logout ?
                                    </div>
                                    <div className="button-container">
                                        <div className="button cancel" onClick={() => {this.setState({logoutModalShowing: false})}}>Cancel</div>
                                        <div className="button confirm" onClick={() => {this.logOut()}}>Logout</div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                );
            } else {
                return (
                    <div className="dashboard-container">
                        <div className="dashboard-popup">
                            <div className="error">Oops, something went wrong. Please try again later</div>
                        </div>
                    </div>
                );
            }
        } else {
            return (<div></div>);
        }
    }
}

function mapStateToProps(state) {
    return {
        // url: state.dataReducer.url,
        // sensorsData: state.dataReducer.sensorsData,
        summary: state.dataReducer.summary,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
