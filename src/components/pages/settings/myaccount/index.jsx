import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from 'actions/myaccount';
import { fetchUser } from 'actions/user';
import { Link } from 'react-router';

class Index extends React.Component {
  constructor() {
    super();
    this.displayName = 'My Account'
    this.state = {
      email:'',
      firstName:'',
      lastName:'',
      password1:'',
      password2:'',
      role:'',
      username:'',
      showPassword2: false
    }
  }

  componentWillMount() {
    this.props.dispatch(fetchUser(this.props.auth.id))
  }

  save(){
    let user = {
      email:this.state.email,
      firstName:this.state.firstName,
      lastName:this.state.lastName
    }
    this.props.dispatch(updateUser(user));
  }

  cancel(){
    this.props.dispatch(fetchUser(this.props.auth.id))
  }

  componentWillReceiveProps(nextProps) {
    let user = nextProps.user.editedUser;
    user.password1 ='';
    user.password2 ='';
    this.setState({  email:user.email,
      firstName:user.firstName,
      lastName:user.lastName,
      password1:'',
      password2:''
    })
  }

  handleChange(e){
    let key = e.target.id;
    let value = e.target.value;
    this.setState ({[key]:value});
  }

  render() {

    return (
      <div className='settings-container'>
        <div className='settings-title'>My account</div>
        <div className='settings-line'></div>
        <div className='settings-text'>
        Update your information.
      </div>
        <div className='settings-line'></div>
        <div className='settings-form'>
          <br></br>
          <div className="settings-row">
            <label htmlFor="first-name">First Name</label>
            <input type='text' id='firstName' autocomplete="off" style={{flex:2}}
              onChange={this.handleChange.bind(this)} value={this.state.firstName}/>
            <label htmlFor="last-name">Last Name</label>
            <input type='text' id='lastName' autocomplete="off" style={{flex:2}}
              onChange={this.handleChange.bind(this)} value={this.state.lastName} />
          </div>
          <br></br>
          <div className="settings-row">
            <label htmlFor="email">Contact Email</label>
            <input type="email" id="email" autocomplete="off" required style={{flex:2}}
              onChange={this.handleChange.bind(this)} value={this.state.email}/>
          </div>
          <br></br>
          <div className="white-text-button">
            <Link to='/settings/myaccount/password'
              style={{marginLeft:'0em', color:'white', float:'left', fontWeight:'bold'}}>
              CHANGE PASSWORD</Link>
          </div>
          <br></br>
          <br></br>
          <div className="white-text-button" onClick={this.save.bind(this)}
            style={{marginLeft:'0em', color:'white', float:'left', fontWeight:'bold'}}>
            <span style={{textDecoration:'underline'}}>SAVE CHANGES</span>
          </div>
          <span className='settings-cancel' onClick={this.cancel.bind(this)}>DISCARD CHANGES</span>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    auth: state.authReducer.user,
    user: state.settingsPageReducer.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
