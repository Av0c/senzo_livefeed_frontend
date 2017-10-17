import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createUser } from 'actions/user';

export default class CreateUser extends React.Component {

  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }
  }

  render () {
    return (
      <div className='settings-container'>
        <div className="new-user">
          <br></br>
          <div className="settings-row">
            <label htmlFor="title">Title</label>
            <select id='title'>
              <option value="Mr">Mr</option>
              <option value="Miss">Miss</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
              <option value="Dr">Dr</option>
              <option value="Sir">Sir</option>
            </select>
            <label htmlFor="first-name">First Name</label>
            <input type='text' id='firstname' autocomplete="off" style={{flex:2}}
                   onChange={this.handleChange.bind(this)} />
            <label htmlFor="last-name">Last Name</label>
            <input type='text' id='lastname' autocomplete="off" style={{flex:2}}
                   onChange={this.handleChange.bind(this)} />
          </div>
          <br/>
          <div className="settings-row">
            <label htmlFor="email">Contact Email</label>
            <input type="email" id="email" autocomplete="off" required style={{flex:2}}
                   onChange={this.handleChange.bind(this)}/>
          </div>
          <br/>
          <br/>
          <div className="settings-row">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" autocomplete="off" required style={{flex:2}}
                   onChange={this.handleChange.bind(this)} />
          </div>
          <br></br>
          <div className="settings-row">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" autoComplete="off" required style={{flex:2}}
                   onChange={this.handleChange.bind(this)} />
          </div>
          <div className="page-actions">
            <span className="white-text-button" onClick={this.save.bind(this)}>
              SAVE CHANGES
            </span>
            <Link className="link red-text-button" to="/settings/users/"
              style={{marginLeft:'1em'}}>DISCARD CHANGES</Link>
          </div>
        </div>
      </div>
    )
  }

  handleChange(e){
    let key = e.target.id;
    let value = e.target.value;
    this.setState ({
      [key]: value
    })
  }

  save() {
    this.props.dispatch(createUser(this.state))
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}
export default connect(null, mapDispatchToProps)(CreateUser);
