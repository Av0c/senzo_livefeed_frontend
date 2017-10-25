import React from 'react';
import { login } from 'actions/authentication'
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Login extends React.Component {

  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.displayName = 'LoginPage'
    this.state = { username: '', password: '' }
  }

  handleChange(e) {
    let key = e.target.id;
    let value = e.target.value;
    this.setState({ [key]: value });
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.props.dispatch(login(this.state));
    }
  }

  render() {
    return (
      <div className="login-wrapper">
        <div className="login-card text-center">
          <img className="login-logo" />
          <h2 className="welcome-message">Welcome to Senzo Live!</h2>
          <div className="login-box-wrapper">
            <div className="login-box">
              <form action="#">
                <div className="user_email">
                  <input type="username" id="username" placeholder="Username" onKeyDown={this.handleKeyDown.bind(this)} onChange={this.handleChange.bind(this)} required />
                </div>
                <div className="user_password">
                  <input type="password" placeholder="Password" id="password" onKeyDown={this.handleKeyDown.bind(this)} onChange={this.handleChange.bind(this)} required />
                </div>
                <div className="keep_me_logged_in">
                  <input type="checkbox" name="keep_me_logged_in" /><span>Keep me logged in</span>
                </div>
                <div className="user_submit">
                  <input type="submit" name="user_submit" value="Log in" onClick={this.submit} />
                </div>
                <div className='error-message' >{this.props.auth.errorMessage}</div>
                <div className='forgot-password'>
                  <Link to='/forgot'> Forgot your password?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

  submit() {
    this.props.dispatch(login(this.state));
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
