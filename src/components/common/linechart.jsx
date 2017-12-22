import React from 'react';
import { core as Core } from 'zingchart-react';

export default class LineChart extends React.Component {

    render() {
        var myConfig =
            {
                type: "line",
                plotarea: {
                    marginTop: '10px',
                    marginRight: '50px',
                    marginLeft: '40px',
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
                    labels: this.props.stats.labels,
                    minorTicks: 0
                },
                scaleY: {
                    values: "0:100:20",
                    lineColor: "#f6f7f8",
                    shadow: 0,
                    format: "%v%",
                    guide: {
                        lineStyle: "dashed",
                        lineColor: "white"
                    },
                    markers: [
                        {
                            type: "area",
                            range: [80, 100],
                            lineColor: "#e39199",
                            lineWidth: 2,
                            
                        },
                        {
                            type: "area",
                            range: [0, 20],
                            lineColor: "#faf8f9",
                            lineWidth: 2,
                            
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
                    // animation: {
                    //     effect: 1,
                    //     sequence: 2,
                    //     speed: 0.000
                    // }
                },
                series: [
                    {
                        values: this.props.stats.peaks,
                        text: this.props.first || "Peak",
                        lineColor: "#60aff4",
                        lineWidth: 5,
                        legendItem: {
                            backgroundColor: "#60aff4",
                            borderRadius: 5,
                            fontColor: "white",
                            fontSize: "16px"
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
                        values: this.props.stats.avgs,
                        text: this.props.second || "Average",
                        lineColor: "#a9d34a",
                        legendItem: {
                            backgroundColor: "#a9d34a",
                            borderRadius: 5,
                            fontColor: "white",
                            fontSize: "16px"
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
                <Core id={this.props.id} data={myConfig} height="450px" width="100%" />
            </div>
        );
    }
}
