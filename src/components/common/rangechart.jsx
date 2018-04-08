import React from 'react';
import { core as Core } from 'zingchart-react';
import { connect } from 'react-redux';

import commonChartConfig from "components/common/commonchartconfig"

export default class RangeChart extends React.Component {

    render() {
        let values = []
        values.push({values:this.props.values, backgroundColor: "#74b63b"});
        if(this.props.values1) {
            values.push({values:this.props.values1, backgroundColor: "#66aee9"})
        }
        var myConfig = Object.assign({}, commonChartConfig, {
                type: "bar",
                plotarea: {
                    backgroundColor: "#f6f7fa"
                },
                scaleX: {
                    labels: ["0%", "0-20%", "20-40%", "40-60%", "60-80%", "80-100%", "100%"],
                    minorTicks: 0
                },
                scaleY: {
                    lineColor: "#f6f7f8",
                    shadow: 0,
                    format: "%vhr",
                    guide: {
                        lineStyle: "dashed",
                        lineColor: "white"
                    },
                    minorTicks: 0,
                    thousandsSeparator: ","
                },
                plot: {
                    barWidth: "50px",
                    rules: [
                        {
                            rule: " %p==0 && %node-index ==0 || %node-index==6" ,
                            backgroundColor: this.props.values1 ? "#d1e6a2" : "#dfdfdf"
                        },
                        {
                            rule: " %p==1 && %node-index ==0 || %node-index==6",
                            backgroundColor: "#afd3f7"
                        }
                    ],
                    // animation: {
                    //     effect: 1,
                    //     sequence: 2,
                    //     speed: 100
                    // }
                },
                series: values
        });
        return (
            <div>
                <Core id={this.props.id} data={myConfig} height="450px" width="100%" />
            </div>
        );
    }
}
