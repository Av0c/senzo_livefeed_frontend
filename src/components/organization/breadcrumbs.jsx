import React from 'react';
import OrganizationActions from 'actions/organization';

export default class Breadcrumbs extends React.Component {

  render() {
    let stack = this.props.stack;

    var links = stack.map( e => {
      return <span key={e.id} onClick={this.props.onBreadcrumbClick.bind(this, e.id)}>{e.name}</span>
    });

    return (
      <div className="breadcrumbs">
        {links}
      </div>
    )

  }


}