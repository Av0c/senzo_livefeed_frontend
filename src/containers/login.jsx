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
      this.submit();
    }
  }

  render() {
    return (
      <div className="login-wrapper">
        <div className="login-card text-center">
          <Link to="/">
            <img src="/src/assets/images/header-logo.svg" className="login-logo" />
          </Link>
          <h2 className="welcome-message">Welcome to Senzo Live Feed!</h2>
          <div className="login-box-wrapper">
            <div className="login-box">
              <form action="#">
                <div>
                  <input type="username" id="username" placeholder="Email" onKeyDown={this.handleKeyDown.bind(this)} onChange={this.handleChange.bind(this)} required />
                </div>
                <div>
                  <input type="password" placeholder="Password" id="password" onKeyDown={this.handleKeyDown.bind(this)} onChange={this.handleChange.bind(this)} required />
                </div>
                <div>
                  <input type="button" name="user_submit" value="Log in" onClick={this.submit} />
                </div>
                {/**<div className='red-500' >{this.props.auth.errorMessage}</div>**/}
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
