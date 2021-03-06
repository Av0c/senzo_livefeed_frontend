import React from 'react';

export default class DropdownItem extends React.Component {

  render () {
    let className = 'dropdown-item';
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}
