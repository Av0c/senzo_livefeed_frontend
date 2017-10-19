import React from 'react';
import {connect} from 'react-redux';
import SettingsNavigation from './settingsnavigation';
import SettingsNavbutton from './settingsnavbutton'
import {fetchCustomerOrganization} from 'actions/organization';
import {updateLocation, uiUpdateCompleted} from 'actions/editlocations';

export class EditLocations extends React.Component {
  constructor() {
    super();
    this.displayName = 'EditAreas'
    this.state = {displayNewLocation: false, locationName:'',
      locationAddedSuccesfully:false, addedLocations:[], addingLocation:false}
  }

  componentDidMount() {
    this.props.dispatch(fetchCustomerOrganization())
  }
  componentWillReceiveProps(nextProps) {
    let addedLocation = '';
    if (nextProps.editLocations.newLocationAdded && this.state.addingLocation){
      let rootId = 0;
      if (this.props.organization[0]){
        rootId = this.props.organization[0].id;
      }
      //to do: set the key and id on the server
      addedLocation =
        <SettingsNavbutton key={100} step={1}
          nodeId={100} selectedId={this.props.selectedId}
          initialMode={false} nodeName={this.state.locationName}
          rootId={rootId} >
        </SettingsNavbutton>
      let currentAddedLocations = this.state.addedLocations;
      currentAddedLocations.push(addedLocation);
      this.setState({addedLocations: currentAddedLocations,
      addingLocation:false});
      this.props.dispatch(uiUpdateCompleted());
    }
  }

  handleChange(e){
    let key = e.target.id;
    let value = e.target.value;
    this.setState ({[key] : value});
  }
  displayNewLocation(){
    this.setState({displayNewLocation: !this.state.displayNewLocation})
  }
  saveNewLocation(){
    let site = {
      name: this.state.locationName,
      customerId:1,
      parentId:null
    }
    this.props.dispatch(updateLocation(site));
    this.setState({locationAddedSuccesfully: true
    ,addingLocation:true});

    this.hideNewLocation();
  }
  hideNewLocation(){
    this.setState({displayNewLocation: false})
  }

  render() {

    return (
      <div className='settings-container'>
        <div className='settings-title'>Edit Areas</div>
        <div className='settings-line'></div>
        <div className='settings-text'>Navigate through the areas and upload the floorplans. </div>
        <div className='settings-line'></div>
        {/* list of the locations */}
        <SettingsNavigation organization={this.props.organization} />
        {this.state.addedLocations.map(function(addedLocation){
          return addedLocation;
        })}
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    organization: state.organizationReducer.organization,
    utilization: state.utilizationReducer,
    editLocations: state.editLocationsReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditLocations);
