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
      maintenance: 0
    },
    info: {
      name: ''
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
      meetingRooms: 0
    }
  }
};

function fetchCustomerOverview(id) {
  return axios.get(config.api.root + `/node/structure/${id}`)
    .then(receiveCustomerOverview)
    .catch(fetchingFailed)
}

function fetchUtilizationOverview(settings) {
  return axios.get(config.api.root + `/api/utilization/overview?period=${settings.period.code}&mode=${settings.mode.code}`)
    .then(receiveUtilizationOverview)
    .catch(fetchingFailed)
}

function countTreeStatistic(root) {
  var statistic = {
    allRooms: 0,
    meetingRooms: 0,
    workingRooms: 0,
    allSensors: 0,
    meetingSensors: 0,
    workingSensors: 0
  };

  count(root, statistic)
  return statistic;
}

function count(root, statistic) {
  root.children.forEach(function (node) {
    if (node.type != 'meeting_room' && node.type != 'open_area') {
      count(node, statistic);
    }
    else if (node.children === null) {
      return;
    }
    else {
      statistic.allRooms++;
      let len = node.children.length;
      if (node.type == 'meeting_room') {
        statistic.meetingRooms++;
        statistic.meetingSensors += len;
      }
      else {
        statistic.workingRooms++;
        statistic.workingSensors += len;
      }
      statistic.allSensors += len;
    }
  });

}

export default (state = initialState, action) => {

  switch (action.type) {
    case FETCH_CUSTOMER_OVERVIEW: {
      return loop(
        Object.assign({}, state, { loading: true }),
        Effects.promise(fetchCustomerOverview, action.id)
      );
    }

    case RECEIVE_CUSTOMER_OVERVIEW: {
      let statistic = countTreeStatistic(action.data);
      return Object.assign({}, state, {
        loading: false,
        customerOverview: action.data,
        treeStatistic: statistic
      })
    }

    case FETCH_UTILIZATION_OVERVIEW: {
      return loop(
        Object.assign({}, state, { loading: true }),
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