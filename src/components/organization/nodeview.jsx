import React from 'react';
import Summary from './summary';


export default class NodeView extends React.Component {

  render() {
    let {organizationData, summaryData} = this.props.data;
    return (
      <div>
        <div className="page-body">
          <div className="sites">
            {this.renderSites(organizationData)}
          </div>
          <Summary summary={summaryData} node={organizationData.currentNode} />
        </div>
      </div>
    )
  }

  renderSites(organizationData) {
    return organizationData.currentNode.children.map( child => {
      return this.recursiveRenderChildren(child)
    })
  }

  recursiveRenderChildren(child) {
    var children = child.children.map(child => {
      return (
          <tr  key={child.id}>
            <td>
              {child.name} 10%
            </td>
          </tr>
      );
      //return this.recursiveRenderChildren(grandChild)
    });
    var areas = child.areas.map(area => {
      return <span key={area.id}>{area.name}</span>
    });
    return (
      <table> className="site-box" key={child.id} onClick={this.selectOrganization.bind(this, child.id)}>
        <tr>
          <th>{child.name}</th>
        </tr>
          {children}
      </table>
    )
  }
  selectOrganization(id) {
    this.props.onSiteClick(id);
  }

}