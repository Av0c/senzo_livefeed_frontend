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

// Reset invitation status text
export const RESET_INVITE_STATUS = "RESET_INVITE_STATUS";
export function resetInviteStatus() {
  return {
    type: RESET_INVITE_STATUS,
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

// Set contactFetched to false
export const NEED_CONTACT = "NEED_CONTACT"
export function needContact() {
  return {
    type: NEED_CONTACT
  }
}

// Select a user to delete
export const SELECT_USER = "SELECT_USER"

export function selectUser(user) {
  return {
    type: SELECT_USER,
    user
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

// Select node filter
export const USERAD_SELECT_NODE = "USERAD_SELECT_NODE"

export function useradSelectNode(node) {
  return {
    type: USERAD_SELECT_NODE,
    node
  }
}

//Select user filter
export const USERAD_SELECT_TYPE = "USERAD_SELECT_TYPE"

export function useradSelectType(code) {
  return {
    type: USERAD_SELECT_TYPE,
    code
  }
}

// Edit user
export const EDIT_USER = 'EDIT_USER';
export const EDIT_USER_OK = 'EDIT_USER_OK';
export const EDIT_USER_FAIL = 'EDIT_USER_FAIL';

export function editUser(username) {
  return {
    type: EDIT_USER,
    username
  }
}
export function editUserOk(e) {
  return {
    type: EDIT_USER_OK,
    e
  }
}
export function editUserFail(e) {
  return {
    type: EDIT_USER_FAIL,
    e
  }
}