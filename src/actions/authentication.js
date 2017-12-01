import axios from 'axios';
import config from 'config';
import appHistory from 'components/common/appHistory';

export const CHECK_IF_AUTHENTICATED = 'CHECK_IF_AUTHENTICATED';
export const CLEAR_TOKEN = 'CLEAR_TOKEN';
export const LOGIN_IN_PROGRESS = 'LOGIN_IN_PROGRESS';
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export function checkIfAuthenticated() {
  return {
    type: CHECK_IF_AUTHENTICATED
  }
}

export function loginInProgress() {
  return {
    type: LOGIN_IN_PROGRESS
  }
}
export function loginSuccessful(token) {
  return {
    type: LOGIN_SUCCESSFUL,
    token
  }
}

export function clearToken() {
  return {
    type: CLEAR_TOKEN
  }
}

function loginFailed(data) {
  return {
    type: LOGIN_FAILED,
    data
  }
}

export function login(credentials) {
  return dispatch => {
    dispatch(loginInProgress());
    axios.post(config.api.root + '/login', credentials)
      .then( (response) => {
        dispatch(loginSuccessful(response.data.token));
        appHistory.push('/');
      })
    .catch(function (response) {
      dispatch(loginFailed(response.data))
    })

  }
}

export function redirectToLogin(){
  return dispatch => {
    appHistory.push('/login');
  }
}

export function logout(){

  appHistory.push('/login');
  return {
    type: CLEAR_TOKEN
  }
}
