import React from 'react';
import { connect } from 'react-redux';
import {removeSensorFromList} from 'actions/floorplan'
import SettingsArea from './settingsarea';
import DeleteSensor from './deletesensor';

export class SettingsNavbutton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        active: false,
        isMeetingRoom: 1,
        name:'',
        parentId:0,
        selected: false,
        showDeleteArea: false
      }
    }
    componentDidMount(){
      this.props.step == 0 ? this.setState
      ({
        selected: true
      })
      : this.setState({
        selected: false
      });
      this.props.step < 2 ? this.setState({
        active: true,
        parenetId: this.props.parentId})
      :this.setState({
        active: false
      });
      this.setState({
        name: this.props.nodeName,
        parenetId: this.props.parentId
      });
    }

    changeHandler(e){
      let value = e.target.value;
      this.setState ({name : value});
    }

    confirmDeleteSensor(){
      this.props.dispatch(removeSensorFromList(this.state.deletingSensor));
      this.setState({
        showDeleteArea: false
      })
    }

    xButtonClicked(sensor){
      this.setState({
        deletingSensor:sensor,
        deletingLocationId:this.props.id,
        showDeleteArea: true,
        showLocationEditForm: false,
        showAreaEditForm: false
      })
    }

    click(e) {
      e.stopPropagation();
      let nextState = !this.state.active;
      this.setState({active: nextState});
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

      let deleteElement = '';
      if (this.state.showDeleteArea){
        deleteElement =
        <DeleteSensor nodeName={this.state.deletingSensor.dev_id}
          confirmDeleteSensor={this.confirmDeleteSensor.bind(this)}>
        </DeleteSensor>
      }
      return <ul className={ulClasses} >
        <li className="settings-nav-li" style={style} onClick={this.click.bind(this)}>
          {iconElement}{this.state.name}
        </li>
        {deleteElement}
        {
          this.props.areas.map( (area) => {
            return <SettingsArea key={area.id} area={area} step={this.props.step}
              ref={area.id} name={area.name}
              isMeetingRoom={area.isMeetingRoom}
              xButtonClicked={this.xButtonClicked.bind(this)}>
            </SettingsArea>
          })
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
