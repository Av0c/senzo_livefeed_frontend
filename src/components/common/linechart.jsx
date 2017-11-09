import React from 'react';
import { core as Core } from 'zingchart-react';

export default class LineChart extends React.Component {

    render() {
        var myConfig =
            {
                type: "line",

                title: {
                    text: "Webpage Analytics",
                    fontSize: "24px",
                    adjustLayout: true
                },
                plotarea: {
                    margin: "dynamic 45 60 dynamic",
                    backgroundColor: "#f6f7fa"
                },
                legend: {
                    layout: "float",
                    backgroundColor: "none",
                    borderWidth: 0,
                    shadow: 0,
                    align: "center",
                    adjustLayout: true,
                    item: {
                        padding: 7,
                        marginRight: 17,
                        cursor: "hand"
                    }
                },
                scaleX: {
                    labels: [
                        "Jan",
                        "Feb",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "Aug"
                    ],
                    minorTicks: 0
                },
                scaleY: {
                    values: "0:1000:250",
                    lineColor: "#f6f7f8",
                    shadow: 0,
                    guide: {
                        lineStyle: "dashed",
                        lineColor: "white"
                    },
                    markers: [
                        {
                            type: "line",
                            lineStyle: "dashed",
                            range: [920],
                            lineColor: "#e39199",
                            lineWidth: 2,
                            label:{  //define label within marker
                                text:"High Mark",
                                fontColor: "#e39199",
                                alpha: 0.7,
                                textAlpha: 1,
                                offsetX: 0,
                                offsetY: -5,
                                fontSize:16
                            }
                        },
                        {
                            type: "line",
                            lineStyle: "dashed",
                            range: [120],
                            lineColor: "#e3d49b",
                            lineWidth: 2,
                            label:{  //define label within marker
                                text:"Low Mark",
                                fontColor: "#e3d49b",
                                alpha: 0.7,
                                textAlpha: 1,
                                offsetX: 0,
                                offsetY: 25,
                                fontSize: 16
                            }
                        }
                    ],
                    minorTicks: 0,
                    thousandsSeparator: ","
                },
                crosshairX: {
                    lineColor: "#efefef",
                    plotLabel: {
                        borderRadius: "5px",
                        borderWidth: "1px",
                        borderColor: "#f6f7f8",
                        padding: "10px",
                        fontWeight: "bold"
                    },
                    scaleLabel: {
                        fontColor: "#000",
                        backgroundColor: "#f6f7fa",
                        borderRadius: "5px"
                    }
                },
                tooltip: {
                    visible: false
                },
                plot: {

                    highlight: true,
                    tooltipText: "%t views: %v<br>%k",
                    shadow: 0,
                    lineWidth: "2px",
                    marker: {
                        type: "circle",
                        size: 1.6
                    },
                    highlightState: {
                        lineWidth: 3
                    },
                    animation: {
                        effect: 1,
                        sequence: 2,
                        speed: 100
                    }
                },
                series: [
                    {
                        values: [
                            149.2,
                            174.3,
                            187.7,
                            147.1,
                            129.6,
                            189.6,
                            230,
                            164
                        ],
                        text: "Pricing",
                        lineColor: "#60aff4",
                        lineWidth: 5,
                        legendItem: {
                            backgroundColor: "#60aff4",
                            borderRadius: 5,
                            fontColor: "white"
                        },
                        legendMarker: {
                            visible: false
                        },
                        marker: {
                            backgroundColor: "#60aff4",
                            borderWidth: 0,
                            shadow: 0,
                            borderColor: "#69dbf1"
                        },
                        highlightMarker: {
                            size: 5,
                            backgroundColor: "#60aff4"
                        }
                    },
                    {
                        values: [
                            714.6,
                            656.3,
                            660.6,
                            729.8,
                            731.6,
                            682.3,
                            654.6

                        ],
                        text: "Documentation",
                        lineColor: "#a9d34a",
                        legendItem: {
                            backgroundColor: "#a9d34a",
                            borderRadius: 5,
                            fontColor: "white"
                        },
                        lineWidth: 5,
                        legendMarker: {
                            visible: false
                        },
                        marker: {
                            backgroundColor: "#a9d34a",
                            borderwidth: 0,
                            shadow: 0,
                            borderColor: "#a9d34a"
                        },
                        highlightMarker: {
                            size: 5,
                            backgroundColor: "#a9d34a"
                        }
                    }
                ]
            };
        return (
            <div>
                <Core id={this.props.id} data={myConfig} height="30%" width="400px" />
            </div>
        );
    }
}
