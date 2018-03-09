import React from 'react';
import { sendResetPW } from 'actions/authentication'
import { connect } from 'react-redux';
import { Link } from 'react-router';

class ForgotForm extends React.Component {

  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.displayName = 'LoginPage'
    this.state = { username: '' }
  }

  handleChange(e) {
    let key = e.target.id;
    let value = e.target.value;
    this.setState({ [key]: value });
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.submit();
    }
  }

  render() {
    console.log(this.props.auth.sendResetPWInProgress, this.props.auth.sendResetPWDone)
    var done = !this.props.auth.sendResetPWInProgress && this.props.auth.sendResetPWDone;
    return (
      <div className="login-wrapper">
        <div className="login-card text-center">
          <img className="login-logo" />
          <h2 className="welcome-message">Welcome to Senzo Live!</h2>
          <div className="login-box-wrapper">
            <div className="login-box">
              <h3>Reset Password</h3>
              {
                !done ? 
                <form>
                  <br/>
                  <div className="user_email">
                    <input type="username" id="username" placeholder="Username" onKeyDown={this.handleKeyDown.bind(this)} onChange={this.handleChange.bind(this)} required />
                  </div>
                  <div className="user_submit">
                    <input type="button" name="user_submit" value="Reset Password" onClick={this.submit} />
                  </div>
                  <div className='forgot-password'>
                    <Link to='/login'> Back to login page.</Link>
                  </div>
                </form>
                :
                <div>
                  <br/>
                  An email has been sent to your email address.<br/>
                  Please follow the instruction in the email.
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }

  submit() {
    this.props.dispatch(sendResetPW(this.state));
  }
}

function mapStateToProps(state) {
  return {
    auth: state.authReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotForm);
