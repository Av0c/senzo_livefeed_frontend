import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';
import * as Node from 'actions/node';

const initialState = {
  loading: false,
  roomInUse: 0,
  deskInUse: 0,
  map: null,
};

function fetchLiveData(id) {
  return axios.get(config.api.root + `/sensor/live/${id}`)
    .then(Node.receiveLiveData)
    .catch(Node.fetchFailed);
}

export default function (state = initialState, action) {
  switch (action.type) {
    case Node.FETCH_LIVE_DATA: {
      return loop(
        Object.assign({}, state, { loading: true }),
        Effects.promise(fetchLiveData, action.id)
      );
    }

    case Node.RECEIVE_LIVE_DATA: {
      let map = new Map();
      action.data.forEach(function (element) {
        // Dummy test...
        // if (element.id%3==0) {
        //   element.inuse = true;
        // } else if (element.id%3==1) {
        //   element.standby = true;
        // }
        map.set(element.id, element);
      })
      return Object.assign({}, state, {
        map: map
      });
    }

    case Node.FETCH_FAILED: {
      return Object.assign({}, state, {
        error: action.data
      });
    }

    case Node.SELECT_NODE_STATS: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    default: {
      return state;
    }
  }
}

