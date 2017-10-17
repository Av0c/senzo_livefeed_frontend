import React from 'react';
import {Link} from 'react-router';

export default class SettingsNavButton extends React.Component {

  render() {
    return (
      <Link className="nav-li"  to={this.props.path} activeClassName="selected">
        <div className="link" >
          <div>
            {this.props.children}
          </div>
        </div>
      </Link>
    );
  }

}
