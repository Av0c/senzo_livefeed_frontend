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
  fetchingFailed,
  SET_CURRENT_NODE,
  ADD_NODE_WIDGET
} from 'actions/overview'

const initialState = {
  loading: false,
  currentNode: {
    sensorStatistics: {
      sensors: 0,
      sensorsInUse: 0,
      desks: 0,
      meetingRooms: 0,
      maintenance: 0
    },
    info: {
      name: ''
    },
    children: []
  },
  customerOverview: {
    id: -2,
    parent: null,
    info: {
      name: '',
      empty: true
    },
    children: []
  },
  nodeMap: {},
  widgets: []
};

function fetchCustomerOverview(id) {
  return axios.get(config.api.root + `/node/structure/${id}`)
    .then((response) => {
      return receiveCustomerOverview(response);
    }).catch((error) => {
      console.log(error);
      return fetchingFailed(error);
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
      return Object.assign({}, state, {
        loading: false,
        customerOverview: action.data,
        widgets: [...state.widgets, action.data],
        currentNode: action.data,
        nodeMap: action.map
      })
    }

    case SET_CURRENT_NODE: {
      return Object.assign({}, state, {
        currentNode: action.node
      });
    }

    case ADD_NODE_WIDGET: {
      return Object.assign({}, state, {
        widgets: [...state.widgets, action.node]
      });
    }

    default: {
      return state
    }
  }
}