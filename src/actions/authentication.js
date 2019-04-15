import axios from 'axios';
import config from 'config';
import appHistory from 'components/common/appHistory';
import toastr from "toastr"

export const CHECK_IF_AUTHENTICATED = 'CHECK_IF_AUTHENTICATED';
export const CLEAR_TOKEN = 'CLEAR_TOKEN';

export const LOGIN = 'LOGIN';
export const LOGIN_OK = 'LOGIN_OK';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const SEND_RESET_PW = 'SEND_RESET_PW';
export const SEND_RESET_PW_OK = 'SEND_RESET_PW_OK';
export const SEND_RESET_PW_FAILED = 'SEND_RESET_PW_FAILED';

export const RESET_PW_GET_USER = 'RESET_PW_GET_USER';
export const RESET_PW_GET_USER_OK = 'RESET_PW_GET_USER_OK';
export const RESET_PW_GET_USER_FAILED = 'RESET_PW_GET_USER_FAILED';

export const RESET_PASSWORD = 'RESET_PASSWORD';

export function checkIfAuthenticated() {
  return {
    type: CHECK_IF_AUTHENTICATED
  }
}

export function clearToken() {
  return {
    type: CLEAR_TOKEN
  }
}

// Login
export function loginOk(token) {
  return {
    type: LOGIN_OK,
    token
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
    dispatch({type: LOGIN, credentials: credentials});
    return axios.post(config.api.root + '/login', credentials)
      .then((response) => {
        dispatch(loginOk(response.data.token));

        var old = localStorage.getItem("redirect")
        if (!old) {
          old = "/dashboard";
        }
        appHistory.push(old);

      })
    .catch((response) => {
      dispatch(loginFailed(response.data || response.statusText))
    })
  }
}

// Forgot password
export function sendResetPWOk(data) {
  return {
    type: SEND_RESET_PW_OK,
    data
  }
}
export function sendResetPWFailed(data) {
  return {
    type: SEND_RESET_PW_FAILED,
    data
  }
}
export function sendResetPW(data) {
  return dispatch => {
    dispatch({type: SEND_RESET_PW, data: data});
    return axios.post(config.api.root + '/user/resetpassword/send', data)
      .then((response) => {
        dispatch(sendResetPWOk(response));
        return response
      })
      .catch((response) => {
        dispatch(sendResetPWFailed(response.data || response.statusText.data))
        return response
      })
  }
}

// Get user to reset Password
export function resetPWGetUserOk(data) {
  return {
    type: RESET_PW_GET_USER_OK,
    data
  }
}
export function resetPWGetUserFailed(data) {
  return {
    type: RESET_PW_GET_USER_FAILED,
    data
  }
}
export function resetPWGetUser(key) {
  return dispatch => {
    dispatch({type: RESET_PW_GET_USER, key: key});
    return axios.get(config.api.root + '/user/resetpassword/check/'+key)
      .then((response) => {
        dispatch(resetPWGetUserOk(response.data));
        return response;
      })
      .catch((response) => {
        console.log(response);
        dispatch(resetPWGetUserFailed(response.data));
        return response;
      })
  }
}

// Reset password
export function resetPassword(key, username, newPassword) {
  return dispatch => {
    dispatch({type: RESET_PASSWORD, key: key, newPassword: newPassword});
    return axios.put(config.api.root + '/user/resetpassword/reset/'+key, {new: newPassword})
      .then((response) => {
        dispatch(login({username: username, password: newPassword}));
        return response;
      })
      .catch((response) => {
        console.log(response);
        toastr.error(response.data)
        return response;
      })
  }
}

export const SET_API_KEY = "SET_API_KEY";
export function setAPIKey(apikey) {
  return {
    type: SET_API_KEY,
    apikey,
  }
}


// ---
export function redirectToLogin(){
  return dispatch => {
    appHistory.push('/login');
  }
}
