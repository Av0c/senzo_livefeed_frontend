import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import User from './user';
import {fetchUsers} from 'actions/user';

class Users extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchUsers())
  }

  render() {
    return (
      <div className='settings-container'>
        <form autoComplete="nope">
          <div className='settings-title'>Edit Users</div>
          <div className='settings-line'></div>
          <div className='settings-text'> Add or update the users.</div>
          <div className='settings-line'></div>
          <div className='settings-form'>
            <div className="users">
              {this.props.state.users.map( (user,idx) => {
                return <User key={idx} user={user} />
              })}
            </div>
            <div className="settings-line" style={{marginTop:'1em'}}></div>
            <div className="page-actions">
              <div className="white-text-button">
                <Link className="link" to="/settings/users/create">New user</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    state: state.settingsPageReducer.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
