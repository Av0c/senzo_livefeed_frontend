import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';

import {
  FETCH_IMAGE,
  fetchImage,
  RECEIVE_IMAGE,
  receiveImage,
} from 'actions/floorplan';

const initialState = {
  loading: false,
  uploadImageSuccessful: false,
  uploadImageFailed: false,
  images: null,
};

function _fetchImage(id) {
  return axios.get(`${config.api.root}/node/image/${id}`)
    .then(receiveImage)
    .catch(fetchImage(id))
}

// Reducing function
export default (state = initialState, action ) => {
  switch (action.type) {
    case FETCH_IMAGE: {
      return loop(
        Object.assign({}, initialState),
        Effects.promise(_fetchImage, action.id)
      )
    }
    case RECEIVE_IMAGE: {
      console.log(action.data)
      return Object.assign({}, initialState, {images: action.data})
    }

      break;
    default: {
      return state;
    }

  }
}
