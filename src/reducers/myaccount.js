import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';

import {
  UPDATE_USER,
  USER_UPDATE_COMPLETED,
  updateFailed,
  updateCompleted, 
  RECEIVE_USER,
  DELETE_WIDGET
} from 'actions/myaccount'

const initialState = {
  loading: false,
  user: null
}

function updateUser(user){
  return axios.post(config.api.root + `/api/user/${user.id}`)
    .then(updateCompleted)
    .catch(updateFailed)
}

export default (state = initialState, action ) => {

  switch (action.type) {
    //case UPDATE_USER: {
    //  return loop (
    //    Object.assign({}, initialState, {loading: true}),
    //    Effects.promise(updateUser)
    //  )
    //}

    case USER_UPDATE_COMPLETED: {
      console.log(action.data);
      return Object.assign({}, state, {
        loading: false,
        user: action.data
      });
    }

    case RECEIVE_USER: {
      return Object.assign({}, state, {
        user: action.data
      });
    }

    default: {
      return state
    }
  }
}
