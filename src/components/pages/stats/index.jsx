import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import DateSelector from 'components/common/dateselector';
import StatsMenu from 'components/common/statsmenu';
import LeftMenu from 'components/common/leftmenu';
import Zingchart from 'zingchart';
import jsPDF from "jspdf";
import domtoimage from "./dom-to-image-modified";

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
            PDFloading: false,
        }; 
    }

    componentDidMount() {
        this.findNode(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.findNode(nextProps);
    }

    findNode(props) {
        this.setState({
            currentNode: props.nodeMap[props.params.id],
        });
    }

    getPNG(DOMnode, resultHolder, callbacks) {
        return domtoimage.toPng(ReactDOM.findDOMNode(DOMnode)).then((imgdata) => {
            // let imgContent = imgdata.split(",")[1];
            // Jimp.read(imgContent, (img) => {
            //     let jimpImg = img.autocrop([10, true]);  
            //     jimpImg.getBase64("png", (imgdata) => {
            //         resultHolder.push(imgdata);
            //         callbacks();
            //     })
            // })
            resultHolder.push(imgdata);
            callbacks();
        });
    }

    getPngDimensions(base64) {
        // https://stackoverflow.com/questions/15327959/get-height-and-width-dimensions-from-base64-png/15327984
        const header = atob(base64.slice(0, 50)).slice(16,24)
        const uint8 = Uint8Array.from(header, c => c.charCodeAt(0))
        const dataView = new DataView(uint8.buffer)

        return {
            width: dataView.getInt32(0),
            height: dataView.getInt32(4)
        }
    }

    downloadStatsPictures() {
        this.setState({PDFloading: true}, () => {
            var images = [];
            var html = (x) => ReactDOM.findDOMNode(x);
            this.getPNG(document.charts.totalOccupancy, images, () =>
            this.getPNG(document.charts.occupancyRange, images, () =>
            this.getPNG(document.charts.occupancyBreakDown, images, () =>
            this.getPNG(document.charts.dailyOccupancy1, images, () =>
            this.getPNG(document.charts.dailyOccupancy2, images, () => {
                this.setState({PDFloading: false});
                var doc = new jsPDF();
                var docSize = doc.internal.pageSize;

                var padding = 15, distance = 7;
                var width = docSize.width - padding*2;
                var row = padding;

                for(let i in images) {
                    let imgContent = images[i].split(",")[1];
                    let imgSize = this.getPngDimensions(imgContent);
                    let imgNewHeight = width*imgSize.height/imgSize.width

                    if (row + imgNewHeight + padding > docSize.height) { // new page
                        row = padding;
                        doc.addPage();
                    }

                    doc.addImage(images[i], padding, row, width, imgNewHeight);
                    row+= imgNewHeight + distance;
                }

                this.saveDoc(doc);
            })))));
        });
    }

    saveDoc(doc) {
        let settings = getParams({
            querySettings: this.props.querySettings,
            currentNode: this.state.currentNode,
        });
        let locationName = this.props.tree.info.name.replace(/[^A-Za-z0-9]/g, '');
        let fileName = `STATS_${locationName}_${settings.startdate}_${settings.enddate}_${settings.starthour}:00_${settings.endhour}:59.pdf`;
        doc.save(fileName);
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
                                name={this.state.currentNode.info.name}
                                id={this.state.currentNode.id}
                                node={this.state.currentNode}
                                querySettings={this.props.querySettings}
                                downloadStatsPictures={() => this.downloadStatsPictures()}
                                PDFloading={this.state.PDFloading}
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
