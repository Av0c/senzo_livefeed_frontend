import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {fetchUser, updateUser, formDataChanged} from 'actions/user';


export class EditUser extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchUser(this.props.params.id))
  }

  render () {
    let user = this.props.user;

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
            <input type='text' id='firstName' autocomplete="off" style={{flex:2}}
                   onChange={this.handleChange.bind(this)} value={user.firstName} />
            <label htmlFor="last-name">Last Name</label>
            <input type='text' id='lastName' autocomplete="off" style={{flex:2}}
                   onChange={this.handleChange.bind(this)} value={user.lastName}/>
          </div>
          <br/>
          <div className="settings-row">
            <label htmlFor="email">Contact Email</label>
            <input type="email" id="email" autocomplete="off" required style={{flex:2}}
                   onChange={this.handleChange.bind(this)} value={user.email}/>
          </div>
          <br/>
          <div className="settings-row">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" autocomplete="off" required style={{flex:2}}
                   onChange={this.handleChange.bind(this)} value={user.username}/>
          </div>
          <div className="page-actions">
              <span className="white-text-button" onClick={this.update.bind(this)}>
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
    this.props.dispatch(formDataChanged({
      [e.target.id]: e.target.value
    }))
  }

  update() {
    this.props.dispatch(updateUser(this.props.user))
  }

}

function mapStateToProps(state){
  return {
    user: state.settingsPageReducer.user.editedUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
