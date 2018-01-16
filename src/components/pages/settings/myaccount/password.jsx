import React from 'react';
import { connect } from 'react-redux';
import { updatePassword } from 'actions/myaccount';
import appHistory from 'components/common/appHistory';
import toastr from 'toastr';

class Password extends React.Component {
  constructor() {
    super();
    this.displayName = 'Change Password';
    this.state = {};
  }

  save() {
    if (this.state.new && this.state.confirm) {
      if (this.state.new === this.state.confirm) {
        let data = {
          username: this.props.auth.username,
          old: this.state.old,
          new: this.state.new
        }
        this.props.dispatch(updatePassword(data)).then(() => {
          toastr.success(`Update Password Successfully`)
        })
          .catch(error => {
            toastr.error(error);
          });;
      }
      else {
        toastr.error("Password does not match! ");
      }
    }
    else {
      toastr.error("Password does not match! ");
    }
  }

  cancel() {
    appHistory.push('/settings/ownaccount');

  }

  handleChange(e) {
    let key = e.target.id;
    let value = e.target.value;
    this.setState({ [key]: value });
  }

  render() {
    return (
      <div className="settings-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="account-title">Change Password</h2>
              <form className="account-form">
                <div className="account-email">
                  <label>Old Password</label>
                  <input type="text" id="old" onChange={this.handleChange.bind(this)}/>
                </div>
                <div className="account-email">
                  <label>New Password</label>
                  <input type="password" id="new" onChange={this.handleChange.bind(this)} />
                </div>
                <div className="account-username">
                  <label>Confirm Password</label>
                  <input type="password" id="confirm" onChange={this.handleChange.bind(this)} />
                </div>
                <div className="account-change-password">
                    <label></label>
                    <a onClick={this.save.bind(this)} className="chpwd flat-button">Change Password </a>
                </div>
                <div className="account-change-password">
                    <label></label>
                    <a onClick={this.cancel.bind(this)} className="cancel flat-button">Cancel </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.authReducer.user,
    user: state.myAccountReducer.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Password);
