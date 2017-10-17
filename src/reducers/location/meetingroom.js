/**
 * Created by thar on 14/06/16.
 */
import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';

import {
  FETCH_MEETING_ROOM_DATA,
  RECEIVE_MEETING_ROOM_DATA,
  APPLY_MEETING_ROOM_QUERY,
  receiveMeetingRoomData,
  receiveSensorStatistics,
  clearSensorStatistics,
  fetchingFailed
} from 'actions/locations'

const initialState = {
  loading: false,
  timeSeries: {
    current: [],
    previous: []
  }
};

function fetchMeetingRoomData(id, settings) {
  return axios.get(`${config.api.root}/api/meetingroom/${id}/overview?period=${settings.period.code}&mode=${settings.mode.code}&from=${settings.from}&to=${settings.to}`)
    .then(receiveMeetingRoomData)
    .catch( () => console.error("Failed to fetch"))
}

function fetchSensorStatistics(locationId) {
  return axios.get(`${config.api.root}/api/sensor/statistics/meetingroom/${locationId}`)
    .then(receiveSensorStatistics)
    .catch(fetchingFailed)
}

export default(state = initialState, action) => {
  switch (action.type) {

    case FETCH_MEETING_ROOM_DATA: {
      return loop (
        Object.assign({}, initialState, {loading: true}),
        Effects.batch([
          Effects.promise(fetchMeetingRoomData, action.id, action.settings),
          Effects.promise(fetchSensorStatistics, action.id)
        ])
      )
    }
    case APPLY_MEETING_ROOM_QUERY: {
      return loop (
        Object.assign({}, state, {loading: true}),
        Effects.promise(fetchMeetingRoomData, action.id, action.settings)
      );
    }

    case RECEIVE_MEETING_ROOM_DATA: {
      return Object.assign({}, state, {
        loading: false,
        timeSeries: action.data
      })
    }


    default:
      return state;
  }

}