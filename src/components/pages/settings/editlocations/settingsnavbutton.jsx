import React from 'react';
import { connect } from 'react-redux';
import {
  updateLocation,
  removeLocation,
  createLocation,
  createArea
  } from 'actions/editlocations';
import SettingsArea from './settingsarea';
import DeleteLocation from './deletelocation';
import DeleteArea from './deletearea';
import AddArea from './addarea';
import AddSubLocationElement from './addsublocationelement';
import LocationEditElement from './locationeditelement'

export class SettingsNavbutton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        active: false,
        areas:[],
        deletingArea:{},
        locationAddedSuccesfully:false,
        name:'',
        parentId:0,
        selected: false,
        showAreaEditForm: false,
        showLocationEditForm: false,
        showAddSublocation: false,
        showAddSensorArea: false,
        showDeleteLocation: false,
        updatedName:''
      }
    }

    componentDidMount(){
      if (this.props.step == 1) {
        this.setState({active: true})}
      this.setState({
        name: this.props.nodeName,
        parenetId: this.props.parentId,
        areas: this.props.areas
      });
    }

    changeHandler(e){
      let value = e.target.value;
      this.setState ({name : value});
    }

    confirmDeleteLocation(e){
      this.props.dispatch(removeLocation(this.props.nodeId));
    }
    cancelDeleteLocation(){
      this.setState({showDeleteLocation:false})
    }

    locationEditClicked(e){
      e.stopPropagation();
      this.setState({showLocationEditForm: true});
    }
    xButtonClicked(e){
      e.stopPropagation();
      this.setState({
        deletingLocationId:this.props.id,
        showDeleteLocation: true,
        showLocationEditForm: false,
        showAreaEditForm: false
      })
    }

    addSublocation(e){
      e.stopPropagation();
      this.setState({
        showAddSensorArea: false,
        showAddSublocation: !this.state.showAddSublocation
      })
    }
    addSensorArea(e){
      e.stopPropagation();
      this.setState({
        showAddSublocation: false,
        showAddSensorArea: !this.state.showAddSensorArea
      })
    }
    saveSubLocation(data,e){
      //type = create or update
      this.setState({updatedName: data.name});
      this.setState({name: data.name});
      let location = {
        id: this.props.nodeId,
        name: data.name,
        customerId:1,
        parentId:this.props.parentId
      }

      if (data.type == 'create') {
        this.props.dispatch(createLocation(location))
      }
      else if (data.type == 'update') {

        this.props.dispatch(updateLocation(location))

        this.setState({
          updatingLocation:true
        })
      }
      e.stopPropagation();
      this.setState({
        showAddSublocation: false,
        showAddSensorArea: false,
        showLocationEditForm: false
      })
    }

    saveSubSensorArea(data, e){
      this.setState({updatedName:data.name});
      let areaType = data.areaType;
      let isMeetingRoom ;
      if (areaType == 'meeting-room'){
        isMeetingRoom = 1;
      } else {
        isMeetingRoom = 0;
      }
      let area = {
        name: data.name,
        customerId:1,
        siteId:this.props.nodeId,
        isMeetingRoom:isMeetingRoom
      }
      this.props.dispatch(createArea(area))
      e.stopPropagation();

      this.setState({
        showAddSublocation: false,
        showAddSensorArea: false,
        showLocationEditForm: false,
        addingArea:true
      })
    }

    cancelSensorAreaAdd(){
      this.setState({showAddSensorArea:false})
    }
    click(e) {
      e.stopPropagation();
      let nextState = !this.state.active;
      this.setState({active: nextState});
    }
    delete(e){
      e.stopPropagation();
      //call server
      //remove the element from the ui
      //hide delete element
      this.setState({showDeleteLocation: false})
    }
    moveClicked(e){
      e.stopPropagation();
    }
    cancelLocationEdit(){
      this.setState({showLocationEditForm: false})
    }
    cancelSubLocation(){
      this.setState({showAddSublocation: false})
    }

    render() {
      let active = !this.state.active ? 'closed' : '' ;
      let selected = this.props.selectedId == this.props.nodeId ? 'selected' : '' ;
      var ulClasses = 'settings-nav-ul' + ' ' + active + ' ' + selected ;

      if (this.props.initialMode) {
        if (this.props.step == 1){
          ulClasses = 'nav-ul'
        }
        else {
          ulClasses = 'nav-ul closed'
          this.state.active = false;
        }
      }

      let iconElement;
      if (this.state.active){
        iconElement = <span className='settings-minus'></span>;
      }
      else {
        iconElement = <span className='settings-plus'></span>;
      }
      let addSubLocationIconElement;
      if (this.state.showAddSublocation){
        addSubLocationIconElement = <span style={{color:'#5473fb', fontSize:'16px'}}>- &nbsp;</span>;
      }
      else {
        addSubLocationIconElement = <span style={{color:'#2FCE84', fontSize:'16px'}}>+ &nbsp;</span>;
      }
      let addAreaIconElement;
      if (this.state.showAddSensorArea){
        addAreaIconElement = <span style={{color:'#5473fb', fontSize:'16px'}}>- &nbsp;</span>;
      }
      else {
        addAreaIconElement = <span style={{color:'#2FCE84', fontSize:'16px'}}>+ &nbsp;</span>;
      }

      var paddingValue = (this.props.step-1)*25;
      let style = {
        paddingLeft: paddingValue,
        display: 'flex'
      }

      let editElement = '';

      if (this.state.showLocationEditForm){
        editElement =
        <LocationEditElement changeHandler={this.changeHandler.bind(this)}
          name={this.state.name} saveSubLocation={this.saveSubLocation.bind(this)}
          type={'update'} cancelLocationEdit={this.cancelLocationEdit.bind(this)}>
        </LocationEditElement>
      }

      let addSubLocationContainerElement = '';
      if (this.state.active){
        if (this.props.step == 1){
          addSubLocationContainerElement =
          <li className="settings-nav-li-edit">
            <br></br>
              <div style={style} onClick={this.addSublocation.bind(this)}>
                {addSubLocationIconElement}
                <span className='bold'>Add</span>
                <span>&nbsp; SubLocation</span>
              </div>
             <br></br>
          </li>
        } else {
          addSubLocationContainerElement =
          <li className="settings-nav-li-edit">
            <br></br>
              <div style={style} onClick={this.addSublocation.bind(this)}>
                {addSubLocationIconElement}
                <span className='bold'>Add</span>
                <span>&nbsp; SubLocation</span>
              </div>
              <div style={style} onClick={this.addSensorArea.bind(this)}>
                {addAreaIconElement}
                <span className='bold'>Add</span>
                <span>&nbsp; Sensor Area</span>
                </div>
             <br></br>
          </li>
        }

      }

      let addSublocationElement = '';
      if (this.state.showAddSublocation){
        addSublocationElement =
        <AddSubLocationElement changeHandler={this.changeHandler.bind(this)}
          saveSubLocation={this.saveSubLocation.bind(this)}
          cancelSubLocation={this.cancelSubLocation.bind(this)}
          type={'create'}></AddSubLocationElement>
      }
      let addAreaElement = '';
      if (this.state.showAddSensorArea){
        addAreaElement =
        <AddArea saveSubSensorArea={this.saveSubSensorArea.bind(this)}
          cancelSensorAreaAdd={this.cancelSensorAreaAdd.bind(this)}
          value={this.state.areaType}>
        </AddArea>
      }
      let deleteElement = '';
      if (this.state.showDeleteLocation){
        deleteElement =
        <DeleteLocation nodeName={this.props.nodeName}
          confirmDeleteLocation={this.confirmDeleteLocation.bind(this)}
          cancelDeleteLocation={this.cancelDeleteLocation.bind(this)}>
        </DeleteLocation>
      }
      if (this.state.showDeleteArea){
        deleteElement =
        <DeleteArea area={this.state.deletingArea}
          cancelDeleteArea={this.cancelDeleteArea.bind(this)}
          confirmDeleteArea={this.confirmDeleteArea.bind(this)}>
        </DeleteArea>
      }


      return <ul className={ulClasses} >
        <li className="settings-nav-li" style={style} onClick={this.click.bind(this)}>
          {iconElement}{this.state.name}
          <div className='settings-edit-delete' style={{flex:1, marginTop:'-1em'}}>
            <span className='settings-editdelete-move' style={{color:'#243755'}}
              onClick={this.moveClicked.bind(this)}>MOVE UP/DOWN</span>
            <span className='settings-editdelete-edit'
              onClick={this.locationEditClicked.bind(this)}>EDIT</span>
            <span className='settings-editdelete-delete'
               onClick={this.xButtonClicked.bind(this)}>X</span>
          </div>
        </li>
        {deleteElement}
        {editElement}
        {addSubLocationContainerElement}
        {addSublocationElement}
        {addAreaElement}
        {
          this.state.areas? this.state.areas.map( (area) => {
            return <SettingsArea key={area.id} area={area} step={this.props.step}
              ref={area.id} name={area.name}
              isMeetingRoom={area.isMeetingRoom}
              moveClicked={this.moveClicked.bind(this)}
              siteId={this.props.nodeId}>
            </SettingsArea>
          }): ''
        }
        {this.props.children}
      </ul>
    }
}

function mapStateToProps(state){
  return {
    editLocations: state.editLocationsReducer
  }
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SettingsNavbutton);
