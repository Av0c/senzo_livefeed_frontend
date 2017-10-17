/**
 * Created by thar on 14/06/16.
 */
import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';

import {
  FETCH_AREA_DATA,
  RECEIVE_AREA_DATA,
  APPLY_AREA_QUERY,
  EXPORT_AREA_UTILIZATION_CSV,
  receiveAreaData,
  receiveSensorStatistics,
  fetchingFailed
} from 'actions/locations'

const initialState = {
  loading: false,
  timeSeries: {
    current: [],
    previous: []
  }
};

export function fetchAreaData(id, settings) {
  return axios.get(`${config.api.root}/api/area/${id}/overview?period=${settings.period.code}&mode=${settings.mode.code}&from=${settings.from}&to=${settings.to}`)
    .then(receiveAreaData)
    .catch(fetchingFailed);
}

function fetchSensorStatistics(locationId) {
  return axios.get(`${config.api.root}/api/sensor/statistics/area/${locationId}`)
    .then(receiveSensorStatistics)
    .catch(fetchingFailed)
}

export default(state = initialState, action) => {
  switch (action.type) {

    case FETCH_AREA_DATA: {
      return loop (
        Object.assign({}, initialState, {loading: true}),
        Effects.batch([
          Effects.promise(fetchAreaData, action.id, action.settings),
          Effects.promise(fetchSensorStatistics, action.id)
        ])
      );
    }

    case APPLY_AREA_QUERY: {
      return loop (
        Object.assign({}, state, {loading: true}),
        Effects.promise(fetchAreaData, action.id, action.settings)
      );
    }

    case RECEIVE_AREA_DATA: {
      return Object.assign({}, state, {
        loading: false,
        timeSeries: action.data
      });
    }
    case EXPORT_AREA_UTILIZATION_CSV: {
      const token = localStorage.getItem("token") || "";
      window.open(`${config.api.root}/api/area/${action.id}/csv?period=${action.settings.period.code}&mode=${action.settings.mode.code}&token=${token}&from=${action.settings.from}&to=${action.settings.to}`);
      return state;
    }


    default:
      return state;
  }

}


