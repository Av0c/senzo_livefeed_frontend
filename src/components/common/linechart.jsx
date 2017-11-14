import React from 'react';
import { core as Core } from 'zingchart-react';

export default class LineChart extends React.Component {

    getLabels() {
        if (this.props.stats.constraint.startdate == this.props.stats.constraint.enddate) {
            return this.props.stats.points.map((point) => {return point.time.substr(0,2);});
        }
        else {
            return this.props.stats.points.map((point) => {return point.time.substr(0,11);});
        } 
    }

    getAverage() {
        return this.props.stats.points.map((point) => {return Math.round(point.avg*100);});
    }

    getPeak() {
        return this.props.stats.points.map((point) => {return Math.round(point.pk*100);});
    }

    render() {
        let labels = this.getLabels();
        let avgs = this.getAverage();
        let peaks = this.getPeak();
        var myConfig =
            {
                type: "line",
                plotarea: {
                    marginTop: '10px',
                    marginRight: '50px',
                    marginLeft: '40',
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
                    labels: labels,
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
                            label: {  //define label within marker
                                text: "High Mark",
                                fontColor: "#9e9e9e",
                                alpha: 0.7,
                                textAlpha: 1,
                                offsetX: 10,
                                offsetY: -5,
                                fontSize: 16
                            }
                        },
                        {
                            type: "area",
                            range: [0, 20],
                            lineColor: "#faf8f9",
                            lineWidth: 2,
                            label: {  //define label within marker
                                text: "Low Mark",
                                fontColor: "#9e9e9e",
                                alpha: 0.7,
                                textAlpha: 1,
                                offsetX: 10,
                                offsetY: -5,
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
                        values: peaks,
                        text: "Peak",
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
                        values: avgs,
                        text: "Average",
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
                <Core id={this.props.id} data={myConfig} height="450px" width="100%" />
            </div>
        );
    }
}
