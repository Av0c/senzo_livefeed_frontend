import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';

import {
  FETCH_CUSTOMER_OVERVIEW,
  RECEIVE_CUSTOMER_OVERVIEW,
  receiveCustomerOverview,
  FETCH_UTILIZATION_OVERVIEW,
  RECEIVE_UTILIZATION_OVERVIEW,
  receiveUtilizationOverview,
  fetchingFailed
} from 'actions/overview'

const initialState = {
  loading: false,
  customerOverview: {
    companyName: '',
    quarterlyUtilization: 0,
    previousQuarterUtilization: 0,
    sensorStatistics: {
      sensors: 0,
      sensorsInUse: 0,
      desks: 0,
      meetingRooms: 0,
      maintenance: 0,
    }
  },
  utilizationOverview: {
    deskUtilization: {
      firstValue: 0,
      secondValue: 0,
      id: 0,
      name: ""
    },
    lowUtilizedAreas: [],
    lowUtilizedMeetingRooms: [],
    meetingRoomUtilization: {
      firstValue: 0,
      secondValue: 0,
      id: 0,
      name: ""
    },
    sensorStatistics: {
      desks: 0,
      meetingRooms: 0,
    }
  }
};

function fetchCustomerOverview() {
  return axios.get(config.api.root + `/api/overview`)
    .then(receiveCustomerOverview)
    .catch(fetchingFailed)
}

function fetchUtilizationOverview(settings) {
  return axios.get(config.api.root + `/api/utilization/overview?period=${settings.period.code}&mode=${settings.mode.code}`)
    .then(receiveUtilizationOverview)
    .catch(fetchingFailed)
}

export default (state = initialState, action ) => {

  switch (action.type) {
    case FETCH_CUSTOMER_OVERVIEW: {
      return loop (
        Object.assign({}, state, {loading: true}),
        Effects.promise(fetchCustomerOverview)
      );
    }

    case RECEIVE_CUSTOMER_OVERVIEW: {
      return Object.assign({}, state, {
        loading: false,
        customerOverview: action.data,
      })
    }

    case FETCH_UTILIZATION_OVERVIEW: {
      return loop (
        Object.assign({}, state, {loading: true}),
        Effects.promise(fetchUtilizationOverview, action.settings)
      )
    }
    case RECEIVE_UTILIZATION_OVERVIEW: {
      return Object.assign({}, state, {
        loading: false,
        utilizationOverview: action.data
      })
    }

    default: {
      return state
    }
  }
}