import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';

import {
  UPDATE_USER,
  UPDATE_COMPLETED,
  updateFailed,
  updateCompleted
} from 'actions/myaccount'

const initialState = {
  loading: false,
  user: {
    title: '',
    firstName: '',
    lastName: '',
    company: '',
    username: '',
    password:''
  }
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

    case UPDATE_COMPLETED: {
      return Object.assign({}, state, {
        loading: false
      })
    }

    default: {
      return state
    }
  }
}
