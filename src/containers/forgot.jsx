import React from 'react';
import { sendResetPW } from 'actions/authentication'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Recaptcha from "react-recaptcha"

class ForgotForm extends React.Component {

  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.displayName = 'LoginPage'
    this.state = { username: '', response: null}
  }

  componentWillReceiveProps(nextProps) {
    // Sending email failed
    console.log(this.props, nextProps);
    if (this.props.auth.sendResetPWInProgress && !nextProps.auth.sendResetPWInProgress && !nextProps.auth.sendResetPWDone) {
      console.log("x");
      this.recaptcha.reset();
    }
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

  verified(response) {
    this.setState({response: response});
  }

  render() {
    var done = !this.props.auth.sendResetPWInProgress && this.props.auth.sendResetPWDone;
    var waiting = this.props.auth.sendResetPWInProgress && !this.props.auth.sendResetPWDone;
    console.log(this.state)
    return (
      <div className="login-wrapper">
        <div className="login-card text-center">
          <Link to="/">
            <img src="/src/assets/images/header-logo.svg" className="login-logo" />
          </Link>
          <h2 className="welcome-message">Welcome to Senzo Live!</h2>
          <div className="login-box-wrapper">
            <div className="login-box">
              <h3>Reset Password</h3>
              {
                !done ? 
                <form>
                  <br/>
                  <div>
                    <input type="username" id="username" placeholder="Username" onKeyDown={this.handleKeyDown.bind(this)} onChange={this.handleChange.bind(this)} required />
                  </div>
                  <div className="reset-pw-recaptcha">
                    <Recaptcha
                      ref={e => this.recaptcha = e}
                      sitekey="6LefkksUAAAAALFa1vdNevTFeJF7Q_C8U0o_IKYj"
                      verifyCallback={(response) => this.verified(response)}
                    />
                  </div>

                  <div>
                    <input type="button" name="user_submit" value={waiting ? "Please wait..." : "Reset Password"} onClick={this.submit} disabled={waiting}/>
                  </div>

                  <div className="forgot-password">
                    <Link to='/login'> Back to login page.</Link>
                  </div>
                </form>
                :
                <div>
                  <br/>
                  An email has been sent to this account's email address.<br/>
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
