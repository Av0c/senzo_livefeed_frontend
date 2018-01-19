import React from 'react';
import { connect } from 'react-redux';
import LocationSelector from 'components/common/locationselector';
import { getOccupancyOverview, getParams, findOccupancyTag, getNodeSeriesStats, getStatsDaily } from 'actions/stats';
import * as Comparison from 'actions/comparison';
import Widgets from 'components/pages/comparison/comparisoncard/widgets';
import ComparisonStats from 'components/pages/comparison/comparisoncard/comparisonstats';

export class ComparisonCard extends React.Component {

    chooseFirstLocation(node) {
        if (node.id) {
            let params = getParams({ currentNode: node, querySettings: this.props.querySettings });
            params.action = Comparison.RECEIVE_FIRST_LOCATION_OVERVIEW;
            this.props.dispatch(getOccupancyOverview(params, node));
            let params1 = Object.assign({}, params);
            params1.action = Comparison.RECEIVE_FIRST_LOCATION_TOTAL;
            this.props.dispatch(getNodeSeriesStats(params1));
            let params2 = Object.assign({}, params);
            params2.action = Comparison.RECEIVE_FIRST_LOCATION_DAILY;
            this.props.dispatch(getStatsDaily(params2));
            let params3 = Object.assign({}, params);
            params3.action = Comparison.RECEIVE_FIRST_LOCATION_RANGE;
            params3.groupby = 'hour';
            this.props.dispatch(getNodeSeriesStats(params3));
        }
    }

    chooseSecondLocation(node) {
        if (node.id) {
            let params = getParams({ currentNode: node, querySettings: this.props.querySettings });
            params.action = Comparison.RECEIVE_SECOND_LOCATION_OVERVIEW;
            this.props.dispatch(getOccupancyOverview(params, node));
            let params1 = Object.assign({}, params);
            params1.action = Comparison.RECEIVE_SECOND_LOCATION_TOTAL;
            this.props.dispatch(getNodeSeriesStats(params1));
            let params2 = Object.assign({}, params);
            params2.action = Comparison.RECEIVE_SECOND_LOCATION_DAILY;
            this.props.dispatch(getStatsDaily(params2));
            let params3 = Object.assign({}, params);
            params3.action = Comparison.RECEIVE_SECOND_LOCATION_RANGE;
            params3.groupby = 'hour';
            this.props.dispatch(getNodeSeriesStats(params3));
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <ComparisonStats />
                    <div style={{float:"left"}}>
                        <div className="comparison-location-title-card card-shape">
                            <div className="row">
                                <div className="comparison-first-location text-center">
                                    <LocationSelector querySettings={this.props.querySettings} chooseLocation={this.chooseFirstLocation.bind(this)} tree={this.props.tree} class="comparison-first-location text-center" />
                                </div>
                                <div className="toggle-wrapper text-center"> <a style={{ marginRight: '10px' }} className="toggle-button">

                                </a></div>
                                <div className="comparison-second-location text-center">
                                    <LocationSelector querySettings={this.props.querySettings} chooseLocation={this.chooseSecondLocation.bind(this)} tree={this.props.tree} class="comparison-first-location text-center" />
                                </div>
                            </div>
                        </div>
                        <Widgets querySettings={this.props.querySettings} allSensors={this.props.allSensors} />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tree: state.overviewReducer.customerOverview,
        querySettings: state.querySettingsReducer,
        allSensors: state.nodeReducer.map
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComparisonCard);