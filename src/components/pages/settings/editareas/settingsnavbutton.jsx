import React from 'react';
import { connect } from 'react-redux';
import {createLocation, createArea, uiUpdateCompleted,
  updateLocation, updateArea, removeLocation} from 'actions/editlocations';
import SettingsArea from './settingsarea';

export class SettingsNavbutton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        active: false,
        addedAreas:[],
        addedLocations:[],
        addingArea: false,
        addingSublocation: false,
        areaType:'',
        areas:[],
        editedArea:undefined,
        editId:0,
        isMeetingRoom: 1,
        locationAddedSuccesfully:false,
        name:'',
        parentId:0,
        selected: false,
        showAreaEditForm: false,
        showLocationEditForm: false,
        showAddSublocation: false,
        showAddSensorArea: false,
        showDeleteArea: false,
        updatedAreaType:'',
        updatedName:'',
        updatingArea: false,
        updatingLocation: false,

      }
    }
    componentDidMount(){
      this.props.step == 0 ? this.setState
      ({
        selected: true, showAreaEditForm: false,
        showLocationEditForm: false
      })
      : this.setState({
        selected: false,
        showAreaEditForm: false,
        showLocationEditForm: false
      });
      this.props.step < 2 ? this.setState({
        active: true,
        showAreaEditForm: false,
        showLocationEditForm: false,
        parenetId: this.props.parentId})
      :this.setState({
        active: false,
        showAreaEditForm: false,
        showLocationEditForm: false
      });
      this.setState({
        name: this.props.nodeName,
        parenetId: this.props.parentId,
        areas: this.props.areas
      });
    }

    componentWillReceiveProps(nextProps) {
    }

    changeHandler(e){
      let value = e.target.value;
      this.setState ({name : value});
    }

    confirmDeleteLocation(e){
      console.log('confirm delete')
      this.props.dispatch(removeLocation(this.props.nodeId));
    }

    areaEditClicked(data,e){
      e.stopPropagation();
      this.setState({
        editedArea:data.object,
        showLocationEditForm: false,
        showAreaEditForm: true,
        updatedName: data.name,
        areaType: data.areaType,
        editId: data.id
      })
    }

    locationEditClicked(e){
      e.stopPropagation();
      this.setState({showLocationEditForm: true});
    }
    xButtonClicked(e){
      e.stopPropagation();
      this.setState({
        deletingLocationId:this.props.id,
        showDeleteArea: true,
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
    updateArea(data,e){
      e.stopPropagation();
      this.setState({
        showEditForm: false,
        updatingArea: true
      })

      let areaType = data.areatype;
      let isMeetingRoom ;
      if (areaType == 'meeting-room'){
        isMeetingRoom = 1;
      } else {
        isMeetingRoom = 0;
      }
      this.setState({
        updatedName:data.name,
        updatedAreaType:isMeetingRoom
      });
      let area = {
        name: data.name,
        customerId: 1,
        id: data.id,
        isMeetingRoom: isMeetingRoom
      }

      this.props.dispatch(updateArea(area))
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
        this.setState({
          addingSublocation:true
        })
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

    click(e) {
      e.stopPropagation();
      let nextState = !this.state.active;
      this.setState({active: nextState});
    }
    delete(e){
      console.log('delete called');
      e.stopPropagation();
      //call server
      //remove the element from the ui
      //hide delete element
      this.setState({showDeleteArea: false})
    }
    moveClicked(e){
      e.stopPropagation();
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



      var paddingValue = (this.props.step-1)*25;
      let style = {
        paddingLeft: paddingValue,
        display: 'flex'
      }


      return <ul className={ulClasses} >
        <li className="settings-nav-li" style={style} onClick={this.click.bind(this)}>
          {iconElement}{this.state.name}
          <div className='settings-edit-delete' style={{flex:1, marginTop:'-1em'}}>
          </div>
        </li>

        {
          this.state.areas? this.state.areas.map( (area) => {
            return <SettingsArea key={area.id} area={area} step={this.props.step}
              ref={area.id} name={area.name}
              isMeetingRoom={area.isMeetingRoom}
              moveClicked={this.moveClicked.bind(this)}
              areaEditClicked={this.areaEditClicked.bind(this)}
              xButtonClicked={this.xButtonClicked.bind(this)}>
            </SettingsArea>
          }): ''
        }

        {this.state.addedLocations.map( (node, idx) => {
          return <SettingsNavbutton key={idx} step={node.step}
                  nodeId={idx} selectedId={node.selectedId}
                  initialMode={false} nodeName={node.nodeName}>
                </SettingsNavbutton>
        })}
        {this.state.addedAreas.map( (node, idx) => {
          //todo: change the key to the actual id
          return <SettingsArea key={idx} area={node} step={this.props.step}
            moveClicked={this.moveClicked.bind(this)}
            areaEditClicked={this.areaEditClicked.bind(this)}
            xButtonClicked={this.xButtonClicked.bind(this)}>
          </SettingsArea>

        })}
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
