import React from 'react';
import { updateArea } from 'actions/editlocations';
import { connect } from 'react-redux';

export default class AreaEditElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areaType: '',
      name: ''
    }
  }
  updateArea(e){
    e.stopPropagation();
    let isMeetingRoom ;
    if (this.state.areaType == 'meeting-room'){
      isMeetingRoom = 1;
    } else {
      isMeetingRoom = 0;
    }
    let area = {
      name: this.state.name,
      customerId: 1,
      id: this.props.id,
      isMeetingRoom: isMeetingRoom,
      siteId:this.props.siteId
    }
    this.props.dispatch(updateArea(area))
  }

  componentDidMount(){
    this.setState({
      name:this.props.name,
      areaType:this.props.areaType
    })
  }

  areaTypeClicked(e){
    e.stopPropagation();
    this.setState({areaType: e.target.value});
  }
  changeHandler(e){
    this.setState({
      name:e.target.value
    })
  }
  render () {

    return (
      <li className="settings-nav-li-edit">
        <br></br>
        <div className='' style={{display:'flex', paddingLeft:'25px'}}>
           <br></br>
           <label htmlFor="sensor-area-name">Sensor Area Name</label>
           <input type='text' id='sensor-area-name' style={{flex:2}}
             onChange={this.changeHandler.bind(this)} value={this.state.name}/>
           <label htmlFor="area-type">Area Type</label>
             <select id='area-type' value={this.state.areaType}
               onChange={this.areaTypeClicked.bind(this)}>
               <option value="meeting-room">Meeting room</option>
               <option value="desk-area">Desk area</option>
             </select>
         </div>
         <br></br>
         <div className='bold'
           style={{paddingLeft:'25px',fontSize:'12px',
           marginRight:'1em', float:'right'}}>
           <span onClick={this.props.cancelEditArea.bind(this)}>CANCEL</span>
           &nbsp;&nbsp;&nbsp;&nbsp;
           <span style={{textDecoration : 'underline',color:'#2FCE84'}}
             onClick={this.updateArea.bind(this)}>SAVE CHANGES</span>
         </div>
         <br></br>
         <br></br>
      </li>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}
export default connect(null, mapDispatchToProps)(AreaEditElement);
