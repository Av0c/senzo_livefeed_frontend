import React from 'react';

export default class LocationEditElement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      areaType: '',
      name: ''
    }
  }

  componentDidMount(){
    this.setState({
      name:this.props.name
    })
  }

  changeHandler(e){
    this.setState({name:e.target.value})
  }

  render () {
    let data = {
      name: this.state.name,
      type: 'update'
    }
    return (
      <li className="settings-nav-li-edit">
        <br></br>
        <div className='settings-add-location' style={{width:'100%', display:'flex',
          justifyContent:'space-between'}}>
          <label htmlFor='location-name'>Name</label>
          <input type='text' name='location-name' id='location-name' style={{flex:4}}
            onChange={this.changeHandler.bind(this)} value={this.state.name}></input>
          <div className='bold'
            style={{paddingLeft:'25px',fontSize:'12px',
            marginRight:'1em', float:'right'}}>
            <span onClick={this.props.cancelLocationEdit.bind(this)}>CANCEL</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{textDecoration : 'underline',color:'#2FCE84'}}
              onClick={this.props.saveSubLocation.bind(this,data)}>SAVE CHANGES</span>
          </div>
          <br></br>
        </div>
        <div className='settings-line'></div>
      </li>
    )
  }
}
