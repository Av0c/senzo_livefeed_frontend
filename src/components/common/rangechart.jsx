import React from 'react';
import { core as Core } from 'zingchart-react';
import { connect } from 'react-redux';

export default class RangeChart extends React.Component {

    render() {
        
        var myConfig =
            {
                type: "bar",
                plotarea: {
                    marginTop: '10px',
                    marginRight: '50px',
                    marginLeft: '40',
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
                            rule: "%node-index ==0 || %node-index==6",
                            backgroundColor: "#dfdfdf"
                        }
                    ],
                    animation: {
                        effect: 1,
                        sequence: 2,
                        speed: 100
                    }
                },
                series: [
                    {
                        values: this.props.values,
                        backgroundColor: "#74b63b"
                    },

                ]
            };
        return (
            <div>
                <Core id={this.props.id} data={myConfig} height="450px" width="100%" />
            </div>
        );
    }
}
