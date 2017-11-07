import React from 'react';
import { core as Core } from 'zingchart-react';

export default class Gauge extends React.Component {

    render() {
        var myConfig = {
            type: "gauge",
            scaleR: {
                aperture: 200,
                values: "0:100:25",
                center: {
                    size: 10,
                    backgroundColor: "#808080",
                    borderColor: "none"
                },

                ring: {
                    size: 10,
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
                            rule: "%v >= 70 && %v <= 100",
                            backgroundColor: "#ff6367"
                        }
                    ]
                },
                labels: ["Very Poor", "Poor", "Fair", "Good", "Great", "Very Great"]  //Scale Labels
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

        console.log(myConfig);

        return (
            <div>
                <Core id="myChart" height="300" width="600" data={myConfig} />
            </div>
        );
    }
}
