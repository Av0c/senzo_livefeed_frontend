import axios from 'axios';
import config from 'config';

export const FETCH_CUSTOMER_OVERVIEW = 'FETCH_CUSTOMER_OVERVIEW';
export const RECEIVE_CUSTOMER_OVERVIEW = 'RECEIVE_CUSTOMER_OVERVIEW';
export const FETCH_UTILIZATION_OVERVIEW = 'FETCH_UTILIZATION_OVERVIEW';
export const RECEIVE_UTILIZATION_OVERVIEW = 'RECEIVE_UTILIZATION_OVERVIEW';
export const FETCHING_OVERVIEW_DATA = 'FETCHING_OVERVIEW_DATA';
export const FETCHING_OVERVIEW_SITE_DATA = 'FETCHING_OVERVIEW_SITE_DATA';
export const RECEIVE_OVERVIEW_DATA = 'RECEIVE_OVERVIEW_DATA';
export const RECEIVE_OVERVIEW_SITE_DATA = 'RECEIVE_OVERVIEW_SITE_DATA';
export const FETCH_TREE_OVERVIEW = 'FETCH_TREE_OVERVIEW';
export const RECEIVE_TREE_OVERVIEW = 'RECEIVE_TREE_OVERVIEW';
export const GET_NODE_STATISTIC = 'GET_NODE_STATISTIC';
export const FETCHING_FAILED = 'FETCHING_FAILED';
export const ADD_NODE_WIDGET = 'ADD_NODE_WIDGET';
export const SET_CURRENT_NODE = 'SET_CURRENT_NODE';
export const SET_ROOT_NODE = 'SET_ROOT_NODE';

export function setRootNode(node) {
  return {
    type: SET_ROOT_NODE,
    node
  }
}

export function setCurrentNode(node) {
  return {
    type: SET_CURRENT_NODE,
    node
  }
}

export function addNodeWidget(node) {
  return {
    type: ADD_NODE_WIDGET,
    node
  }
}

export function getNodeStatistic(node){
  return {
    type: GET_NODE_STATISTIC,
    node
  };
}

export function fetchCustomerOverview(id, map) {
  return {
    type: FETCH_CUSTOMER_OVERVIEW,
    id,
    map
  };
}

export function fetchUtilizationOverview(settings) {
  return {
    type: FETCH_UTILIZATION_OVERVIEW,
    settings
  }
}

export function receiveCustomerOverview(result, map) {
  return {
    type: RECEIVE_CUSTOMER_OVERVIEW,
    data: result.data,
    map: map
  }
}

export function receiveUtilizationOverview(result) {
  return {
    type: RECEIVE_UTILIZATION_OVERVIEW,
    data: result.data
  }
}

export function fetchingFailed() {
  return {
    type: FETCHING_FAILED
  }

}

export function fetchTreeOverview() {
  return {
    type: FETCH_TREE_OVERVIEW
  }
}

export function receiveTreeOverview(data) {
  return {
    type: RECEIVE_TREE_OVERVIEW,
    data: data
  }
}

export function loadTreeOverview(id) {
  return dispatch => {
    dispatch(fetchTreeOverview());
    axios.get(config.api.root + '/node/structure/' + id).then((response) => {
      dispatch(receiveTreeOverview(response.data));
    });
  }
}