import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';

import * as a from "actions/user"

import {showNotification} from 'actions/common';

const initialState = {
  stage: "nothing",
  respond: {}
};

function inviteUser(inv){
  return axios.post(`${config.api.root}/user/invite`, inv)
    .then((res) => a.inviteUserOk(res))
    .catch((error) => a.inviteUserFail(error));
}

export default(state = initialState, action) => {
  switch (action.type) {
    case a.INVITE_USER: {
      return loop (
        Object.assign({}, state, {
          stage: "inviting",
          respond: {}
        }),
        Effects.promise(inviteUser, action.inv)
      )
    }
    case a.INVITE_USER_OK: {
      console.log(action);
      return Object.assign({}, state, {
        stage: "invited",
        respond: {}
      })
    }
    case a.INVITE_USER_FAIL: {
      console.log(action);
      return Object.assign({}, state, {
        stage: "invite-failed",
        respond: action.e
      })
    }
    default:
      return state;
  }
}
