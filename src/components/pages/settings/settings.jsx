import React from 'react';
import { connect } from 'react-redux';
import SettingsNavButton from 'components/common/settingsnavbutton'
class Settings extends React.Component {

  render (){

    return (
      <div className="settings">
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
