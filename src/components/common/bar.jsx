import React from 'react';

class Segment extends React.Component {
    render() {
        return (
            <line className="segment" x1="9" x2={this.props.maxLength+8} y1="8" y2="8" stroke={this.props.color} strokeWidth="16" strokeOpacity="1" strokeDasharray={this.props.strokeDasharray} transform={this.props.x1} style={this.props.css} />
        );
    }
}

export default class Bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maxLength: 282,
            padding: 30,
            lengths: [0, 0, 0],
            colors: ["#FFCA28", "#9CCC65", "#EF5350"],
            notice: "",
            constCss: {
                transitionProperty: "all",
                transitionDuration: "1s",
                transitionTimingFunction: "easeInOut"
            },
            css: {},
            haveTrans: false,
            className: "bar-number-no-trans",
            containerCss: {},
        };
        this.updateWidth = this.updateWidth.bind(this);
        this.removeTrans = this.removeTrans.bind(this)
    }

    componentDidMount() {
        var width = this.myBar.offsetWidth;
        var maxLength = this.state.maxLength;
        var scale = "scale(" + (width/maxLength)*0.94 + ")";
        var css = {
            transformOrigin: 'left top',
            transform: scale,
        }
        this.setState({ containerCss: css });

        window.addEventListener("resize", this.updateWidth);
        window.addEventListener("resize", this.removeTrans);

        // Verify values

        const values = this.props.values.slice();
        values[0] = Math.max(0, Math.min( values[0], 1 ));
        values[1] = Math.max(0, Math.min( values[1], 1-values[0] ));
        values[2] = Math.round(Math.max(0, Math.min( 1 - (values[0] + values[1]), 1 )) * 10000) / 10000;

        this.setState({
            lengths: values,
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.removeTrans);
        window.removeEventListener("resize", this.updateWidth);
    }

    componentWillReceiveProps(props) {
        if (!this.state.haveTrans) {
            this.addTrans();
        }
        const values = props.values.slice();
        values[0] = Math.max( 0, Math.min(1, values[0]) );
        values[1] = Math.max( 0, Math.min(1, values[1]) ); // Middle segment can't be zero or it will dissappear
        values[2] = Math.round(Math.max(0, Math.min(1,  1 - (values[0] + values[1]) )) * 10000) / 10000;
        this.setState({ lengths: values });
    }

    removeTrans() {
        this.setState({
            css: {},
            haveTrans: false,
            className: "bar-number-no-trans"
        });
    }

    addTrans() {
        this.setState({
            css: this.state.constCss,
            haveTrans: true,
            className: "bar-number"
        });
    }

    updateWidth() {
        var width = this.myBar.offsetWidth;
        var maxLength = this.state.maxLength;
        var scale = "scale(" + (width/maxLength)*0.94 + ")";
        var css = {
            transformOrigin: 'left top',
            transform: scale,
        }
        this.setState({ containerCss: css });
    }

    renderInput(i) {
        return (
            <label>
                Value {i+1}:
                <input className="form-input" type="number" name="values" id={i} value={this.state.values[i]} onChange={this.handleChange} step="0.1" disabled={(Number(i) === 2) ? true : false}/>
            </label>
        );
    }

    renderInfo(i) {
        // Convert values to percent first
        var percent = Math.round(this.state.lengths[i] * 1000)/10;
        var marker;
        if (Number(i) === 1) {
            marker = percent + "%\n|";
        } else {
            marker = "|\n" + percent + "%";
        }

        // Show in middle of Segment
        var padding = this.state.padding;
        var maxLength = this.state.maxLength-padding*2;
        var offset = -4;
        var left = 0;
        for (var n = 0; n < i; n++) {
            left += this.state.lengths[n];
            // offsetLeft -= offset;
            // offsetRight += offset;
        }
        if (Number(i) === 0) {
            offset += -4;
        } else if (Number(i) === 2) {
            offset += 4;
        }

        left = padding+offset + (left+(this.state.lengths[i]/2)) * (maxLength);
        var css = {
            left: left
        }

        var className = "bold " + ((Number(i)===1)?"top ":"bottom ") + ((this.state.lengths[i]<0.0001)?"hide ":"") + this.state.className;

        return (
            <span className={className} style={css}>{marker}</span>
        );
    }

    renderSegment(i) {
        // Set x origin of segment
        var x1 = 0;
        var padding = this.state.padding;
        var maxLength = this.state.maxLength-padding*2;
        for (var n = 0; n < i; n++) {
            x1 += this.state.lengths[n];
        }
        x1 = Math.max(0, x1*maxLength+padding);
        var translateX = "translate(" + x1 + ")";
        // Set strokeDasharray
        var strokeDasharray = [0, maxLength];
        strokeDasharray[0] = this.state.lengths[i] * maxLength;
        strokeDasharray[1] = (1-this.state.lengths[i]) * maxLength;
        return (
            <Segment
                x1={translateX}
                strokeDasharray={strokeDasharray}
                maxLength={maxLength}
                color={this.state.colors[i]}
                css={this.state.css}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="bar-container" ref={input => {this.myBar = input}} style={this.state.containerCss}>
                    <svg className="bar-svg" height="16px">
                        {this.renderSegment(0)}
                        {this.renderSegment(2)}
                        {this.renderSegment(1)} {/*Draw middle segment last*/}
                    </svg>
                    <div className="bar-info">
                        {this.renderInfo(0)}
                        {this.renderInfo(1)}
                        {this.renderInfo(2)}
                    </div>
                </div>
            </div>
        );
    }
}
