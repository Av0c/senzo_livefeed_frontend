import React from 'react'
import { Link } from 'react-router';
import Tree from 'containers/tree';

export default class Toolbar extends React.Component {

  componentWillMount(){

  }

  render() {
    return (
      <div style={{ width: '100%', backgroundColor: 'white', paddingBottom: '15px' }} className="container-fluid">
        <div className="row">
          <div className="col-xs-4">
            <div className="location-block clearfix">
              <div className="location-icon pull-left"><img src="src/assets/images/location-icon.svg" alt="Location" /></div>
              <div className="location-name pull-left"><span>{this.props.companyName}</span></div>
              <div style={{ marginTop: '17px' }} className="location-dropdown-root" >
              <Tree tree={this.props.tree} />
              </div>
            </div>
          </div>
          <div className="col-xs-4">
            <div className="header-logo"><img src="src/assets/images/header-logo.svg" alt="SenzoLive" /></div>
          </div>
          <div className="col-xs-4">
            <div className="user-block">
              <div className="user-icon pull-right"><img src="src/assets/images/user-settings.svg" alt="Settings" /></div>
              <div className="user-name pull-right"><span>{this.props.user.username}</span></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
