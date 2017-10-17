import React from 'react';
import { connect } from 'react-redux';
import { updatePassword } from 'actions/user';
import appHistory from 'components/common/appHistory';

class Password extends React.Component {
  constructor() {
    super();
    this.displayName = 'Change Password'
    this.state= {password1:'', password2:'', oldPassword:''}
  }

  save(){
    if (this.state.password1 === this.state.password2){
      let data = {
        id: this.props.auth.id,
        username: this.props.auth.username,
        old: this.state.oldPassword,
        new: this.state.password1
      }
      this.props.dispatch(updatePassword(data))
    }
    else {
      //todo:show notification of the wrong password
    }
  }

  cancel(){
    appHistory.push('/settings/myaccount');

  }

  handleChange(e){
    let key = e.target.id;
    let value = e.target.value;
    this.setState ({[key]:value});
  }

  render() {
    return (
      <div className='settings-container'>
        <div className='settings-title'>Update Password</div>
        <div className='settings-line'></div>
        <div className='settings-text'>
          Update your password.
        </div>
        <div className='settings-line'></div>
        <br></br>
        <div className='settings-form'>
          <div className="settings-row">
            <label htmlFor="oldPassword">Old Password</label>
            <input type="password" id="oldPassword" autoComplete="off" required style={{flex:2}}
              onChange={this.handleChange.bind(this)} value={this.state.oldPassword}
            />
          </div>
          <br></br>
          <div className="settings-row">
            <label htmlFor="password1">New Password</label>
            <input type="password" id="password1" autoComplete="off" required style={{flex:2}}
              onChange={this.handleChange.bind(this)} value={this.state.password1}
            />
          </div>
          <br></br>
          <div className="settings-row">
            <label htmlFor="password2">Re-enter the New Password</label>
            <input type="password" id="password2" autoComplete="off" required style={{flex:2}}
              onChange={this.handleChange.bind(this)} value={this.state.password2}
            />
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="white-text-button"
          style={{marginLeft:'0em', color:'white', float:'left', fontWeight:'bold', float:'right'}}>
          <span style={{textDecoration:'underline'}} onClick={this.cancel.bind(this)}>CANCEL</span>
          &nbsp; &nbsp;
          <span style={{textDecoration:'underline'}} onClick={this.save.bind(this)}>SAVE CHANGES</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Password);
