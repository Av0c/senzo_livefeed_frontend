import React from 'react';
import { connect } from 'react-redux';
import BreakDownChartContainer from 'components/pages/stats/occupancybreakdown/breakdownchartcontainer';
import { getStatsBreakdown, getParams } from 'actions/stats';
import ModeSelector from 'components/common/modeselector';
import MultiSelect from './multiselect';

export class OccupancyBreakDown extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isArea: false,
            mode: 'Average',
            areas: new Map(),
        };
    }

    chooseMode(mode) {
        this.setState({ mode: mode });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentNode.id) {
            if (nextProps.currentNode.type == 'meeting_room' || nextProps.currentNode.type == 'open_area') {
                this.setState({ isArea: true });
            }
            else {
                let params = getParams(nextProps);
                params.id = [];
                // params.areas = new Map();
                params.areaOptions = [];
                this.getAreaChildren(nextProps.currentNode, params.id, params.areaOptions);
                this.setState({
                    isArea: false,

                    areaOptions: params.areaOptions,
                });
                this.props.dispatch(getStatsBreakdown(params));
            }
        }
    }

    getAreaChildren(tree, ids, areaOptions) {
        var self = this;
        tree.children.forEach((node) => {
            if (node.type == 'meeting_room' || node.type == 'open_area') {
                ids.push(node.id);
                // areas.set(node.id, node.info.name + "\n" + node.children.length + " desks");
                areaOptions.push({value: node.id, label: node.info.name, length: node.children.length, selected: false});
            } else {
                self.getAreaChildren(node, ids, areas, areaOptions);
            }
        });
        console.log("######################");
        // console.log(areas);
        console.log("######################");
    }

    handleSelectChange(value) {
        var areaOptions = this.state.areaOptions.slice();
        var index = areaOptions.indexOf(value);

        areaOptions[index].selected = !areaOptions[index].selected;

        var areas = [];
        var count = 0;
        for (var i = 0; i < areaOptions.length; i++) {
            if (areaOptions[i].selected) {
                count++;
                areas.push({id: areaOptions[i].value, label: areaOptions[i].label + "\n(" + areaOptions[i].length + " desks)"});
            }
        }
        var displayValue;
        switch (count) {
            case 0:
                displayValue = "No room selected.";
            break;
            case 1:
                displayValue = "1 room selected.";
            break;
            default:
                displayValue = count + " rooms selected.";
        }
		this.setState({
            areas: areas,
            value: value,
            areaOptions: areaOptions,
            displayValue: displayValue,
        });
    }

    clearSelect() {
        var areaOptions = this.state.areaOptions.slice()
        for (var i = 0; i < areaOptions.length; i++) {
            areaOptions[i].selected = false;
        }

        this.setState({
            areas: [],
            areaOptions: areaOptions,
            value: 0,
            displayValue: "No room selected.",
        });
    }

    render() {
        return (
            <div>
                {!this.state.isArea && <div className="stats-graph-card">
                    <div className="stats-card-shape clearfix" ref={(e) => {document.charts.occupancyBreakDown = e}}>
                        <div className="graph-header clearfix">
                            <div className="row">
                                <div className="col-sm-12 col-xs-12" style={{marginBottom: "20px"}}>
                                    <h2>{this.props.querySettings.tag} Breakdown</h2>
                                </div>
                                <div style={{marginRight: "30px"}} className="pull-right breakdown-chart-select">
                                    <div className="multi-select-input" data-tooltip="Open for more details">
                                        <MultiSelect
                                            onChange={(value) => {this.handleSelectChange(value)}}
                                            onFocus={() => {}}
                                            onClose={() => {}}

                                            options={this.state.areaOptions}
                                            displayValue={this.state.displayValue}
                                            value={this.state.value}
                                            />
                                    </div>
                                <i className="material-icons multi-select-clear" onClick={() => {this.clearSelect()}} data-tooltip="Clear all">clear</i>
                                </div>
                                <div style={{marginRight: "20px"}} className="pull-right">
                                    <ModeSelector mode={this.state.mode} chooseMode={this.chooseMode.bind(this)} />
                                </div>
                            </div>
                        </div>
                        <div className="the-graph clearfix">
                            {console.log("AREAS: ")}
                            {console.log(this.state.areas)}
                            <BreakDownChartContainer mode={this.state.mode} areas={this.state.areas} />
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(null, mapDispatchToProps)(OccupancyBreakDown);
