import React from 'react';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            strokeWidth: 40,
            radius: 60,
            svgSize: 150,
            textDistance: 97,
        };
    }

    toRadians(angle) {
        return (angle * (Math.PI / 180));
    }

    render() {
        const { radius, svgSize, strokeWidth } = this.state;

        var availableFactor = (this.props.desks[0]/this.props.desks[1]);
        var occupiedFactor = 1-availableFactor;

        var strokeDasharray = Math.round(occupiedFactor*radius*2*3.14) + ", " + Math.round(radius*2*3.14);

        var availableTextDeg = (availableFactor*360)/2-90;
        var availableX = (svgSize/2)+(Math.cos(this.toRadians(availableTextDeg)) * this.state.textDistance);
        var availableY = (svgSize/2)+(Math.sin(this.toRadians(availableTextDeg)) * this.state.textDistance);

        var occupiedTextDeg = availableTextDeg+180;
        var occupiedX = (svgSize/2)+(Math.cos(this.toRadians(occupiedTextDeg)) * this.state.textDistance);
        var occupiedY = (svgSize/2)+(Math.sin(this.toRadians(occupiedTextDeg)) * this.state.textDistance);

        return (
            <div className={(!this.props.disabled) ? "card-container flat-popup" : "card-container flat-popup card-disabled"}>
                <div className="card-top">
                    <div className="card-title">{this.props.title}</div>
                    <div className="card-status">
                        <h1>Desks available</h1>
                        {(!this.props.disabled) ?
                            <p>{this.props.desks[0] + "/" + this.props.desks[1]}</p> :
                            <p>{"--/--"}</p>
                        }
                    </div>
                </div>
                {(!this.props.disabled) ?
                <div>
                    <div className="card-chart">
                        <div className="card-chart-svg">
                            <svg>
                                <circle className="circle-available" strokeWidth={strokeWidth} r={radius} cx={svgSize/2} cy={svgSize/2}></circle>
                                <circle className="circle-occupied" strokeWidth={strokeWidth} r={radius} cx={svgSize/2} cy={svgSize/2} strokeDasharray={strokeDasharray}></circle>
                                <text className="text-available" x={availableX} y={availableY}>{Math.round(availableFactor*1000)/10 + "%"}</text>
                                <text className="text-occupied" x={occupiedX} y={occupiedY}>{Math.round(occupiedFactor*1000)/10 + "%"}</text>
                            </svg>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <div className="card-legend-available">Availability</div>
                        <div className="card-legend-occupied">Occupancy</div>
                    </div>
                </div>
                :
                <div className="card-warning">
                    NOT APPLICABLE
                </div>
                }
            </div>
        );
    }
}
