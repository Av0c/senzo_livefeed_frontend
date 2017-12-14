import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { updateUser } from 'actions/myaccount';
import { fetchCurrentUser } from 'actions/myaccount';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      phone: '',
      position: '',
      location: '',
      email: '',
      firstname: '',
      lastname: '',
      title: 'Mr',
      username: '',
      address: ''
    }
  }

  submit() { 
  }

  componentWillMount() {
    this.props.dispatch(fetchCurrentUser());
  }

  changeHandler(e) {
    let key = e.target.id;
    let value = e.target.value;
    this.setState({ [key]: value });
  }

  render() {
    let user = this.props.user;
    console.log(this.state);
    return (
      <div className="settings-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="account-title">Own Account</h2>
              <form className="account-form">
                <div className="account-email">
                  <label>Email Address</label>
                  <input type="email" id="email" placeholder="jamesbond@gmail.com" disabled="disabled" />
                </div>
                <div className="account-username">
                  <label>Username</label>
                  <input type="text" id="username" value={this.state.username || user.username} onChange={this.changeHandler.bind(this)} />
                </div>
                <div className="account-title">
                  <label>Title</label>
                  <select id="title" onChange={this.changeHandler.bind(this)}>
                    <option value="Mr">Mr</option>
                    <option value="Ms">Ms </option>
                  </select>
                </div>
                <div className="account-firstname" >
                  <label>First Name    </label>
                  <input type="text" id="firstname" value={this.state.firstname || user.firstname} onChange={this.changeHandler.bind(this)}  />
                </div>
                <div className="account-lastname">
                  <label>Last Name    </label>
                  <input type="text" id="lastname"  value={this.state.lastname || user.lastname} onChange={this.changeHandler.bind(this)} />
                </div>
                <div className="account-phone">
                  <label>Phone    </label>
                  <input type="tel" id="phone"  value={this.state.phone || user.phone} onChange={this.changeHandler.bind(this)} />
                </div>
                <div className="account-position">
                  <label>Position</label>
                  <input type="text"  id="position" value={this.state.position || user.postion} onChange={this.changeHandler.bind(this)} />
                </div>
                <div className="account-location">
                  <label>Location</label>
                  <input type="text"  id="address" value={this.state.address || user.address} onChange={this.changeHandler.bind(this)} />
                </div>
                <div className="account-change-password"><a className="chpwd">Change Password    </a></div>
                <div className="account-submit">
                  <input className="disabled" type="submit" value="Save Changes" />
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
    user: state.myAccountReducer.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
