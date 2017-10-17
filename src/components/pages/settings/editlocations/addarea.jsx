import React from 'react';

export default class AddArea extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      areaType: '',
      name: ''
    }
  }

  componentDidMount(){
    this.setState({
      name:this.props.name,
      areaType:'meeting-room'
    })
  }
  changeHandler(e){
    this.setState({name:e.target.value})
  }

  areatypeClicked(e){
    e.stopPropagation();
    this.setState({areaType: e.target.value});
  }

  render () {
    let data = {
      name: this.state.name,
      areaType: this.state.areaType
    }
    return (
      <div>
        <br></br>
        <div className='settings-add-location' style={{width:'100%', display:'flex'
        ,justifyContent:'space-between'}}>
          <label htmlFor='location-name'>Name</label>
          <input type='text' name='location-name' id='location-name'
            onChange={this.changeHandler.bind(this)}
             style={{flex:4}}></input>
           <select id='area-type' onChange={this.areatypeClicked.bind(this)} value={this.state.areaType}>
            <option value="meeting-room">Meeting room</option>
            <option value="desk-area">Desk area</option>
          </select>

          <div className='bold'
            style={{paddingLeft:'25px',fontSize:'12px',
            marginRight:'1em', float:'right'}}>
            <span onClick={this.props.cancelSensorAreaAdd.bind(this)}>CANCEL</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{textDecoration : 'underline',color:'#2FCE84'}}
              onClick={this.props.saveSubSensorArea.bind(this,data)}>SAVE CHANGES</span>
          </div>

          <br></br>
        </div>
        <div className='settings-line'></div>
      </div>
    )
  }
}
