import React from "react";
import { core as Core } from "zingchart-react";

export default class BreakDownChart extends React.Component {

    render() {
        var myConfig =
            {
                type: "bar",
                plotarea: {
                    marginTop: "10px",
                    marginRight: "50px",
                    marginLeft: "40",
                    backgroundColor: "#f6f7fa"
                },
                scaleX: {
                    minorTicks: "0",
                    maxTicks: "0",
                    labels: this.props.data.labels,
                    maxLabels: "7",
                    item: {
                        maxWidth: "180px",
                        wrapText: "true",
                    },
                    tooltip: {
                        text: "%v",
                        backgroundColor: "#424242",
                        borderRadius: 3,
                        borderWidth: 0,
                        fontColor: "white",
                        fontFamily: "Roboto",
                        fontSize: "14px",
                        padding: "6px 12px",
                    }
                },
                scaleY: {
                    lineColor: "#f6f7f8",
                    shadow: 0,
                    values: "0:100:20",
                    format: "%v%",
                    guide: {
                        lineStyle: "dashed",
                        lineColor: "white"
                    },
                    minorTicks: 0,
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
                                offsetX: 100,
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
                                offsetX: 100,
                                offsetY: -5,
                                fontSize: 16
                            }
                        }
                    ],
                    thousandsSeparator: ","
                },
                plot: {
                    barWidth: "50px",
                    animation: {
                        effect: 1,
                        sequence: 2,
                        speed: 100
                    }
                },
                series: [
                    {
                        values: this.props.data.stats,
                        backgroundColor: "#74b63b"
                    },

                ]
            };
        return (
            <div>
                <Core id="breakdownchart" data={myConfig} height="450px" width="100%" />
            </div>
        );
    }
}
