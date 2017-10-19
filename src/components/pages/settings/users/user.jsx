import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router';
import Delete from './delete';
import {removeUser} from 'actions/user';

export class User extends React.Component {

    constructor(){
      super();
      this.state= {showDelete:false};
    }
    confirmDelete(id){
      this.setState({showDelete:false});
      this.props.dispatch(removeUser(id));
    }
    cancelDelete(){
      this.setState({showDelete:false});
    }
    xButtonClicked(e){
      e.stopPropagation();
      this.setState({showDelete: true})
    }

  render () {
    let user = this.props.user;
    let deleteElement = '';
    if (this.state.showDelete){
      deleteElement =
      <Delete user={this.props.user}
        confirmDelete={this.confirmDelete.bind(this)}
        cancelDelete={this.cancelDelete.bind(this)}>
      </Delete>
    }
    return <div>
        <div className="settings-row-element">
          <div className="left">
            <div>{user.firstName}</div>
            <div>{user.lastName}</div>
          </div>
          <div className="right">
            <div>{user.email}</div>
            <div>
                <span className='settings-editdelete-edit'>
                  <Link className="link" to={`/settings/users/edit/${user.id}`}>EDIT</Link>
                </span>
                <span className='settings-editdelete-delete'
                   onClick={this.xButtonClicked.bind(this)}>X</span>
            </div>
          </div>
        </div>
        {deleteElement}
      </div>
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(null, mapDispatchToProps)(User);
