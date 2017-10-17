import axios from 'axios';
import config from 'config';

export const FETCHING_DATA = 'FETCHING_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const SELECT_LEVEL = 'SELECT_LEVEL';

export function fetchData() {
  return dispatch => {
    dispatch(fetchingData());
    axios.get(config.api.root + '/api')
      .then( (response) => {
        dispatch(receiveData(response.data))
      })
  }
}

export function fetchingData() {
  return {
    type: FETCHING_DATA
  }
}

export function receiveData(data) {
  return {
    type: RECEIVE_DATA,
    data
  }
}

export function selectLevel(level) {
  return {
    type: SELECT_LEVEL,
    level
  }
}