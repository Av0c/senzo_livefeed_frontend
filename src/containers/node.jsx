import React, { PropTypes } from 'react'

export default class Node extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
            symbol: "+",
            className: "dropdown-button",
        };
    }

    toggleChildren() {
        if (!this.state.show) {
            this.setState({
                show: true,
                symbol: "-",
                className: "dropdown-button dropdown-active",
            });
        } else {
            this.setState({
                show: false,
                symbol: "+",
                className: "dropdown-button",
            });
        }
    }

    render() {
        return (
            <div className="dropdown-div">
                <a onClick={() => {this.props.statistic(this.props.node)}}>{this.props.node.info.name}</a>
                {(this.props.node.type == "location" && this.props.node.children.length > 0) && <button onClick={this.toggleChildren.bind(this)} className={this.state.className}>{this.state.symbol}</button>}
                {this.state.show && this.props.children}
            </div>
        );
    }
}
