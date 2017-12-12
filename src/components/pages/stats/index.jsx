import React from 'react';
import { connect } from 'react-redux';
import DateSelector from 'components/common/dateselector';
import StatsMenu from 'components/common/statsmenu';
import TotalOccupancy from 'components/pages/stats/totaloccupancy';
import { getNodeSeriesStats, getParams } from 'actions/stats';
import OccupancyRange from 'components/pages/stats/occupancyrange';
import DailyOccupancy from 'components/pages/stats/dailyoccupancy';
import OccupancyBreakDown from 'components/pages/stats/occupancybreakdown';
import LeftMenu from 'components/common/leftmenu';
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
                        <div className="col-md-12" style={{ backgroundColor: 'white', paddingTop: '10px' }}>
                            <LeftMenu overview='active' comparison='' />
                            <DateSelector />
                            <StatsMenu name={this.state.currentNode.info.name} />
                        </div>
                        <div className="col-md-12">
                            <div className="col-sm-12">
                                <TotalOccupancy currentNode={this.state.currentNode} querySettings={this.props.querySettings} />
                            </div>
                            <div className="col-sm-12">
                                <OccupancyRange querySettings={this.props.querySettings} currentNode={this.state.currentNode} />
                            </div>
                            <div className="col-sm-12">
                                <OccupancyBreakDown querySettings={this.props.querySettings} currentNode={this.state.currentNode} />
                            </div>
                            <DailyOccupancy querySettings={this.props.querySettings} currentNode={this.state.currentNode} />
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
        querySettings: state.querySettingsReducer
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);