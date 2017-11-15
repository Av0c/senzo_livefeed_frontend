import React from 'react';
import { core as Core } from 'zingchart-react';

export default class PianoChart extends React.Component {
    render() {
        var myConfig = {
            globals: {
                fontFamily: "Roboto"
            },
            graphset: [
                {
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
                        values: ["1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "11p"],
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
                        values: ["Mo", "Tu", "We", "Th", "Fr", "All"]
                    },
                    plot: {
                        aspect: "none",
                        borderWidth: 10,
                        borderColor: "#eeeeee",
                        tooltip: {
                            fontSize: "14px",
                            fontColor: "white",
                            text: " The surf will be about %v feet.",
                            textAlign: "left"
                        },
                        rules: [
                            {
                                rule: "%node-value > 4",
                                backgroundColor: "#ee4d51",
                                fontColor: "#05636c"
                            },
                            {
                                rule: "%node-value > 3 && %node-value <= 4",
                                backgroundColor: "#f06c67",
                                fontColor: "#05636c"
                            },
                            {
                                rule: "%node-value > 2 && %node-value <= 3",
                                backgroundColor: "#f39986",
                                fontColor: "#05636c"
                            },
                            {
                                rule: "%node-value > 1 && %node-value <= 2",
                                backgroundColor: "#f6c5a2",
                                fontColor: "#05636c"
                            },
                            {
                                rule: "%node-value > 0 && %node-value <= 1",
                                backgroundColor: "#fae9ba",
                                fontColor: "#05636c",
                                legendMarker: {
                                    backgroundColor: "#fae9ba"
                                }
                            }
                        ]
                    },
                    series: [
                        {
                            values: [ 1, 2, 3,4 ,5 , 2, 1, 2, 2, 1, 2],
     
                        },
                        {
                            values: [ 3, 3, 3, 3, 2, 2, 2, 2, 1, 2, 3],
                            
                        },
                        {
                            values: [ 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 2],
                            text: "40-60%",
                            legendMarker: {
                                backgroundColor: "#f39986"
                            }
                        },
                        {
                            values: [ 5, 4, 4, 5, 4, 4, 3, 3, 3, 3, 3],
                            text: "60-80%",
                            legendMarker: {
                                backgroundColor: "#f06c67"
                            }
                        },
                        {
                            values: [ 5, 5, 4, 4, 5, 4, 3, 2, 3, 4, 4],
                            text: "80-100%",
                            legendMarker: {
                                "backgroundColor": "#ee4d51"
                            }
                        }
                    ]
                }
            ]
        };
        return (
            <div>
                <Core id="myChart1" data={myConfig} width='100%' height='430px' />
            </div>
        );
    }
}