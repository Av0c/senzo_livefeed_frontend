import React from 'react'
import { Link } from 'react-router';

export default class Toolbar extends React.Component {

  render() {
    return (
      <div className="toolbar">
          <div className="logo">
          </div>
        <div className="tools">
          <div className="navigation">
            <Link className="link" to="" activeClassName="selected">{this.props.companyName} OVERVIEW</Link>
            <Link className="link" to="locations" activeClassName="selected">LOCATIONS</Link>
            {/*DYNAMIC NAVIGATION BREADCRUMBS HERE*/}
          </div>
          <div className="static">
            <div className="link">Help</div>
            <Link className="link" to="/settings">Settings</Link>
            <div className="link closed " >Hi, {this.props.user.username}
              <ul className='submenu-container'>
                <li className="submenu-item"><a className="link" onClick={this.props.actions.logout} href="javascript:void(0);">Log out</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
