import React, { PropTypes } from 'react'

export default class Node extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = { show: false };
    }

    openChildren() {
        if (!this.state.show) {
            this.setState({ show: true });
        }
    }

   render() {
      return (
         <li onMouseOver={this.openChildren.bind(this)} ><a onClick={() => {this.props.statistic(this.props.node)}}>{this.props.node.info.name}</a>
            { this.state.show && this.props.children}
         </li>
      );
   }
}