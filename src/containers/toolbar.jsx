import React from 'react'
import { Link } from 'react-router';

export default class Toolbar extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      choosing: true
    };
  }

  renderLocation(event){
    event.preventDefault();
    console.log("clicked");
    this.setState({choosing: !this.state.choosing});
  }

  render() {

    let choose = this.state.choosing ? 'block' : '';
    console.log(choose);
    return (
      <div style={{ width: '100%', backgroundColor: 'white', paddingBottom: '15px' }} className="container-fluid">
        <div className="row">
          <div className="col-xs-4">
            <div className="location-block clearfix">
              <div onClick={this.renderLocation.bind(this)} className="location-icon pull-left"><img src="src/assets/images/location-icon.svg" alt="Location" /></div>
              <div onClick={this.renderLocation.bind(this)} className="location-name pull-left"><span>{this.props.companyName}</span></div>
              <div className={"location-dropdown-root " +choose}>
                <ul>
                  <li><a href="#">Manchester</a></li>
                  <li><a href="#">Glasgow  </a>
                    <ul>
                      <li><a className="all-item" href="#">All Locations</a></li>
                      <li><a href="#">Office 1</a>
                        <ul>
                          <li><a className="all-item" href="#">All Locations</a></li>
                          <li> <a href="#">Department 1</a></li>
                          <li><a href="#">Department 2    </a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
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
