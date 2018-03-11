import { fetchCustomerOverview } from 'actions/overview'
import axios from 'axios';
import store from '../store';
import config from 'config';

export const FETCH_CARD = "FETCH_CARD"
export const FETCH_CARD_OK = "FETCH_CARD_OK"
export const FETCH_CARD_FAIL = "FETCH_CARD_FAIL"
export function fetchCard() {
  return {
    type: FETCH_CARD
  }
}
function makeCardMap(data) {
  var map = {}
  data.map((x) => {
    map[x.id] = x;
  })
  return map
}
export function fetchCardOk(result) {
  return {
    type: FETCH_CARD_OK,
    cardMap: makeCardMap(result.data)
  }
}
export function fetchCardFail(result) {
  return {
    type: FETCH_CARD_FAIL,
    e: result
  }
}

export const UPDATE_CARD = "UPDATE_CARD"
export const UPDATE_CARD_OK = "UPDATE_CARD_OK"
export const UPDATE_CARD_FAIL = "UPDATE_CARD_FAIL"
export function updateCard(card) {
  return {
    type: UPDATE_CARD,
    card
  }
}
export function updateCardOk(result) {
  return {
    type: UPDATE_CARD_OK,
    e: result
  }
}
export function updateCardFail(result) {
  return {
    type: UPDATE_CARD_FAIL,
    e: result
  }
}

export const ADD_CARD = "ADD_CARD"
export const ADD_CARD_OK = "ADD_CARD_OK"
export const ADD_CARD_FAIL = "ADD_CARD_FAIL"
export function addCard(card) {
  return {
    type: ADD_CARD,
    card
  }
}
export function addCardOk(result) {
  return {
    type: ADD_CARD_OK,
    e: result
  }
}
export function addCardFail(result) {
  return {
    type: ADD_CARD_FAIL,
    e: result
  }
}

export function deleteCard(card) {
  return dispatch => {
    axios.delete(config.api.root + `/card/delete/${card.id}`)
    .then((response) => {
      dispatch(fetchCustomerOverview());
      dispatch(fetchCard());
    });
  }
}

export const ADD_NODE_TO_CARD = "ADD_NODE_TO_CARD"
export const ADD_NODE_TO_CARD_OK = "ADD_NODE_TO_CARD_OK"
export const ADD_NODE_TO_CARD_FAIL = "ADD_NODE_TO_CARD_FAIL"
export function addNodeToCard(node, card) {
  return {
    type: ADD_NODE_TO_CARD,
    node,
    card,
  }
}
export function addNodeToCardOk(result) {
  return {
    type: ADD_NODE_TO_CARD_OK,
    e: result
  }
}
export function addNodeToCardFail(result) {
  return {
    type: ADD_NODE_TO_CARD_FAIL,
    e: result
  }
}