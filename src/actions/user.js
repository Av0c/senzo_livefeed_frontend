import history from 'components/common/appHistory';

// Invite new user
export const INVITE_USER = 'INVITE_USER';
export const INVITE_USER_OK = 'INVITE_USER_OK';
export const INVITE_USER_FAIL = 'INVITE_USER_FAIL';

export function inviteUser(inv) {
  return {
    type: INVITE_USER,
    inv
  }
}
export function inviteUserOk(e) {
  return {
    type: INVITE_USER_OK,
    e
  }
}
export function inviteUserFail(e) {
  return {
    type: INVITE_USER_FAIL,
    e
  }
}


// Check invite key valid or not.
export const CHECK_INVITE_KEY = 'GET_INVITE_KEY';
export const CHECK_INVITE_KEY_OK = 'GET_INVITE_KEY_OK';
export const CHECK_INVITE_KEY_FAIL = 'GET_INVITE_KEY_FAIL';

export function checkInviteKey(key) {
  return {
    type: CHECK_INVITE_KEY,
    key
  }
}
export function checkInviteKeyOk(e) {
  return {
    type: CHECK_INVITE_KEY_OK,
    e
  }
}
export function checkInviteKeyFail(e) {
  return {
    type: CHECK_INVITE_KEY_FAIL,
    e
  }
}

// Create new user
export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_OK = 'CREATE_USER_OK';
export const CREATE_USER_FAIL = 'CREATE_USER_FAIL';

export function createUser(key, user) {
  return {
    type: CREATE_USER,
    user,
    key
  }
}
export function createUserOk(e) {
  return {
    type: CREATE_USER_OK,
    e
  }
}
export function createUserFail(e) {
  return {
    type: CREATE_USER_FAIL,
    e
  }
}

// List contacts
export const LIST_CONTACT = "LIST_CONTACT"
export const LIST_CONTACT_OK = "LIST_CONTACT_OK"
export const LIST_CONTACT_FAIL = "LIST_CONTACT_FAIL"

export function listContact() {
  return {
    type: LIST_CONTACT
  }
}
export function listContactOk(e) {
  return {
    type: LIST_CONTACT_OK,
    e
  }
}
export function listContactFail(e) {
  return {
    type: LIST_CONTACT_FAIL,
    e
  }
}

// Select a user to delete
export const SELECT_DELETE_USER = "SELECT_DELETE_USER"

export function selectDeleteUser(username) {
  return {
    type: SELECT_DELETE_USER,
    username
  }
}

export const RECEIVE_RESPOND = 'RECEIVE_RESPOND';

// Delete a user
export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_OK = 'DELETE_USER_OK';
export const DELETE_USER_FAIL = 'DELETE_USER_FAIL';

export function deleteUser(username) {
  return {
    type: DELETE_USER,
    username
  }
}
export function deleteUserOk(e) {
  return {
    type: DELETE_USER_OK,
    e
  }
}
export function deleteUserFail(e) {
  return {
    type: DELETE_USER_FAIL,
    e
  }
}