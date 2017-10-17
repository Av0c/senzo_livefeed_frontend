import React from 'react'


export default class Site extends React.Component {
  render() {
    let site = this.props.site;
    return (
      <div key={site.id} className="site">
        <div className="header">{site.name}</div>
        <div className="body">
          {this.renderChildren()}
        </div>
      </div>
    )
  }

  renderChildren(child) {
    return this.props.site.children.map( child => {
      return this.recursiveRenderChildren(child)
    })
  }

  recursiveRenderChildren(child) {
    var children = child.children.map(grandChild => {
      return this.recursiveRenderChildren(grandChild)
    });
    return (
      <ul key={child.id}>
        <li onClick={this.selectOrganization.bind(this, child.id)}>{child.name}</li>
        {children}
      </ul>
    )
  }

  selectOrganization(id) {
    this.props.onSiteClick(id);
  }

}