import React from 'react';
import { core as Core } from 'zingchart-react';

export default class Gauge extends React.Component {

    render() {
        var myConfig = {
            type: "gauge",
            scale: {
                sizeFactor:"120%" 
            },
            scaleR: {
                aperture: 180,
                values: "0:100:25",
                center: {
                    size: 10,
                    backgroundColor: "#808080",
                    borderColor: "none"
                },

                ring: {
                    size: 5,
                    rules: [
                        {
                            rule: "%v >= 0 && %v <= 25",
                            backgroundColor: "#60aff4"
                        },
                        {
                            rule: "%v >= 25 && %v <= 50",
                            backgroundColor: "#a9d349"
                        },
                        {
                            rule: "%v >= 50 && %v <= 75",
                            backgroundColor: "#f4bc36"
                        },
                        {
                            rule: "%v >= 75 && %v <= 100",
                            backgroundColor: "#ff6367"
                        }
                    ]
                },
                labels: [null, null, null, "Peak"]  //Scale Labels
            },
            plotarea: {
                marginBottomOffset: 10, // or '10px', '10%',
                marginLeftOffset: "0px", // or '10px', '10%',
                marginRightOffset: "200px", // or '10px', '10%',
                marginTopOffset: 10, // or '10px', '10%'
                csize: "55%",
                size: "90%",
                backgroundColor: "white"
            },
            series: [
                { values: [87] }
            ]
        };
        return (
            <div>
                <Core id={"gaugechart"+this.props.id} data={myConfig} height="320px" width="100%"/>
            </div>
        );
    }
}
