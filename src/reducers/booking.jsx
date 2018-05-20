import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';
import store from '../store';

import * as a from 'actions/booking'

const initialState = {
  loading: false,
  currentNode: null,
  bookings: null,
  date: null,
};

function fetchBookings(id, date) {
  if (!id) {
    if (store.getState().bookingReducer.currentNode && store.getState().bookingReducer.currentNode.id) {
      id = store.getState().bookingReducer.currentNode.id
    } else {
      id = store.getState().myAccountReducer.user.companyid;
    }
  }
  return axios.get(config.api.root + `/booking/webapp/${id}?date=${date}`)
    .then((response) => {
      return a.receiveBookings(response);
    }).catch((error) => {
      console.log(error);
      return a.fetchingFailed(error);
    });
}

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case a.FETCH_BOOKINGS: {
      return loop(
        Object.assign({}, state, { loading: true, date: action.date }),
        Effects.promise(fetchBookings, action.id, action.date)
      );
    }

    case a.RECEIVE_BOOKINGS: {
      return Object.assign({}, state, {
        loading: false,
        bookings: action.data,
        currentNode: action.data,
      })
    }

    case a.SET_CURRENT_NODE: {
      return Object.assign({}, state, {
        currentNode: action.node
      });
    }

    default: {
      return state
    }
  }
}