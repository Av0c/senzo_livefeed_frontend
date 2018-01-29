import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { install, combineReducers } from 'redux-loop';
import axios from 'axios';

import authReducer from 'reducers/auth';

import overviewReducer from 'reducers/overview';
import nodeReducer from 'reducers/node';

import comparisonReducer from 'reducers/comparison';
import statsReducer from 'reducers/stats';
import querySettingsReducer from 'reducers/querysettings';
import liveReducer from 'reducers/live';

import floorPlanSensorReducer from 'reducers/floorplansensor';
import floorPlanReducer from 'reducers/floorplan';

import myAccountReducer from 'reducers/myaccount';

import userAdminReducer from 'reducers/user/administration';
import userInviteReducer from 'reducers/user/invite';
import userRegisterReducer from 'reducers/user/register';

import sensorSettingsReducer from 'reducers/sensorsettings';
import defaultSettingsReducer from 'reducers/defaultsettings';
import livefeedAPIReducer from 'reducers/livefeedapi';

import { clearToken } from 'actions/authentication';
import appHistory from 'components/common/appHistory';

const reducer = combineReducers({
  authReducer,
  overviewReducer,
  nodeReducer,

  comparisonReducer,
  statsReducer,
  querySettingsReducer,
  liveReducer,


  floorPlanSensorReducer,
  floorPlanReducer,

  myAccountReducer,
  userAdminReducer,
  userInviteReducer,
  userRegisterReducer,

  sensorSettingsReducer,
  defaultSettingsReducer,
  livefeedAPIReducer,
});

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
