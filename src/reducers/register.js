import {
  REGISTER_IN_PROGRESS,
  REGISTER_SUCCESSFUL
} from 'actions/register';

const initialState = {
  token: localStorage.getItem('token'),
  registerInProgress: false
};

// Reducing function
export default (state = initialState, action ) => {
  switch (action.type) {

    case REGISTER_IN_PROGRESS: {
      return Object.assign({}, state, {
        registerInProgress: true
      })
    }

    case REGISTER_SUCCESSFUL: {
      localStorage.setItem('token',  action.token);
      return Object.assign({}, state, {
        token: action.token,
        registerInProgress: false
      })
    }


    default: {
      return state;
    }
  }
}
