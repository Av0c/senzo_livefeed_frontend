import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';
import { combineReducers } from 'redux-loop';

import {
  FETCH_SENSOR_STATISTICS,
  RECEIVE_SENSOR_STATISTICS,
  receiveSensorStatistics,
  FETCHING_FAILED,
  fetchingFailed,
  FETCH_AREA_DATA,
  FETCH_MEETING_ROOM_DATA,
  FETCH_SITE_DATA
} from 'actions/locations';

import areaReducer from './location/area'
import meetingRoomReducer from './location/meetingroom'
import siteReducer from './location/site'

const initialState = {
  loading: false,
  sensorStatistics: {
    desks: 0,
    desksInUse: 0,
    maintenance: 0,
    meetingRooms: 0,
    sensors: 0,
    sensorsInUse: 0
  },
};

function commonReducer(state = initialState, action) {
  switch (action.type) {


    case FETCH_SITE_DATA:
    case FETCH_AREA_DATA:
    case FETCH_MEETING_ROOM_DATA: {
      return Object.assign({}, initialState)
    }

    case RECEIVE_SENSOR_STATISTICS: {
      return Object.assign({}, state, {
        sensorStatistics: action.data
      })
    }

    case FETCHING_FAILED: {
      return Object.assign({}, state)
    }

    default:
      return state;
  }
}

export default combineReducers({
  area: areaReducer,
  meetingRoom: meetingRoomReducer,
  site: siteReducer,
  common: commonReducer
})