import React from 'react';
import {connect} from 'react-redux';
import SettingsNavigation from './settingsnavigation';
import SettingsNavbutton from './settingsnavbutton'
import {fetchCustomerOrganization} from 'actions/organization';
import {
  uiUpdateCompleted,
  updateLocation
}
  from 'actions/editlocations';

export default class Index extends React.Component {
  constructor() {
    super();
    this.displayName = 'EditLocations'
    this.state = {displayNewLocation: false, locationName:'',
      locationAddedSuccesfully:false, addedLocations:[], addingLocation:false,
    organization:{}}
  }

  componentDidMount() {
    this.props.dispatch(fetchCustomerOrganization())
  }

  componentWillReceiveProps(nextProps) {
    let addedLocation = '';
    this.setState({organization:nextProps.organization})

    if (nextProps.editLocations.updatedOrganization.data != 'none'){
      this.setState({organization:nextProps.editLocations.updatedOrganization})
    }

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

    let newLocationElement = '';
    let addIconElement = <span onClick={this.displayNewLocation.bind(this)}
       style={{color:'#2FCE84', fontSize:'16px'}}>+ &nbsp;</span>;
    if (this.state.displayNewLocation){
      addIconElement = <span onClick={this.displayNewLocation.bind(this)}
        style={{color:'#5473fb', fontSize:'16px'}}>- &nbsp;</span>;
      newLocationElement =
      <div style={{display:'flex'}}>
        <label htmlFor='locationName'>Name</label>
        <input type='text' name='locationName' id='locationName'
          style={{flex:4}} value={this.state.locationName}
          onChange={this.handleChange.bind(this)}></input>
        <div className='edit-locations-textbutton' style={{fontSize:'12px', color:'#2FCE84'}}
          onClick={this.saveNewLocation.bind(this)} >SAVE CHANGES</div>
        <br></br>
      </div>
    }
    let addArea;
    !this.props.organization[0] ?
    addArea = <div>
      <div className="settings-row">
        <div className='settings-username-text' style={{flex:2}}>
          {addIconElement}
          <span onClick={this.displayNewLocation.bind(this)}>Add new Locations</span>
        </div>
      </div>
      <div className='settings-line'></div>
      {newLocationElement}
      <div style={{marginLeft: '2em', display:'none'}}><span className='bold'>
        &rarr; Add </span>Sub-Location</div>
      <div style={{marginLeft: '2em', display:'none'}}><span className='bold'>
        &rarr; Add </span>Sensor Area</div>
      <br></br>
    </div>
    : addArea = ''

    return (
      <div className='settings-container'>
        <div className='settings-title'>Edit Locations</div>
        <div className='settings-line'></div>
        <div className='settings-text'> Navigate through the locations, and areas. </div>
        <div className='settings-line'></div>
        {/* list of the locations */}
        <SettingsNavigation organization={this.props.organization}/>
        {this.state.addedLocations.map(function(addedLocation){
          return addedLocation;
        })}
        <br></br>
        {addArea}
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

export default connect(mapStateToProps, mapDispatchToProps)(Index);
