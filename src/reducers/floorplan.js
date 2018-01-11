import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';

import {
  FETCH_IMAGE,
  RECEIVE_IMAGE,
  receiveImage,
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_FAILED,
  UPLOAD_IMAGE_SUCCESSFUL,
  uploadImageFailed,
  uploadImageSuccessful,

} from 'actions/floorplan';

const initialState = {
  loading: false,
  uploadImageSuccessful: false,
  uploadImageFailed: false,
  imageURL: '',
};

// function uploadImage(id) {
//   return axios.get(`${config.api.root}/node/image/${id}`)
//     .then(receiveImage)
//     .catch((error) => console.log(error))
// }

function fetchImage(id) {
  return axios.get(`${config.api.root}/node/image/${id}`)
    .then(receiveImage)
    .catch((error) => console.log(error))
}

// Reducing function
export default (state = initialState, action ) => {
  switch (action.type) {

    case UPLOAD_IMAGE: {
      return loop (
        Object.assign({}, initialState, {loading:true}),
        Effects.promise(uploadImage,action.data)
      )
    }
    case UPLOAD_IMAGE_SUCCESSFUL: {
      return Object.assign({}, state, {
        uploadImageSuccessful: true,
        loading: false
      })
    }
    case UPLOAD_IMAGE_FAILED: {
      return Object.assign({}, state, {
        uploadImageFailed: true,
        loading: false
      })
    }

    case FETCH_IMAGE: {
      return loop(
        Object.assign({}, initialState),
        Effects.promise(fetchImage, action.id)
      )
    }
    case RECEIVE_IMAGE: {
      return Object.assign({}, initialState, {imageURL: action.data.url})
    }

      break;
    default: {
      return state;
    }

  }
}
