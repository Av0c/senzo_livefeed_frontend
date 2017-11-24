import React from 'react';
import ReactDOM from 'react-dom';

class Arc extends React.Component {
    render() {
        return (
            <svg className="arc-svg" width="420" height="420">
                <circle className="arc-base" cx="50%" cy="50%" r={this.props.r} strokeDasharray={this.props.strokeDasharrayBase} transform={this.props.rotate} stroke="#EEE" strokeWidth="16px"></circle>
                <circle className="arc-peak" cx="50%" cy="50%" r={this.props.r} strokeDasharray={this.props.strokeDasharrayArc} transform={this.props.rotate} stroke="#2196F3" strokeWidth="16px"></circle>
            </svg>
        );
    }
}

class Needle extends React.Component {
    render() {
        return (
            <svg className="needle-svg" x="0px" y="0px" width="420" height="420" viewBox="-0.3 1.1 4 55" >
                <defs>
                    <filter id="glow-gray">
                        <feOffset in="SourceAlpha" dx="-0.1" dy="0.1" result="offOut"/>
                        <feGaussianBlur in="offOut" stdDeviation="0.12" result="blurOut"/>
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.5"/>
                        </feComponentTransfer>
                        <feMerge>
                            <feMergeNode/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                <g transform={this.props.rotate}>
                    <g filter="url(#glow-gray)">
                        <ellipse fill="#757575" strokeWidth="0" cx="1.7" cy="28.8" rx="1.6" ry="2.1" />
                        <polygon fill="#757575" strokeWidth="0" points="1.7,8.3 0.1,28.7 3.3,28.7 "/>
                    </g>
                    <circle fill="#FAFAFA" strokeWidth="0" cx="1.7" cy="5" r="1.4" filter="url(#glow-gray)"/>
                </g>
            </svg>
        );
    }
}

class Info extends React.Component {
    render() {
        return (
            <div className="info">
                <p className="left">
                    <span className="bold percent number">{this.props.avgPercent}</span><br></br>avg
                </p>
                <p className="right">
                    <span className="bold percent number">{this.props.peakPercent}</span><br></br>peak
                </p>
                <p className="bold label">{this.props.label}</p>
            </div>
        );
    }
}

class Marker extends React.Component {
    render() {
        return (
            <p className="markers" style={this.props.css}>
                <span className="percent">{this.props.markerValue}</span><br></br>
                <span className="ticks bold">|</span>
            </p>
        );
    }
}

export default class Gauge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            css: {},
        };
        this.updateWidth = this.updateWidth.bind(this);
    }

    componentDidMount() {
        var width = this.myClock.offsetWidth;
        var scale = "scale(" + (width/420) + ")";
        var css = {
            transformOrigin: 'left top',
            transform: scale,
        }
        this.setState({ css: css });

        window.addEventListener("resize", this.updateWidth);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWidth);
    }

    updateWidth() {
        var width = this.myClock.offsetWidth;
        var scale = "scale(" + (width/420) + ")";
        var css = {
            transformOrigin: 'left top',
            transform: scale,
            fontSize: "14px"
        }
        this.setState({ css: css });
    }

    renderArc() {
        var cf, fullDashLen, arcDashLen, r, arcAngle, rotAngle, peakValue;
        peakValue = this.props.values[1]; //peak
        r = this.props.arcParams[0];
        arcAngle = this.props.arcParams[1];
        cf = 2*r*Math.PI;
        fullDashLen = cf*((360-arcAngle)/360);
        arcDashLen = fullDashLen*peakValue;
        rotAngle = (180-arcAngle)/2 + arcAngle;
        var strokeDasharrayArc = [arcDashLen, cf];
        var strokeDasharrayBase = [fullDashLen, cf];
        var rotate = "rotate(" + rotAngle + ")";
        return (
            <Arc
                r={r}
                strokeDasharrayArc={strokeDasharrayArc}
                strokeDasharrayBase={strokeDasharrayBase}
                rotate={rotate}
            />
        );
    }

    renderNeedle() {
        var arcAngle, avgValue;
        avgValue = this.props.values[0];
        arcAngle = this.props.arcParams[1];
        var offset = 2.5;
        var needleAngle = -(362-arcAngle-offset)/2 + (362-arcAngle-offset)*avgValue;
        var rotate = "rotate(" + needleAngle + ", 1.7, 28.6)";
        return (
            <Needle
                rotate={rotate}
            />
        );
    }

    renderInfo() {
        var avgPercent = Math.round(this.props.values[0] * 100);
        var peakPercent = Math.round(this.props.values[1] * 100);
        return (
            <Info
                label={this.props.label}
                avgPercent={avgPercent}
                peakPercent={peakPercent}
            />
        );
    }

    renderMarkers() {
        var markerValue, markerAngle, arcAngle, count;
        var returnArray = [];
        var css = {};
        var rotate = "";
        var offset = 2;
        arcAngle = this.props.arcParams[1];
        count = 5;
        for (var i = 0; i < count; i++) {
            markerValue = 0 + i*100/(count-1);
            markerAngle = -(362-arcAngle-offset)/2 + i*(362-arcAngle-offset)/(count-1);
            rotate = "rotate(" + markerAngle + "deg";
            css = {
                transform: rotate,
            }
            returnArray[i] = <Marker key={i} markerValue={markerValue} css={css}/>;
        }
        return returnArray;
    }

    render() {
        return (
            <div className="clock-container" ref={input => {this.myClock = input}} style={this.state.css}>
                <div className="markers-container">
                    {this.renderMarkers()}
                </div>
                <div className="info-container">
                    {this.renderInfo()}
                </div>
                <div className="arc-container">
                    {this.renderArc()}
                    {this.renderNeedle()}
                </div>
            </div>
        );
    }
}