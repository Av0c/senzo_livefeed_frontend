import axios from 'axios';
import config from 'config';

export const FETCHING_UTILIZATION_DATA = 'FETCHING_UTILIZATION_DATA';
export const RECEIVE_UTILIZATION_DATA = 'RECEIVE_UTILIZATION_DATA';
export const FETCHING_FAILED = 'FETCHING_FAILED';

export function fetchUtilization(siteId, startDate, endDate = new Date().toISOString()) {
  return dispatch => {
    dispatch(fetchingUtilizationData());
    axios.get(config.api.root + `/api/site/${siteId}/utilization/${startDate}/${endDate}`)
      .then( response => {
        dispatch(receiveUtilizationData(response.data))
      })
      .catch( response => {
        dispatch(fetchingFailed())
      })
  }
}

function fetchingUtilizationData() {
  return {
    type: FETCHING_UTILIZATION_DATA
  }
}

function receiveUtilizationData(data) {
  return {
    type: RECEIVE_UTILIZATION_DATA,
    data
  }
}

function fetchingFailed() {
  return {
    type: FETCHING_FAILED
  }
}
