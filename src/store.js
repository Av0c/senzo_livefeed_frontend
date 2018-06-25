import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { install, combineReducers } from 'redux-loop';
import { CLEAR_TOKEN } from 'actions/authentication';

import axios from 'axios';

import authReducer from 'reducers/auth';
import dataReducer from 'reducers/data';

import { clearToken } from 'actions/authentication';
import appHistory from 'components/common/appHistory';

const appReducer = combineReducers({
  authReducer,
  dataReducer,
});

const reducer = (state, action) => {
  if (action.type == CLEAR_TOKEN) {
    state = undefined;
  }
  return appReducer(state, action);
}

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunkMiddleware),
    install()
  )
);

axios.interceptors.request.use(config => {
  config.headers['Authorization'] = `Bearer ${store.getState().authReducer.token}`;
  return config
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.status == 401) {
    store.dispatch(clearToken())
  } else if (error.status > 400) {
    return Promise.reject(error);
  } else {
    return Promise.reject({ statusText: error })
  }

});


export default store;
