import React from 'react';
import { connect } from 'react-redux';
import DateSelector from 'components/common/dateselector';
import StatsMenu from 'components/common/statsmenu';
import LeftMenu from 'components/common/leftmenu';
import { getNodeSeriesStats, getParams } from 'actions/stats';
import Charts from 'components/pages/stats/charts';
import FloorPlan from "components/pages/live/floorplan";

export class Stats extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            currentNode: {
                info: {
                    name: ""
                }
            }
        };
    }

    componentDidMount() {
        this.findNode(this.props.tree, this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.findNode(nextProps.tree, nextProps);
    }

    findNode(tree, nextProps) {
        var self = this;
        if (tree) {
            if (nextProps.params.id == tree.id) {
                this.setState({ currentNode: tree });
                return;
            }

            else if (tree.type != "meeting_room" && tree.type != "open_area") {
                tree.children.forEach((child) => {
                    self.findNode(child, nextProps);
                })
            }
        }
    }

    render() {
        return (
            <div className="stats-body" id="stats-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 static-menu">
                            <LeftMenu overview='active' comparison='' />
                            <DateSelector />
                            <StatsMenu
                                name={this.state.currentNode.info.name} id={this.state.currentNode.id}
                                node={this.state.currentNode} querySettings={this.props.querySettings}
                            />
                        </div>
                        {
                            <Charts
                                currentNode={this.state.currentNode}
                                querySettings={this.props.querySettings}
                            />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tree: state.overviewReducer.customerOverview,
        querySettings: state.querySettingsReducer
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
