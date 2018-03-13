import axios from 'axios';
import config from 'config';
import toastr from 'toastr';

export const UPDATE_IN_PROGRESS = 'UPDATE_IN_PROGRESS';
export const UPDATE_FAILED = 'UPDATE_FAILED';
export const USER_UPDATE_COMPLETED = 'USER_UPDATE_COMPLETED';
export const UPDATE_PASSWORD_IN_PROGRESS = 'UPDATE_PASSWORD_IN_PROGRESS';
export const UPDATE_PASSWORD_FAILED = 'UPDATE_PASSWORD_FAILED';
export const UPDATE_PASSWORD_COMPLETED = 'UPDATE_PASSWORD_COMPLETED';
export const FETCH_USER = 'FETCH_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const FETCH_USER_FAILED = 'FECTH_USER_FAILED';

export const SET_WIDGETS = "SET_WIDGETS"
export function setWidgets(nodes) {
    return {
        type: SET_WIDGETS,
        widgets,
    }
}

export const DELETE_WIDGET = 'DELETE_WIDGET';
export function deleteWidget(nodeId) {
  return {
    type: DELETE_WIDGET,
    nodeId
  }
}

export const EDIT_WIDGET = 'EDIT_WDIGET';
export function editWidget(nodeId1, nodeId2) {
  return {
    type: EDIT_WIDGET,
    nodeId1,
    nodeId2
  }
}

export function updateInProgress() {
  return {
    type: UPDATE_IN_PROGRESS
  }
}

export function updateFailed(data) {
  return {
    type: UPDATE_FAILED,
    data
  }
}
export function updateCompleted(data) {
  return {
    type: USER_UPDATE_COMPLETED,
    data
  }
}

export function updatePasswordInProgress() {
  return {
    type: UPDATE_PASSWORD_IN_PROGRESS
  }
}

export function updatePasswordFailed(data) {
  return {
    type: UPDATE_PASSWORD_FAILED,
    data
  }
}
export function updatePasswordCompleted(data) {
  return {
    type: UPDATE_PASSWORD_COMPLETED,
    data
  }
}

export function updateUser(username, user) {
  return dispatch => {
    dispatch(updateInProgress());
    return axios.put(config.api.root + '/user/update/' + username, user)
      .then((response) => {
        dispatch(updateCompleted(response.data));
      })
      .catch(function (response) {
        dispatch(updateFailed(response.data));
      })
  }
}

export function updatePassword(user) {
  return dispatch => {
    dispatch(updatePasswordInProgress());
    return axios.put(config.api.root + '/user/password', user)
      .then((response) => {
        toastr.success(`Update password successfully !`)
        return response;
      })
      .catch(function (response) {
        console.log(response);
        toastr.error(response.data || response.statusText.data);
        return response;
      })
  }
}

export function fetchUser() {
  return {
    type: FETCH_USER
  }
}

export function receiveUser(data) {
  return {
    type: RECEIVE_USER,
    data
  }
}

export function fetchUserFailed(data) {
  return {
    type: FETCH_USER_FAILED,
    data
  }
}

export function fetchCurrentUser() {
  return dispatch => {
    dispatch(fetchUser());
    return axios.get(config.api.root + '/user/me')
      .then((response) => {
        dispatch(receiveUser(response.data));
        return response;
      })
      .catch(function (response) {
        dispatch(fetchUserFailed(response.data || response.statusText));
        throw response;
      })
  }
}
