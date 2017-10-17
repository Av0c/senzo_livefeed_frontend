import React from 'react';
import {connect} from 'react-redux';
import SettingsNavigation from './settingsnavigation';
import {fetchCustomerOrganization} from 'actions/organization';

export default class EditLocations extends React.Component {
  constructor() {
    super();
    this.displayName = 'EditLocations'
  }

  componentDidMount() {
    this.props.dispatch(fetchCustomerOrganization())
  }
  componentWillReceiveProps() {
  }


  render() {
    
    return (
      <div className='settings-container'>
        <div className='settings-title'>Edit Sensors</div>
        <div className='settings-line'></div>
        <div className='settings-text'>Navigate through the sensors, and replace them if needed.</div>
        <div className='settings-line'></div>
        {/* list of the locations */}
        <SettingsNavigation organization={this.props.organization} />
        <br></br>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    organization: state.organizationReducer.organization
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditLocations);
