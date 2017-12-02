import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';

import {
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
  USER_UPDATED,
  userRemoved,
  userSaved,
  userUpdated,

  INVITE_USER,
  USER_INVITED,

  GET_INVITE,
  RECEIVE_INVITE,

  CREATE_USER,
  USER_CREATED,

  RECEIVE_RESPOND,
  receiveRespond

} from 'actions/user'

import {showNotification} from 'actions/common';

const initialState = {
  users: [],
  editedUser: {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    username: '',
  },
  respond: {},
  loading:false
};

function fetchUsers() {
  return axios.get(`${config.api.root}/api/user/me`)
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

function createUser(key, user) {
  return axios.post(`${config.api.root}/user/create/${key}`, user)
    .then(receiveRespond)
    .catch((error) => receiveRespond(error))
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
function inviteUser(inv){
  return axios.post(`${config.api.root}/user/invite`, inv)
    .then(receiveRespond)
    .catch((error) => receiveRespond(error))
}
function getInvite(key){
  return axios.get(`${config.api.root}/user/invite/check/${key}`)
    .then(receiveRespond)
    .catch((error) => receiveRespond(error))
}


export default(state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER: {
      return loop (
        Object.assign({}, state, {
          loading: true,
          respond: {},
          created: false,
        }),
        Effects.promise(createUser, action.user)
      );
    }
    case USER_CREATED: {
      console.log(action);
      return Object.assign({}, state, {
          loading: false,
          created: action.respond,
          respond: action.respond
      })
    }

    case INVITE_USER: {
      return loop (
        Object.assign({}, state, {
          loading: true,
          respond: {},
          invited: false
        }),
        Effects.promise(inviteUser, action.inv)
      )
    }
    case USER_INVITED: {
      console.log(action);
      return Object.assign({}, state, {
          loading: false,
          invited: true,
          respond: action.respond
      })
    }

    case GET_INVITE: {
      return loop (
        Object.assign({}, state, {loading: true, respond: {}}),
        Effects.promise(getInvite, action.key)
      )
    }
    case RECEIVE_INVITE: {
      console.log(action);
      return Object.assign({}, state, {
          loading: false,
          respond: action.respond
      })
    }

    case RECEIVE_RESPOND: {
      console.log(action);
      return Object.assign({}, state, {
          loading: false,
          respond: action.respond
      })
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
