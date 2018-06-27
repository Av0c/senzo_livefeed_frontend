import React from 'react';
import { connect } from 'react-redux';
import MainComponent from './maincomponent';
import * as a from 'actions/data';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var key = this.props.location.query["k"];
        this.props.dispatch(a.fetchSummary());
        this.props.dispatch(a.fetchStructure(key));
        this.props.dispatch(a.fetchLive(key));
        var I = setInterval(() => {
            this.props.dispatch(a.fetchLive(key));
        }, 5000);
        this.setState({I: I});
    }

    componentWillUnmount() {
        clearInterval(this.state.I)
    }

    render() {
        console.log(this.props)
        if (this.props.url && this.props.sensorsData) {
            return (
                <MainComponent
                    key={this.props.url.key}
                    name={this.props.url.name}
                    owner={this.props.url.owner}
                    logo={this.props.url.logo}
                    color={this.props.url.color}
                    duration={this.props.url.duration}
                    details={this.props.url.details}
                    subscribers={this.props.url.subscribers}
                    locations={this.props.url.locations}
                    treeMap={this.props.url.treeMap}
                    sensorsData={this.props.sensorsData}
                    floorplan={this.props.url.floorplan}
                />
            );
        } else {
            return null;
        }
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        url: state.dataReducer.url,
        sensorsData: state.dataReducer.sensorsData,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
