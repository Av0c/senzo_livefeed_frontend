import React, { PropTypes } from 'react'
import { Link } from 'react-router';
import Node from 'containers/node'

export default class Tree extends React.Component {

    render() {
        var childNodes;
        var style = {};
        var self = this;    
        if (this.props.tree.children != null && this.props.tree.type!='meeting_room' && this.props.tree.type!='open_area') {
            if(this.props.tree.children.length >7){
                style ={
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    maxHeight: '200px'
                };
            }
            childNodes = this.props.tree.children.map(function(node, index) {
                return <Node node={node} key={index} statistic={self.props.statistic.bind(self)}><Tree statistic={self.props.statistic.bind(self)} tree={node} /></Node>
            });
        }
        return (
            <ul style={style}> 
                {childNodes}
            </ul>
        );
    }
}