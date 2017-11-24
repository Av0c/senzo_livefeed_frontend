import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';

import { FETCH_LIVE_DATA, RECEIVE_LIVE_DATA, receiveLiveData, fetchFailed, FETCH_FAILED, SELECT_NODE_STATS } from 'actions/node';

const initialState = {
  loading: false,
  roomInUse: 0,
  deskInUse: 0,
  map: new Map()
};

function fetchLiveData(id) {
  return axios.get(config.api.root + `/sensor/live/${id}`)
    .then(receiveLiveData)
    .catch(fetchFailed);
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_LIVE_DATA: {
      return loop(
        Object.assign({}, state, { loading: true }),
        Effects.promise(fetchLiveData, action.id)
      );
    }

    case RECEIVE_LIVE_DATA: {
      let map = new Map();
      action.data.forEach(function (element) {
        map.set(element.id, element);
      })
      console.log(RECEIVE_LIVE_DATA, map);
      return Object.assign({}, state, {
        map: map
      });
    }

    case FETCH_FAILED: {
      return Object.assign({}, state, {
        error: action.data
      });
    }

    case SELECT_NODE_STATS: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    default: {
      return state;
    }
  }
}

