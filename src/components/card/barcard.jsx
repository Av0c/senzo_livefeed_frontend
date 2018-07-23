import React from 'react';

export default class BarCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            svgSize: 160,
            ratio: 1/10,
        };
    }

    toRadians(angle) {
        return (angle * (Math.PI / 180));
    }

    render() {
        const { svgSize, strokeWidth, ratio } = this.state;
        console.log(this.props);

        return (
            <div className={(!this.props.disabled) ? "card-container flat-popup" : "card-container flat-popup card-disabled"}>
                <div className="card-bar">
                    <div className="card-title">{this.props.title}</div>
                    <div className="card-info">{this.props.periodType + " (" + this.props.startDate.replace(/-/g, "/") + " - " + this.props.endDate.replace(/-/g, "/") + ")"}</div>
                    <div className="card-chart">
                        <div className="card-chart-svg">
                            <svg viewBox={"0 0 " + svgSize + " " + svgSize*ratio} >
                                <defs>
                                    <pattern
                                        id="pattern"
                                        width="1" height="15"
                                        patternUnits="userSpaceOnUse"
                                        patternTransform="rotate(45)"
                                    >
                                        <line stroke="#2196F4" strokeWidth="1px" y2="15" strokeLinecap="butt"/>
                                    </pattern>
                                </defs>
                                <rect className="base" x="0" y="0" width={svgSize} height={svgSize*ratio}/>
                                <g>
                                    <line x1="0" x2="0" y1={svgSize*ratio} y2={svgSize*ratio+6} stroke="#ddd" strokeWidth="0.5"/>
                                    <text x="0" y="-4" textAnchor="middle">0%</text>
                                </g>
                                <g>
                                    <line x1={svgSize*0.25} x2={svgSize*0.25} y1={svgSize*ratio} y2={svgSize*ratio+6} stroke="#ddd" strokeWidth="0.5"/>
                                    <text x={svgSize*0.25} y="-4" textAnchor="middle">25%</text>
                                </g>
                                <g>
                                    <line x1={svgSize*0.5} x2={svgSize*0.5} y1={svgSize*ratio} y2={svgSize*ratio+6} stroke="#ddd" strokeWidth="0.5"/>
                                    <text x={svgSize*0.5} y="-4" textAnchor="middle">50%</text>
                                </g>
                                <g>
                                    <line x1={svgSize*0.75} x2={svgSize*0.75} y1={svgSize*ratio} y2={svgSize*ratio+6} stroke="#ddd" strokeWidth="0.5"/>
                                    <text x={svgSize*0.75} y="-4" textAnchor="middle">75%</text>
                                </g>
                                <g>
                                    <line x1={svgSize*1} x2={svgSize*1} y1={svgSize*ratio} y2={svgSize*ratio+6} stroke="#ddd" strokeWidth="0.5"/>
                                    <text x={svgSize*1} y="-4" textAnchor="middle">100%</text>
                                </g>
                                <rect className="peak" x="0" y="0" width={svgSize*this.props.peak} height={svgSize*ratio} fill="url(#pattern)"/>
                                <rect className="average" x="0" y="0" width={svgSize*this.props.average} height={svgSize*ratio}/>
                            </svg>
                        </div>
                    </div>
                    <div className="card-data-container">
                        <div className="card-data">
                            <p className="left">Average: <b>{Math.round(this.props.average*1000)/10}%</b></p>
                            <p className="right">Peak: <b>{Math.round(this.props.peak*1000)/10}%</b></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
