import React from 'react';

export default class DropdownItem extends React.Component {

  render () {
    return (
      <div className="dropdown-item">
        {this.props.children}
      </div>
    )
  }
}
