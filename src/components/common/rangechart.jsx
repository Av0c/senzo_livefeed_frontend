import React from 'react';
import { core as Core } from 'zingchart-react';
import { connect } from 'react-redux';

export class RangeChart extends React.Component {

    getValues() {
        let values = [0, 0, 0, 0, 0, 0, 0];
        this.props.range.points.forEach((point) => {
            if (point.avg == 0) {
                values[0] += 1;
            }
            else if (point.avg < 0.2) {
                values[1] += 1;
            }
            else if (point.avg < 0.4) {
                values[2] += 1;
            }
            else if (point.avg < 0.6) {
                values[3] += 1;
            }
            else if (point.avg < 0.8) {
                values[4] += 1;
            }
            else if (point.avg < 1) {
                values[5] += 1;
            }
            else {
                values[6] += 1;
            }
        });
        return values;
    }

    render() {
        let values = this.getValues();
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
                        values: values,
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

function mapStateToProps(state) {
    return {
        range: state.statsReducer.range
    };
}

export default connect(mapStateToProps, null)(RangeChart);