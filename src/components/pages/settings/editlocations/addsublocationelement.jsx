import React from 'react';

export default class AddSubLocationElement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      areaType: '',
      name: ''
    }
  }

  changeHandler(e){
    this.setState({name:e.target.value})
  }

  render () {
    let data = {
      name: this.state.name,
      type: 'create'
    }

    return (
      <div>
        <br></br>
        <div className='settings-add-location' style={{width:'100%', display:'flex'
        ,justifyContent:'space-between'}}>
          <label htmlFor='location-name'>Name</label>
          <input type='text' name='location-name' id='location-name'
            onChange={this.changeHandler.bind(this)} style={{flex:4}}></input>
          <div className='bold'
            style={{paddingLeft:'25px',fontSize:'12px',
            marginRight:'1em', float:'right'}}>
            <span onClick={this.props.cancelSubLocation.bind(this)}>CANCEL</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{textDecoration : 'underline',color:'#2FCE84'}}
              onClick={this.props.saveSubLocation.bind(this,data)}>SAVE CHANGES</span>
          </div>
          <br></br>
        </div>
        <div className='settings-line'></div>
      </div>
    )
  }
}
