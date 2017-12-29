import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchCustomerOverview } from 'actions/overview';
import Tree from 'containers/tree';
import { fetchLiveData } from 'actions/node';

export class Toolbar extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCustomerOverview(this.props.user.rootnodeid));
  }

  render() {
    console.log("USER", this.props.user)
    return (
      <div style={{ width: '100%', backgroundColor: 'white', paddingBottom: '15px' }} className="container-fluid">
        <div className="row">
          <div className="col-xs-4" style={{ zIndex: '1007' }}>
            <div className="location-block clearfix">
              <div className="location-icon pull-left"><img src="src/assets/images/location-icon.svg" alt="Location" /></div>
              <div className="location-name pull-left"><span>{this.props.companyName}</span></div>
              <div style={{ marginTop: '17px' }} className="location-dropdown-root">
                <Tree tree={this.props.tree} statistic={this.props.statistic} />
              </div>
            </div>
          </div>
          <div className="col-xs-4">
            <div className="header-logo"><Link to="/"><img src="src/assets/images/header-logo.svg" alt="SenzoLive" /></Link></div>
          </div>
          <div className="col-xs-4">
            <div className="user-block">
              <div className="user-icon pull-right"><img src="src/assets/images/user-settings.svg" alt="Settings" /></div>
              <div className="user-name pull-right"><span>{this.props.user.firstname+" "+this.props.user.lastname}</span></div>
              <div className="settings-dropdown-root">
                <ul>
                  <li><Link to="/settings/ownaccount">Own Account</Link></li>
                  <li><Link to="/user">{ (this.props.user.role == "ADMIN") ? "User Administration" : "Contact" }</Link></li>
                  {
                    (this.props.user.role == "ADMIN") ? [
                      <li key="0"><Link to="locations">Locations Settings</Link></li>,
                      <li key="1"><Link to="/settings/sensor">Sensor Settings</Link></li>,
                      <li key="2"><Link to="/api">Live Feed/SenzoAPI</Link></li>,
                      <li key="3"><Link to="/settings/default">Default Settings</Link></li>
                    ]
                    : null
                  }
                  <li><Link to="/help">Help !</Link></li>
                  <li><a href="#" onClick={this.props.actions.logout}>Log Out</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.authReducer.user,
    currentSensor: state.nodeReducer.map
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
