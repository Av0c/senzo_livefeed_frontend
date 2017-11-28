import React from 'react';

class Segment extends React.Component {
    render() {
        return (
            <line className="segment" x1="9" x2={this.props.maxLength + 8} y1="8" y2="8" stroke={this.props.color} strokeWidth="16" strokeOpacity="1" strokeDasharray={this.props.strokeDasharray} transform={this.props.x1} style={this.props.CSS} />
        );
    }
}

export default class Bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maxLength: 330,
            padding: 60,
            lengths: [0, 0, 0],
            colors: ["#FFCA28", "#9CCC65", "#EF5350"],
            notice: "",
            constCss: {
                transitionProperty: "all",
                transitionDuration: "1s",
                transitionTimingFunction: "easeInOut"
            },
            CSS: {},
            haveTrans: false,
            className: "bar-number-no-trans"
        };
    }

    removeTrans() {
        this.setState({
            CSS: {},
            haveTrans: false,
            className: "bar-number-no-trans"
        });
    }

    addTrans() {
        this.setState({
            CSS: this.state.constCss,
            haveTrans: true,
            className: "bar-number"
        });
    }


    componentDidMount() {
        window.addEventListener("resize", () => this.removeTrans());

        // Verify values
        const values = this.props.values.slice();
        values[0] = Math.max(0, Math.min(values[0], 1));
        values[1] = Math.max(0, Math.min(values[1], 1 - values[0]));
        values[2] = Math.round(Math.max(0, Math.min(1 - (values[0] + values[1]), 1)) * 10000) / 10000;

        this.setState({
            lengths: values,
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", () => this.removeTrans());
    }

    componentWillReceiveProps(props) {
        if (!this.state.haveTrans) {
            this.addTrans();
        }

        const values = props.values.slice();
        values[0] = Math.max(0, Math.min(1, values[0])); // Middle segment can't be zero or it will dissappear
        values[1] = Math.max(0.0001, Math.min(1, values[1])); // Middle segment can't be zero or it will dissappear
        values[2] = Math.round(Math.max(0, Math.min(1, 1 - (values[0] + values[1]))) * 10000) / 10000;
        this.setState({ lengths: values });
    }

    renderInput(i) {
        return (
            <label>
                Value {i + 1}:
                <input className="form-input" type="number" name="values" id={i} value={this.state.values[i]} onChange={this.handleChange} step="0.1" disabled={(Number(i) === 2) ? true : false} />
            </label>
        );
    }

    renderInfo(i) {
        // Convert values to percent first
        var percent = Math.round(this.state.lengths[i] * 100);
        var marker;
        if (Number(i) === 1) {
            marker = percent + "%\n|";
        } else {
            marker = "|\n" + percent + "%";
        }

        // Show in middle of Segment
        var padding = this.state.padding;
        var maxLength = this.state.maxLength - padding * 2;
        var left = 0;
        for (var n = 0; n < i; n++) {
            left += this.state.lengths[n];
        }

        left = padding + ((left + this.state.lengths[i] / 2)) * (maxLength - 8);
        var css = {
            left: left
        }

        var className = "bold " + ((Number(i) === 1) ? "top " : "bottom ") + this.state.className;
        return (
            <span className={className} style={css}>{marker}</span>
        );
    }

    renderSegment(i) {
        // Set x origin of segment
        var x1 = 0;
        var padding = this.state.padding;
        var maxLength = this.state.maxLength - padding * 2;
        for (var n = 0; n < i; n++) {
            x1 += this.state.lengths[n];
        }
        x1 = Math.max(0, x1 * maxLength + padding);
        var translateX = "translate(" + x1 + ")";
        // Set strokeDasharray
        var strokeDasharray = [0, maxLength];
        strokeDasharray[0] = this.state.lengths[i] * maxLength;
        strokeDasharray[1] = (1 - this.state.lengths[i]) * maxLength;
        return (
            <Segment
                x1={translateX}
                strokeDasharray={strokeDasharray}
                maxLength={maxLength}
                color={this.state.colors[i]}
                CSS={this.state.CSS}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="bar-container">
                    <svg className="bar-svg" height="16px" width="100%">
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