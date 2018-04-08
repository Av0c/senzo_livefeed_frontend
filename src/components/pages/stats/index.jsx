import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import DateSelector from 'components/common/dateselector';
import StatsMenu from 'components/common/statsmenu';
import TotalOccupancy from 'components/pages/stats/totaloccupancy';
import { getNodeSeriesStats, getParams } from 'actions/stats';
import OccupancyRange from 'components/pages/stats/occupancyrange';
import DailyOccupancy from 'components/pages/stats/dailyoccupancy';
import OccupancyBreakDown from 'components/pages/stats/occupancybreakdown';
import LeftMenu from 'components/common/leftmenu';
import Zingchart from 'zingchart';
import jsPDF from "jspdf";
import domtoimage from "dom-to-image";
import Jimp from "jimp/browser/lib/jimp";

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
        return domtoimage.toSvg(ReactDOM.findDOMNode(DOMnode)).then((imgdata) => {
            let imgContent = imgdata.split(",")[1];
            Jimp.read(imgContent, (img) => {
                let jimpImg = img.autocrop([10, true]);  
                jimpImg.getBase64("png", (imgdata) => {
                    resultHolder.push(imgdata);
                    callbacks();
                })
            })
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
        var images = [];
        var html = (x) => ReactDOM.findDOMNode(x);
        this.getPNG(this.totalOccupancy, images, () =>
        this.getPNG(this.occupancyRange, images, () =>
        this.getPNG(this.occupancyBreakDown, images, () =>
        this.getPNG(this.dailyOccupancy, images, () => {
            var doc = new jsPDF();
            var docSize = doc.internal.pageSize;

            var padding = 15, distance = 7;
            var width = docSize.width - padding*2;
            var row = padding;

            for(let i in images) {
                console.log(images[i]);

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
        }))));
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
                            />
                        </div>
                        <div className="col-md-12">
                            <TotalOccupancy ref={e => {this.totalOccupancy = e}} currentNode={this.state.currentNode} querySettings={this.props.querySettings} />
                            <OccupancyRange ref={e => {this.occupancyRange = e}} querySettings={this.props.querySettings} currentNode={this.state.currentNode} />
                            <OccupancyBreakDown ref={e => {this.occupancyBreakDown = e}} querySettings={this.props.querySettings} currentNode={this.state.currentNode} />
                            <DailyOccupancy ref={e => {this.dailyOccupancy = e}} querySettings={this.props.querySettings} currentNode={this.state.currentNode} />
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
