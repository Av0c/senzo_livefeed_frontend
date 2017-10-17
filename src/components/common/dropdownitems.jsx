import React from 'react';

export default class DropdownItems extends React.Component {

  render () {
    return (
      <div onClick={this.props.close}>
        {this.props.children}
      </div>
    )
  }
}
