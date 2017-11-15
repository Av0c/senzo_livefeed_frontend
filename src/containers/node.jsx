import React, { PropTypes } from 'react'

export default class Node extends React.Component {

   render() {
       console.log(this.props);
      return (
         <li><a onClick={() => {this.props.statistic(this.props.node)}}>{this.props.node.info.name}</a>
            {this.props.children}
         </li>
      );
   }
}