import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Dropdown from 'components/common/dropdown';
import DropdownItem from 'components/common/dropdownitem';
import * as aStats from 'actions/stats';
import { getParams } from 'actions/stats';
import { getPNG, getPngDimensions, chainGetPNG, dumpAllToPDF} from "./functions"

class HeatmapExport extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            loading: false,
        }; 
    }

    downloadPDF() {
        this.setState({loading: true}, () => {
            var images = [];

            chainGetPNG([
                this.props.heatmap,
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
        return `WIDGET_${locationName}_${settings.startdate}_${settings.enddate}_${settings.starthour}:00_${settings.endhour}:59.pdf`;
    }


    render() {
        return (
            <div>
                <Dropdown header={
                    <div className={"heatmap-export " + (this.state.loading ? "loading" : "")}>
                        {
                            this.state.loading ?
                            <img src="src/assets/images/loading.gif" />
                            : <img src="src/assets/images/export.svg" />
                        }
                    </div>
                } toggleable={!this.state.loading} noArrow>
                    <DropdownItem>
                        <div onClick={() => this.downloadPDF()}>
                            PDF : Picture of heatmap
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

export default connect(mapStateToProps, mapDispatchToProps)(HeatmapExport);