import React from 'react';
import { connect } from 'react-redux';
import LocationSelector from 'components/common/locationselector';
import SearchBarDropDown from 'components/common/searchbardropdown';
import { getOccupancyOverview, getParams, findOccupancyTag, getNodeSeriesStats, getStatsDaily } from 'actions/stats';
import * as Comparison from 'actions/comparison';
import Widgets from 'components/pages/comparison/comparisoncard/widgets';
import ComparisonStats from 'components/pages/comparison/comparisoncard/comparisonstats';

export class ComparisonCard extends React.Component {

    componentDidMount() {
        this.chooseFirstLocation(1);
        this.chooseSecondLocation(1);
    }

    chooseFirstLocation(node) {
        console.log(node);
        if (node.id) {
            this.props.dispatch(Comparison.putNode(node, 0));

            let params = getParams({ currentNode: node, querySettings: this.props.querySettings });
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
            this.props.dispatch(Comparison.putNode(node, 1));

            let params = getParams({ currentNode: node, querySettings: this.props.querySettings });
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
            <div>
                <div className="comparison-container">
                    <div className="comparison-grid">
                        <div className="comparison-select card-shape text-center">
                            <div className="comparison-first-location text-center">
                                <div className="comparison-search-container">
                                    <SearchBarDropDown
                                        onChange={(node) => {this.chooseFirstLocation(node)}}
                                        onFocus={() => {}}
                                        onClose={() => {}}
                                        tree={this.props.tree}
                                    />
                                </div>
                                <LocationSelector index={0} querySettings={this.props.querySettings} chooseLocation={this.chooseFirstLocation.bind(this)} tree={this.props.tree} class="comparison-first-location text-center" />
                            </div>
                            <div className="toggle-wrapper text-center">
                                <a style={{ marginRight: '10px' }} className="toggle-button"></a>
                            </div>
                            <div className="comparison-second-location text-center">
                                <LocationSelector index={1} querySettings={this.props.querySettings} chooseLocation={this.chooseSecondLocation.bind(this)} tree={this.props.tree} class="comparison-first-location text-center" />
                            </div>
                        </div>
                        <Widgets querySettings={this.props.querySettings} allSensors={this.props.allSensors} />
                        <div className="grid-card-center">
                            <ComparisonStats />
                        </div>
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
