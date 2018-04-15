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

function makeNodeMap(root, map) {
  map[root.id] = root;
  root.children.map((x)=> {
    makeNodeMap(x, map);
  });
}
function makeMACMap(root, map) {
  if (root.type == "sensor") {
    map[root.info.details.macaddress] = root;
  }
  root.children.map((x)=> {
    makeMACMap(x, map);
  });
}

export const RECEIVE_CUSTOMER_OVERVIEW = 'RECEIVE_CUSTOMER_OVERVIEW';
export function receiveCustomerOverview(result) {
  addParent(result.data);
  var nodeMap = {}, MACMap = {};
  makeNodeMap(result.data, nodeMap);
  makeMACMap(result.data, MACMap);
  return {
    type: RECEIVE_CUSTOMER_OVERVIEW,
    data: result.data,
    nodeMap: nodeMap,
    MACMap: MACMap,
  }
}

export const FETCHING_FAILED = 'FETCHING_FAILED';
export function fetchingFailed() {
  return {
    type: FETCHING_FAILED
  }
}