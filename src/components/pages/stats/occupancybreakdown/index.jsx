import React from 'react';
import { connect } from 'react-redux';
import BreakDownChartContainer from 'components/pages/stats/occupancybreakdown/breakdownchartcontainer';
import { getStatsBreakdown, getParams } from 'actions/stats';
import ModeSelector from 'components/common/modeselector';

export class OccupancyBreakDown extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isArea: false,
            nodes: new Map(),
            mode: 'Average',
            areas: []
        };
    }

    chooseMode(mode) {
        this.setState({ mode: mode });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.tree.type == 'meeting_room' || this.props.type == 'open_area') {
            this.setState({ isArea: true });
        }
        else {

            let params = getParams(nextProps);
            params.id = [];
            params.areas = new Map();
            this.getAreaChildren(nextProps.tree, params.id, params.areas);
            this.setState({ isArea: false, areas: params.areas });
            this.props.dispatch(getStatsBreakdown(params));
        }
    }

    getAreaChildren(tree, areas, nodes) {
        var self = this;
        tree.children.forEach((node) => {
            if (node.type == 'meeting_room' || node.type == 'open_area') {
                areas.push(node.id);
                nodes.set(node.id, node.info.name + "\n" + node.children.length + " desks");
            }
            else {
                self.getAreaChildren(node, areas, nodes);
            }
        });
    }

    render() {
        return (
            <div>
                {!this.state.isArea && <div className="stats-graph-card card-shape clearfix">
                    <div className="graph-header clearfix">
                        <div className="row">
                            <div className="col-sm-10 col-xs-12">
                                <h2>Occupancy Breakdown</h2>
                            </div>
                            <div className="col-sm-2 col-xs-12">
                                <ModeSelector mode={this.state.mode} chooseMode={this.chooseMode.bind(this)} />
                            </div>
                        </div>
                    </div>
                    <div className="the-graph clearfix">
                        <BreakDownChartContainer mode={this.state.mode} areas={this.state.areas} />
                    </div>
                </div>
                }
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        tree: state.overviewReducer.currentNode
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OccupancyBreakDown);