import React from 'react';
import ReactDOM from 'react-dom';
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
            },
            menuClass: "col-md-12 static-menu",
        };
        this.checkSticky = this.checkSticky.bind(this);
    }

    componentDidMount() {
        this.findNode(this.props);
        window.addEventListener("scroll", this.checkSticky);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.checkSticky);
    }
    componentWillReceiveProps(nextProps) {
        this.findNode(nextProps);
    }

    findNode(props) {
        this.setState({
            currentNode: props.nodeMap[props.params.id],
        });
    }

    checkSticky() {
        var headerHeight = 65;
        var menuClass;

        var scrollTop = (document.body.scrollTop || document.documentElement.scrollTop);

        var menuTop = Math.max(65 - scrollTop, 0);

        this.setState({
            menuTop: menuTop,
        });
    }

    render() {
        return (
            <div className="stats-body" id="stats-body">
                <div className="container-fluid">
                    <div className="row" style={{marginTop: "120px"}}>
                        <div className={this.state.menuClass} style={{top: this.state.menuTop}}>
                            <LeftMenu overview='active' comparison='' />
                            <DateSelector />
                            <StatsMenu
                                name={this.state.currentNode.info.name}
                                id={this.state.currentNode.id}
                                node={this.state.currentNode}
                                querySettings={this.props.querySettings}
                            />
                        </div>
                        <Charts
                            currentNode={this.state.currentNode}
                            querySettings={this.props.querySettings}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tree: state.overviewReducer.customerOverview,
        nodeMap: state.overviewReducer.nodeMap,
        querySettings: state.querySettingsReducer,
        cards: state.defaultSettingsReducer.card,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
