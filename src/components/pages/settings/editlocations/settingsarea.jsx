import React from 'react';
import { connect } from 'react-redux';
import AreaEditElement from './areaeditelement';
import DeleteArea from './deletearea';
import { removeArea } from 'actions/editlocations';

export default class SettingsArea extends React.Component {
  constructor(props) {
    super(props);
    let updatedAreaType = '';
    if (props.isMeetingRoom == true ){
      updatedAreaType = 'meeting-room'
    } else {
      updatedAreaType = 'desk-area'
    }
    this.state = {
      showDeleteArea: false,
      showLocationEditForm: false,
      showAreaEditForm: false,
      updatedAreaType:updatedAreaType,
      updatedName:this.props.name
    }
  }
  
  cancelDeleteArea(){
    this.setState({showDeleteArea: false })
  }

  xButtonAreaClicked(e){
    e.stopPropagation();
    this.setState({
      showDeleteArea: true,
      showAreaEditForm: false
    })
  }
  confirmDeleteArea(){
    this.props.dispatch(removeArea(this.props.area.id));
  }

  areaEditClicked(e){
    this.setState({
      showAreaEditForm: true,
      showDeleteArea: false
    })
  }
  cancelEditArea(){
    this.setState({
      showAreaEditForm: false
    })
  }

  render () {
    let paddingValue = (this.props.step)*25;
    let style = {
      paddingLeft: paddingValue
    }

    let area = this.props.area;
    let areaType;
    if (area.isMeetingRoom == true){
      areaType='meeting-room';
    } else {
      areaType='desk-area';
    }
    let data = {
      name: this.props.name,
      areaType: areaType,
      id: area.id,
      object: this
    }
    let deleteElement = '';
    if (this.state.showDeleteArea){
      deleteElement =
      <DeleteArea area={this.props.area}
        cancelDeleteArea={this.cancelDeleteArea.bind(this)}
        confirmDeleteArea={this.confirmDeleteArea.bind(this)}>
      </DeleteArea>
    }
    let editElement='';
    if (this.state.showAreaEditForm){
      editElement =
      <AreaEditElement
        name={this.state.updatedName} areaType={this.state.updatedAreaType}
        id={this.props.area.id} siteId={this.props.siteId}
        cancelEditArea={this.cancelEditArea.bind(this)}></AreaEditElement>
    }
    return (
      <ul style={style}>
        <li className="settings-nav-li settings-nav-area">
          &rarr; {area.name}
          <div className='settings-edit-delete' style={{flex:1, marginTop:'-1em'}}>
            <span className='settings-editdelete-move' style={{color:'#243755'}}
              onClick={this.props.moveClicked.bind(this)}>MOVE UP/DOWN</span>
            <span className='settings-editdelete-edit' name={area.name}
              onClick={this.areaEditClicked.bind(this,data)}>EDIT</span>
            <span className='settings-editdelete-delete'
               onClick={this.xButtonAreaClicked.bind(this)}>X</span>
          </div>
        </li>
        {editElement}
        {deleteElement}
      </ul>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}
export default connect(null, mapDispatchToProps)(SettingsArea);
