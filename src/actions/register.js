import axios from 'axios';
import config from 'config';
import { browserHistory } from 'react-router';
import { appHistory } from 'components/common/appHistory';

export const CHECK_IF_AUTHENTICATED = 'CHECK_IF_AUTHENTICATED';
export const CLEAR_TOKEN = 'CLEAR_TOKEN';
export const REGISTER_IN_PROGRESS = 'REGISTER_IN_PROGRESS';
export const REGISTER_SUCCESSFUL = 'REGISTER_SUCCESSFUL';
export const REGISTER_FAILED = 'REGISTER_FAILED';

/*export function checkIfAuthenticated() {
  return {
    type: CHECK_IF_AUTHENTICATED
  }
}*/

export function registerInProgress() {
  return {
    type: REGISTER_IN_PROGRESS
  }
}
export function registerSuccessful(token) {
  return {
    type: REGISTER_SUCCESSFUL,
    token
  }
}

export function register(credentials) {
  return dispatch => {
    dispatch(registerInProgress());
    axios.post(config.api.root + '/register', credentials)
      .then( (response) => {
        dispatch(registerSuccessful(response.data.token))
        appHistory.push('/');
      })
    .catch(function (response) {
      console.log(response);
    })

  }
}
