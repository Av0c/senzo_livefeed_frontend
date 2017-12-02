import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';

import {
  CREATE_USER,
  FETCH_USERS,
  FETCH_USER,
  FORM_DATA_CHANGED,
  passwordSaved,
  RECEIVE_USER,
  RECEIVE_USERS,
  receiveUser,
  receiveUsers,
  UPDATE_PASSWORD,
  REMOVE_USER,
  UPDATE_USER,
  USER_CREATED,
  USER_UPDATED,
  INVITE_USER,
  USER_INVITED,
  userRemoved,
  userSaved,
  userUpdated,

} from 'actions/user'

import {showNotification} from 'actions/common';

const initialState = {
  users: [],
  editedUser: {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    username: ''
  }
};

function fetchUsers() {
  return axios.get(`${config.api.root}/api/user`)
    .then(receiveUsers)
}

function removeUser(id){
  return axios.delete(`${config.api.root}/api/user/${id}`)
    .then(() => showNotification('User removed', true))
    .then(fetchUsers)
    .catch((error) => showNotification('Removing failed: ' + error.statusText, false))
}
function fetchUser(id) {
  return axios.get(`${config.api.root}/api/user/${id}`)
    .then(receiveUser)
    .catch((error) => showNotification(error.statusText, false))
}

function createUser(user) {
  return axios.post(`${config.api.root}/api/user`, user)
    .then(userSaved)
    .then(() => showNotification('User created', true))
    .catch((error) => showNotification('Save failed: ' + error.statusText, false))
}

function updateUser(user) {
  return axios.put(`${config.api.root}/api/user`, user)
    .then(userSaved)
    .then(() => showNotification('User updated', true))
    .catch((error) => showNotification('Update failed: ' + error.statusText, false))
}
function updatePassword(data){
  return axios.put(`${config.api.root}/api/user/password`, data)
    .then(passwordSaved)
    .then(() => showNotification('Password updated', true))
    .catch((error) => showNotification('Updating password failed: ' + error.statusText, false))
}


export default(state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS: {
      return loop (
        Object.assign({}, state, {loading: true}),
        Effects.promise(fetchUsers)
      );
    }
    case RECEIVE_USERS: {
      return Object.assign({}, state, {users:action.data})
    }

    case FETCH_USER: {
      return loop (
        Object.assign({}, state, {loading: true}),
        Effects.promise(fetchUser, action.id)
      )
    }
    case RECEIVE_USER: {
      return Object.assign({}, state, {editedUser: action.data})
    }

    case CREATE_USER: {
      return loop (
        Object.assign({}, state, {loading: true}),
        Effects.promise(createUser, action.user)
      );
    }
    case REMOVE_USER: {
      return loop (
        Object.assign({}, state, {loading: true}),
        Effects.promise(removeUser, action.id)
      )
    }
    case UPDATE_USER: {
      return loop (
        Object.assign({}, state, {loading: true}),
        Effects.promise(updateUser, action.user)
      )
    }
    case UPDATE_PASSWORD: {
      return loop (
        Object.assign({}, state, {loading: true}),
        Effects.promise(updatePassword, action.data)
      )
    }

    case FORM_DATA_CHANGED: {
      return Object.assign({}, state, {
        editedUser: Object.assign({}, state.editedUser, action.data )
      })
    }
    default:
      return state;
  }
}
