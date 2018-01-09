import axios from 'axios';
import config from 'config';

export const SET_CURRENT_NODE = 'SET_CURRENT_NODE';
export function setCurrentNode(node) {
  return {
    type: SET_CURRENT_NODE,
    node
  }
}

export const ADD_NODE_WIDGET = 'ADD_NODE_WIDGET';
export function addNodeWidget(node) {
  return {
    type: ADD_NODE_WIDGET,
    node
  }
}

export const FETCH_CUSTOMER_OVERVIEW = 'FETCH_CUSTOMER_OVERVIEW';
export function fetchCustomerOverview(id) {
  return {
    type: FETCH_CUSTOMER_OVERVIEW,
    id
  };
}

function addParent(root) {
  root.children.map((x)=> {
    x.parent = root;
    addParent(x);
  });
}

function makeMap(root, map) {
  map[root.id] = root;
  root.children.map((x)=> {
    makeMap(x, map);
  });
}

export const RECEIVE_CUSTOMER_OVERVIEW = 'RECEIVE_CUSTOMER_OVERVIEW';
export function receiveCustomerOverview(result) {
  addParent(result.data);
  var map = {};
  makeMap(result.data, map);
  return {
    type: RECEIVE_CUSTOMER_OVERVIEW,
    data: result.data,
    map: map
  }
}

export const FETCHING_FAILED = 'FETCHING_FAILED';
export function fetchingFailed() {
  return {
    type: FETCHING_FAILED
  }

}