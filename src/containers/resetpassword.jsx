import React from 'react';
import { resetPWGetUser, resetPassword } from 'actions/authentication'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import toastr from "toastr"

class ResetPasswordForm extends React.Component {

  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.displayName = 'LoginPage'
    this.state = {
      new: '',
      new2: '',
    }
  }

  componentDidMount() {
    var key = this.props.location.query.k;
    this.props.dispatch(resetPWGetUser(key));
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
    console.log(this.props.auth)
    var invalidKey = this.props.auth.resetPWBadKey;
    var validKey = !invalidKey && this.props.auth.resetPWUser;
    if (validKey) {
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
                <form>
                  <br/>
                  {
                  // <div>
                  //   <div className="center-horizonal" style={{width:230, textAlign:"left"}}>
                  //     {this.props.auth.resetPWUser.username}
                  //   </div>
                  // </div>
                  // <div>
                  //   <div className="center-horizonal" style={{width:230, textAlign:"left"}}>
                  //     {this.props.auth.resetPWUser.email}
                  //   </div>
                  // </div>
                  }

                  <div>
                    <input type="username" value={this.props.auth.resetPWUser.username} disabled />
                  </div>
                  <div>
                    <input type="email" value={this.props.auth.resetPWUser.email} disabled />
                  </div>
                  <div>
                    <input type="password" id="new" placeholder="New Password" className={this.state["newError"] ? "has-error" : ""} onKeyDown={this.handleKeyDown.bind(this)} onChange={this.handleChange.bind(this)} required />
                  </div>
                  <div>
                    <input type="password" id="new2" placeholder="Retype Password" className={this.state["new2Error"] ? "has-error" : ""} onKeyDown={this.handleKeyDown.bind(this)} onChange={this.handleChange.bind(this)} required />
                  </div>
                  <div>
                    <input type="button" name="user_submit" value="Reset Password" onClick={this.submit} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (invalidKey) {
      return (
        <div>
          <div style={{ width: '100%', backgroundColor: 'white', paddingBottom: '15px' }} className="container-fluid">
            <div className="row" style={{textAlign:"center"}}>
              <div className="header-logo"><Link to="/"><img src="src/assets/images/header-logo.svg" alt="SenzoLive" /></Link></div>
            </div>
          </div>

          <div className="settings-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <p style={{width: "50%", fontSize:"15px"}}>
                    It seems that this link has expired or invalid. Please make another password resetting request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      // Loading...
      return null;
    }
  }

  checkForm(data) {
    var ok = true;
    var badKeys = {};
    Object.keys(data).map((key) => {
      if (data[key] === "") {
        badKeys[key+"Error"] = true;
        ok = false;
      } else {
        badKeys[key+"Error"] = false;
      }
    });
    if (data.new != data.new2) {
      console.log("!")
      badKeys["new2" + "Error"] = true;
    }
    this.setState(badKeys);
  }

  submit() {
    this.checkForm({
      new: this.state.new,
      new2: this.state.new2
    })
    if (this.state.new == "") {
      toastr.error("Please provide new password.");
    } else if (this.state.new != this.state.new2) {
      toastr.error("Password doesn't match.")
    } else {
      var key = this.props.location.query.k;
      this.props.dispatch(resetPassword(key, this.props.auth.resetPWUser.username, this.state.new));
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordForm);
