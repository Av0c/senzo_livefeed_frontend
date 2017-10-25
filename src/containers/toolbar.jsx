import React from 'react'
import { Link } from 'react-router';

export default class Toolbar extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-4">
            <div className="location-block clearfix">
              <div className="location-icon pull-left"><img src="src/assets/images/location-icon.svg" alt="Location"/></div>
              <div className="location-name pull-left"><span>Microsoft </span></div>
            </div>
          </div>
          <div className="col-xs-4">
            <div className="header-logo"><img src="src/assets/images/header-logo.svg" alt="SenzoLive"/></div>
          </div>
          <div className="col-xs-4">
            <div className="user-block">
              <div className="user-icon pull-right"><img src="src/assets/images/user-settings.svg" alt="Settings"/></div>
              <div className="user-name pull-right"><span>John Doe</span></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
