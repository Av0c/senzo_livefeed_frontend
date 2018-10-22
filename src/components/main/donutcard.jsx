import React from 'react';

export default class DonutCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            strokeWidth: 5,
            radius: 75,
            svgSize: 150,
        };
    }

    toRadians(angle) {
        return (angle * (Math.PI / 180));
    }

    render() {
        const { radius, svgSize, strokeWidth} = this.state;
        const { colorPrimary, colorSecondary } = this.props;

        var availableFactor = (this.props.desks[0]/this.props.desks[1]);
        var occupiedFactor = 1-availableFactor;

        var cf = 2*radius*Math.PI;
        var arcAngle = 360-105;
        var arcLength = cf*((arcAngle)/360);
        var strokeDasharrayAvailable = [arcLength, cf];
        var strokeDasharrayOccupied = [arcLength*availableFactor, cf];

        var svgRotation = arcAngle/2;
        var lineRotation = -arcAngle*availableFactor;

        return (
            <div className="card-container card-donut">
                <div className="card-top">
                    <div className="card-title" style={{color: colorSecondary}}>{this.props.title}</div>
                </div>
                <div className="card-svg" >
                    <svg style={{transform: "scaleX(-1) rotateZ(" + svgRotation + "deg) "}} viewBox={"0 0 " + svgSize + " " + svgSize}>
                        <circle
                            className="circle-available"
                            fill="none"
                            strokeLinecap="round"
                            stroke={colorSecondary}
                            strokeDasharray={strokeDasharrayAvailable}
                            strokeWidth={strokeWidth}
                            r={radius}
                            cx={svgSize/2}
                            cy={svgSize/2}>
                        </circle>
                        <circle
                            className="circle-occupied"
                            fill="none"
                            strokeLinecap="round"
                            stroke={colorPrimary}
                            strokeDasharray={strokeDasharrayOccupied}
                            strokeWidth={strokeWidth+0.4}
                            r={radius}
                            cx={svgSize/2}
                            cy={svgSize/2}>
                        </circle>
                        <circle
                            className="circle-center"
                            fill={colorSecondary}
                            stroke="none"
                            r="11"
                            cx={svgSize/2}
                            cy={svgSize/2}>
                        </circle>
                        <line
                            className="line-center"
                            style={{transform: "rotateZ(" + lineRotation + "deg)", transformOrigin: svgSize/2+"px "+svgSize/2+"px"}}
                            strokeLinecap="round"
                            strokeWidth="3"
                            stroke={colorSecondary}
                            x1={svgSize/2}
                            y1={svgSize/2}
                            x2={svgSize/2}
                            y2={svgSize/2-59}>
                        </line>
                    </svg>
                    <svg viewBox={"0 0 " + svgSize + " " + svgSize} style={{position: "absolute"}}>
                        <text
                            style={{
                                fill: colorPrimary,
                                fontSize: "40px",
                            }}
                            x={svgSize/2}
                            y={svgSize/2+50}
                        >{this.props.desks[0]}
                        </text>
                    </svg>
                </div>
            </div>
        );
        // <circle className="circle-occupied" strokeWidth={strokeWidth} r={radius} cx={svgSize/2} cy={svgSize/2} strokeDasharray={strokeDasharray}></circle>
        // <text className="text-available" x={svgSize/2} y={svgSize/2} style={{transform: "translateX("+availableX+"px)"+" translateY("+availableY+"px)"}}>{Math.round(availableFactor*1000)/10 + "%"}</text>
        // <text className="text-occupied" x={svgSize/2} y={svgSize/2} style={{transform: "translateX("+occupiedX+"px)"+" translateY("+occupiedY+"px)"}}>{Math.round(occupiedFactor*1000)/10 + "%"}</text>
    }
}
