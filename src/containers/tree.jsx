import React, { PropTypes } from 'react'
import { Link } from 'react-router';

export default class Tree extends React.Component {

    render() {
        var childNodes;
        var style = {};    
        if (this.props.tree.children != null && this.props.tree.type!='meeting_room' && this.props.tree.type!='open_area') {
            if(this.props.tree.children.length >7){
                style ={
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    maxHeight: '200px'
                };
            }
            console.log(style);
            childNodes = this.props.tree.children.map(function(node, index) {
                return <li key={index}><a href="#">{node.info.name}</a><Tree tree={node} /></li>
            });
        }
        return (
            <ul style={style}> 
                {childNodes}
            </ul>
        );
    }
}