import React from 'react';
import { connect } from 'react-redux';
import SettingsNavButton from 'components/common/settingsnavbutton'
class Settings extends React.Component {

  render (){

    return (
      <div className="settings">
        <div className="content-left">
          <div className="navigation">
            <div className="settings-disabled-title"> SETTINGS </div>
            <SettingsNavButton path="/settings/myaccount">
               MY ACCOUNT
            </SettingsNavButton>
            <SettingsNavButton path="/settings/locations/edit">
              EDIT LOCATIONS
            </SettingsNavButton >
            <SettingsNavButton path="/settings/areas/edit">
               EDIT AREAS
            </SettingsNavButton>
            <SettingsNavButton path="/settings/sensors/edit">
                EDIT SENSORS
            </SettingsNavButton>
            <SettingsNavButton path="/settings/users/">
               EDIT USERS
            </SettingsNavButton>
          </div>
        </div>

        <div className="content-right">
            {this.props.children}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    locations: state.locationsReducer,
    utilization: state.utilizationReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
