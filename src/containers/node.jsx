import React, { PropTypes } from 'react'

export default class Node extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
            icon: "add_circle_outline",
            className: "",
        };
    }

    toggleChildren() {
        if (!this.state.show) {
            this.setState({
                show: true,
                icon: "remove_circle_outline",
                className: "dropdown-active",
            });
        } else {
            this.setState({
                show: false,
                icon: "add_circle_outline",
                className: "",
            });
        }
    }

    render() {
        var renderChild = (this.props.node.type == "location" || this.props.node.type == "customer" || this.props.node.type == "multicountry");
        return (
            <div className="dropdown-div">
                <a onClick={() => {this.props.statistic(this.props.node)}}>{this.props.node.info.name}</a>
                {(renderChild && this.props.node.children.length > 0) && <i onClick={this.toggleChildren.bind(this)} className={this.state.className + " dropdown-button material-icons no-select no-drag cursor-pointer"}>{this.state.icon}</i>}
                {this.state.show && this.props.children}
            </div>
        );
    }
}
