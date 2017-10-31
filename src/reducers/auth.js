import jwtDecode from 'jwt-decode'
import {
  LOGIN_FAILED,
  LOGIN_IN_PROGRESS,
  LOGIN_SUCCESSFUL,
  CLEAR_TOKEN
} from 'actions/authentication';

const initialState = {
  user: decodeToken(localStorage.getItem("token")),
  token: localStorage.getItem("token"),
  loginInProgress: false,
  errorMessage : ''
};

function decodeToken(token) {
  if (token) {
    var decoded = jwtDecode(token);
    return {
      username: decoded.username,
      id: decoded.id,
      role: decoded.role,
      companyid: decoded.companyid,
      rootnodeid: decoded.rootnodeid
    }
  } else {
    return {
      firstName: '',
      role: ''
    }
  }
}

// Reducing function
export default (state = initialState, action ) => {
  switch (action.type) {


    case LOGIN_FAILED: {
      return Object.assign({}, state, {
        loginInProgress: false,
        error: true,
        errorMessage: action.data
      })
    }

    case LOGIN_IN_PROGRESS: {
      return Object.assign({}, state, {
        loginInProgress: true
      })
    }

    case LOGIN_SUCCESSFUL: {
      localStorage.setItem("token",  action.token);
      var decoded = decodeToken(action.token);
      return Object.assign({}, state, {
        user: decoded,
        token: action.token,
        loginInProgress: false
      })
    }

    case CLEAR_TOKEN: {
      localStorage.removeItem("token");
      return Object.assign({}, initialState, {
        token: undefined
      })
    }
    
    default: {
      return state;
    }
  }
}
