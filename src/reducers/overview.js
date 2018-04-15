import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';
import store from '../store';

import * as a from 'actions/overview'

const initialState = {
  loading: false,
  currentNode: null,
  customerOverview: null,
  nodeMap: {},
  MACMap: {},
  widgets: [],
  card: {},
};

function fetchCustomerOverview(id) {
  if (!id) {
    id = store.getState().myAccountReducer.user.companyid;
  }
  return axios.get(config.api.root + `/node/structure/${id}`)
    .then((response) => {
      return a.receiveCustomerOverview(response);
    }).catch((error) => {
      console.log(error);
      return a.fetchingFailed(error);
    });
}

function fetchCard() {
  return axios.get(config.api.root + `/card`)
    .then((response) => {
      return a.fetchCardOk(response);
    }).catch((error) => {
      console.log(error);
      return a.fetchingFailed(error);
    });
}

export default (state = initialState, action) => {
  switch (action.type) {
    case a.FETCH_CUSTOMER_OVERVIEW: {
      return loop(
        Object.assign({}, state, { loading: true }),
        Effects.promise(fetchCustomerOverview, action.id)
      );
    }

    case a.RECEIVE_CUSTOMER_OVERVIEW: {
      return Object.assign({}, state, {
        loading: false,
        customerOverview: action.data,
        widgets: [...state.widgets, action.data],
        currentNode: action.data,
        nodeMap: action.nodeMap,
        MACMap: action.MACMap,
      })
    }

    case a.SET_CURRENT_NODE: {
      return Object.assign({}, state, {
        currentNode: action.node
      });
    }

    case a.ADD_NODE_WIDGET: {
      return Object.assign({}, state, {
        widgets: [...state.widgets, action.node]
      });
    }

    default: {
      return state
    }
  }
}