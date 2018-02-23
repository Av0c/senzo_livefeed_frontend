import appHistory from 'components/common/appHistory';
import jwtDecode from 'jwt-decode';
import toastr from 'toastr';
import {
  LOGIN_FAILED,
  LOGIN_IN_PROGRESS,
  LOGIN_SUCCESSFUL,
  CLEAR_TOKEN,
} from 'actions/authentication';

const initialState = {
  token: localStorage.getItem("token"),
  loginInProgress: false,
  error: false,
  errorMessage : '',
};

// Reducing function
export default (state = initialState, action ) => {
  switch (action.type) {
    case LOGIN_FAILED: {
      toastr.error(action.data)
      return Object.assign({}, state, initialState, {
        error: true,
        errorMessage: action.data,
      })
    }

    case LOGIN_IN_PROGRESS: {
      return Object.assign({}, state, {
        loginInProgress: true,
      })
    }

    case LOGIN_SUCCESSFUL: {
      localStorage.setItem("token",  action.token);
      return Object.assign({}, state, {
        token: action.token,
        loginInProgress: false,
      })
    }

    case CLEAR_TOKEN: {
      localStorage.removeItem("token");
      appHistory.push('/login');
      return Object.assign({}, initialState);
    }
    
    default: {
      return state;
    }
  }
}
