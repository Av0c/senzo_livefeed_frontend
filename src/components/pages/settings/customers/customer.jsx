import React from 'react';
import { Link } from 'react-router';

export default class Customer extends React.Component {
  render() {
    return (
      <div className="settings-row-element">
        <div className="left">
          <div>{this.props.customer.name}</div>
        </div>
        <div className="right">
          <div>
            <Link className="link" to={`/settings/customers/edit/${this.props.customer.id}`}>edit</Link>
          </div>
        </div>
      </div>
    )
  }

}