import React from 'react';
import SettingsNavbutton from './settingsnavbutton';

export default class SettingsNavigation extends React.Component {

  constructor(props) {
    super(props);
    var step = 0;
    this.state = {
      step: step,
      initialMode : false,
      showEdit: false,
      itemSelected: -1
    }
  }

  render () {
    let rootNode = this.props.organization[0] ||
      {
        children: []
      }
    return (
      <div>
        {this.traverse(rootNode)}
      </div>
    )
  }

  traverse(node, step=0) {
    step ++;
    var initialMode = false;
    if (this.state.initialMode){
      initialMode = true;
    }
    let rootId = 0;
    if (this.props.organization[0]){
      rootId = this.props.organization[0].id;
    }
    return (
      <SettingsNavbutton key={node.id} children={node.children} step={step}
        nodeId={node.id} selectedId={this.props.selectedId}
        initialMode={initialMode} nodeName={node.name} parentId={node.parent}
        rootId={rootId} areas={node.areas} itemSelected={this.state.itemSelected}>
        {node.children.map( child => {
          return this.traverse(child, step);
        })}

      </SettingsNavbutton>
    )
  }
}
