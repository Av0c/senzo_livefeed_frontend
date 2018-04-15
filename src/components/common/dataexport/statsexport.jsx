import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Dropdown from 'components/common/dropdown';
import DropdownItem from 'components/common/dropdownitem';
import * as aStats from 'actions/stats';
import { getParams } from 'actions/stats';
import { getPNG, getPngDimensions, chainGetPNG, dumpAllToPDF} from "./functions" 

class StatsExport extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            loading: false,
        }; 
    }

    downloadCSV() {
        this.setState({loading: true}, () => {
            aStats.downloadCSV(this.props.node, this.props.querySettings, () => {
                this.setState({loading: false})
            })
        })
    }

    downloadPDF() {
        this.setState({loading: true}, () => {
            var images = [];

            chainGetPNG([
                document.charts.totalOccupancy,
                document.charts.occupancyRange,
                document.charts.occupancyBreakDown,
                document.charts.dailyOccupancy1,
                document.charts.dailyOccupancy2,
            ],images,
            () => {
                this.setState({loading: false});
                dumpAllToPDF(images, this.getPDFName());
            });
        });
    }

    getPDFName() {
        let settings = getParams({
            querySettings: this.props.querySettings,
            currentNode: this.props.node,
        });
        let locationName = this.props.tree.info.name.replace(/[^A-Za-z0-9]/g, '');
        return `STATS_${locationName}_${settings.startdate}_${settings.enddate}_${settings.starthour}:00_${settings.endhour}:59.pdf`;
    }


    render() {
        return (
            <div className="stats-export-container">
                <Dropdown header={
                    <div className={"stats-export " + (this.state.loading ? "loading" : "")}>
                        {
                            this.state.loading ?
                            <img src="src/assets/images/loading.gif" />
                            : <img src="src/assets/images/export.svg" />
                        }
                    </div>
                } toggleable={!this.state.loading} noArrow>
                    <DropdownItem>
                        <div onClick={() => this.downloadCSV()}>
                            CSV : Data of sensors
                        </div>
                    </DropdownItem>
                    <DropdownItem>
                        <div onClick={() => this.downloadPDF()}>
                            PDF : Pictures of charts
                        </div>
                    </DropdownItem>
                </Dropdown>
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

export default connect(mapStateToProps, mapDispatchToProps)(StatsExport);