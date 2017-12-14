import axios from 'axios';
import config from 'config';

export const UPDATE_IN_PROGRESS = 'UPDATE_IN_PROGRESS';
export const UPDATE_FAILED = 'UPDATE_FAILED';
export const UPDATE_COMPLETED = 'UPDATE_COMPLETED';
export const FETCH_USER = 'FETCH_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const FETCH_USER_FAILED = 'FECTH_USER_FAILED';

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
    type: UPDATE_COMPLETED,
    data
  }
}

export function updateUser(user) {
  return dispatch => {
    dispatch(updateInProgress());
    return axios.put(config.api.root + '/user/update')
      .then((response) => {
        dispatch(updateCompleted(response.data));
      })
      .catch(function (response) {
        dispatch(updateFailed(response.data));
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
      })
      .catch(function (response) {
        dispatch(fetchUserFailed(response.data));
      })
  }
}
