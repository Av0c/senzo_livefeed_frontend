import React from 'react';
import { connect } from 'react-redux';
import * as a from 'actions/data';
import moment from 'moment';

import appHistory from 'components/common/appHistory';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetched: false,
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


    render() {
        console.log(this.props.summary);
        if (this.state.fetched) {
            if (this.props.summary) {
                const { summary } = this.props;

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
                return (
                    <div className="dashboard-container">
                        <div className="dashboard-popup">
                            <div className="title">Available livefeeds:</div>
                            <div className="livefeed-list">
                                {livefeedListRender}
                            </div>
                        </div>
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
