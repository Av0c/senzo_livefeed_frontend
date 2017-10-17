/**
 * Created by thar on 14/06/16.
 */
import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';

import {
  FETCH_SITE_DATA,
  RECEIVE_SITE_DATA,
  APPLY_SITE_QUERY,
  receiveSiteData,
  receiveSensorStatistics,
  clearSensorStatistics,
  fetchingFailed
} from 'actions/locations'

const initialState = {
  loading: false,
  sensorStatistics: {},
  sites: []
};

function fetchSiteData(id, settings) {
  return axios.get(`${config.api.root}/api/site/${id}/overview?period=${settings.period.code}&mode=${settings.mode.code}&from=${settings.from}&to=${settings.to}`)
    .then(receiveSiteData)
    .catch(fetchingFailed);
}

function fetchSensorStatistics(locationId) {
  return axios.get(`${config.api.root}/api/sensor/statistics/site/${locationId}`)
    .then(receiveSensorStatistics)
    .catch(fetchingFailed)
}

export default(state = initialState, action) => {
  switch (action.type) {

    case FETCH_SITE_DATA: {
      return loop (
        Object.assign({}, initialState, {loading: true}),
        Effects.batch([
          Effects.promise(fetchSiteData, action.id, action.settings),
          Effects.promise(fetchSensorStatistics, action.id)
        ])
      )
    }

    case RECEIVE_SITE_DATA: {
      return Object.assign({}, state, {
        loading: false,
        sites: action.data
      })
    }

    case APPLY_SITE_QUERY: {
      return loop (
        Object.assign({}, state, {loading: true}),
        Effects.promise(fetchSiteData, action.id, action.settings)
      );
    }

    default:
      return state;
  }

}
