import React from 'react';
import Navbutton from './navbutton';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {selectLocation, selectSite} from 'actions/organization';

class Navigation extends React.Component {

  render () {
    let rootNode = this.props.state.organization[0] ||
      {
        children: [],
        areas: []
      };
    return this.traverse(rootNode)
  }

  traverse(node, step = 0) {
    step ++;

    let actions = {
      selectSite: this.props.selectSite,
      selectLocation: this.props.selectLocation
    };

    return (
      <Navbutton key={node.id} node={node} step={step}
                 actions={actions}
                 selectedSite={this.props.state.selectedSite}
                 selectedArea={this.props.state.selectedArea}
                 breadcrumbs={this.props.state.breadcrumbs}>
        {
          node.children.map( child => {
            return this.traverse(child, step);
          })
        }
      </Navbutton>
    )
  }
}

function mapStateToProps(state){
  return {
    state: state.organizationReducer
  }

}

function mapDispatchToProps(dispatch) {
  return {
    selectLocation: (node) => dispatch(selectLocation(node)),
    selectSite: (node) => dispatch(selectSite(node))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
