import history from 'components/common/appHistory';

export const CREATE_USER = 'CREATE_USER';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USERS = 'FETCH_USERS';
export const FORM_DATA_CHANGED = 'FORM_DATA_CHANGED';
export const PASSWORD_UPDATED = 'PASSWORD_UPDATED';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_USER = 'UPDATE_USER';
export const USER_CREATED = 'USER_CREATED';
export const USER_UPDATED = 'USER_UPDATED';
export const USER_REMOVED = 'USER_REMOVED';




export function updatePassword(data){
  return {
    type: UPDATE_PASSWORD,
    data
  }
}
export function removeUser(id) {
  return {
    type: REMOVE_USER,
    id
  }
}
export function fetchUsers() {
  return {
    type: FETCH_USERS
  }
}

export function receiveUsers(result) {
  return {
    type: RECEIVE_USERS,
    data: result.data
  }
}
export function fetchUser(id) {
  return {
    type: FETCH_USER,
    id
  }
}
export function receiveUser(result) {
  return {
    type: RECEIVE_USER,
    data: result.data
  }
}
export function createUser(user) {
  return {
    type: CREATE_USER,
    user
  }
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    user
  }
}

export function userSaved() {
  history.push('/settings/users/');
  return {
    type: USER_CREATED
  }
}

export function passwordUpdated() {
  history.push('/settings/myaccount/');
  return {
    type: PASSWORD_UPDATED
  }
}

export function formDataChanged(data) {
  return {
    type: FORM_DATA_CHANGED,
    data
  }
}
