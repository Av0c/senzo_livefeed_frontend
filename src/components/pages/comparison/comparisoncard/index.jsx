import React from 'react';
import { connect } from 'react-redux';
import LocationSelector from 'components/common/locationselector';
import SearchBarDropDown from 'components/common/searchbardropdown';
import { getOccupancyOverview, getParams, findOccupancyTag, getNodeSeriesStats, getStatsDaily } from 'actions/stats';
import * as Comparison from 'actions/comparison';
import Widgets from 'components/pages/comparison/comparisoncard/widgets';
import ComparisonStats from 'components/pages/comparison/comparisoncard/comparisonstats';

export class ComparisonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [{label: undefined}, {label: undefined}],
        }
    }

    componentDidMount() {
        // Default location
        var nextProps = this.props;
        if (nextProps.tree.id > 0) {
            if (nextProps.tree.children) {
                if (nextProps.tree.type == 'customer') {
                    this.chooseFirstLocation(nextProps.tree.children[0]);
                    this.chooseSecondLocation(nextProps.tree.children[0]);
                } else {
                    this.chooseFirstLocation(nextProps.tree);
                    this.chooseSecondLocation(nextProps.tree);
                }
            }
        }
    }

    chooseFirstLocation(node) {
        if (node.id) {
            this.updateInput(0, node);
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
            this.updateInput(1, node);
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

    updateInput(id, node) {
        var value = this.state.value.slice();
        value[id].label = node.info.name;
        this.setState({
            value: value,
        });
    }

    resetInput(id) {
        var value = this.state.value.slice();
        value[id].label = undefined;
        this.setState({
            value: value,
        });
    }

    render() {
        return (
            <div>
                <div className="comparison-container">
                    <div className="comparison-grid">
                        <div className="comparison-first-location card-shape">
                            <div className="comparison-search-container">
                                <SearchBarDropDown
                                    onChange={(node) => {this.chooseFirstLocation(node)}}
                                    onFocus={() => {this.resetInput(0)}}
                                    onOpen={() => {this.resetInput(0)}}
                                    onClose={() => {}}
                                    value={this.state.value[0]}
                                    tree={this.props.tree}
                                />
                            </div>
                        </div>
                        <div className="comparison-second-location card-shape">
                            <div className="comparison-search-container">
                                <SearchBarDropDown
                                    onChange={(node) => {this.chooseSecondLocation(node)}}
                                    onFocus={() => {this.resetInput(1)}}
                                    onOpen={() => {this.resetInput(1)}}
                                    onClose={() => {}}
                                    value={this.state.value[1]}
                                    tree={this.props.tree}
                                />
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
