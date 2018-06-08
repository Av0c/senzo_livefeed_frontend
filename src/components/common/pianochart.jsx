import React from 'react';
import { core as Core } from 'zingchart-react';

import commonChartConfig from "components/common/commonchartconfig"

export default class PianoChart extends React.Component {

    generateSeries() {
        return this.props.data.values.map((values)=>{
            return {
                values: values
            };
        });
    }
    
    render() {
        let values = this.generateSeries();
        var myConfig = Object.assign({}, {}, {
            gui:{
                "behaviors":[
                    {
                        "id":"ViewSource",
                        "enabled":"none"
                    },
                    {
                        "id":"Reload",
                        "enabled":"none"
                    },
                    {
                        "id":"Print",
                        "enabled":"none"
                    },
                    {
                        "id":"DownloadSVG",
                        "enabled":"none"
                    },
                    {
                      id: "SaveAsImage",
                      enabled:"all"
                    },
                ],
            },

            type: "piano",
            theme: "classic",
            backgroundColor: "#fff",
            plotarea: {
                margin: "dynamic"
            },
            scaleX: {
                lineWidth: 0,
                item: {
                    borderColor: "none",
                    size: "13px",
                    fontColor: "#05636c"
                },
                guide: {
                    visible: false
                },
                tick: {
                    visible: false
                },
                values: this.props.data.labelsX,
                zooming: true,
                zoomSnap: true
                //"zoomTo": [2,5]
            },
            zoom: {
                preserveZoom: true,
                backgroundColor: "#e5e8ea",
                borderColor: "#009",
                borderWidth: 2,
                alpha: 0.75
            },
            scrollX: {
                bar: {
                    borderRadius: 3,
                    backgroundColor: "#01579B",
                    alpha: .5
                },
                handle: {
                    borderRadius: 5,
                    backgroundColor: "#01579B",
                    borderTop: "none",
                    borderRight: "none",
                    borderBottom: "none",
                    borderLeft: "none"
                }
            },
            scrollY: {
                bar: {
                    borderradius: 3,
                    backgroundColor: "#01579B",
                    alpha: .5
                },
                handle: {
                    borderRadius: 5,
                    backgroundColor: "#01579B",
                    borderTop: "none",
                    borderRight: "none",
                    borderBottom: "none",
                    borderLeft: "none"
                }
            },
            scaleY: {
                zooming: true,
                lineWidth: 0,
                mirrored: true,
                tick: {
                    visible: false
                },
                guide: {
                    visible: false
                },
                item: {
                    borderColor: "none",
                    size: "13px",
                    fontColor: "#05636c"
                },
                values: this.props.data.labelsY
            },
            plot: {
                aspect: "none",
                borderWidth: 10,
                borderColor: "#eeeeee",
                tooltip: {
                    fontSize: "14px",
                    fontColor: "white",
                    text: "Occupancy: %v%.",
                    textAlign: "left"
                },
                rules: [
                    {
                        rule: "%node-value >= 80",
                        backgroundColor: "#ee4d51",
                        fontColor: "#05636c"
                    },
                    {
                        rule: "%node-value >= 60 && %node-value < 80",
                        backgroundColor: "#f06c67",
                        fontColor: "#05636c"
                    },
                    {
                        rule: "%node-value >= 40 && %node-value < 60",
                        backgroundColor: "#f39986",
                        fontColor: "#05636c"
                    },
                    {
                        rule: "%node-value >=20 && %node-value < 40",
                        backgroundColor: "#f6c5a2",
                        fontColor: "#05636c"
                    },
                    {
                        rule: "%node-value >= 0 && %node-value <20",
                        backgroundColor: "#fae9ba",
                        fontColor: "#05636c",
                        legendMarker: {
                            backgroundColor: "#fae9ba"
                        }
                    },
                    {
                        rule: "%node-value < 0",
                        backgroundColor: "white",
                        fontColor: "#05636c",
                        visible: "false",
                        legendMarker: {
                            backgroundColor: "white"
                        }
                    }
                ]
            },
            series: values
        });
        return (
            <div>
                <Core id="pianodaily" data={myConfig} width='100%' height='430px' />
            </div>
        );
    }
}