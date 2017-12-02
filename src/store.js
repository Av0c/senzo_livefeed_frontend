import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { install, combineReducers } from 'redux-loop';
import axios from 'axios';

import organizationReducer from 'reducers/organization';
import utilizationReducer from 'reducers/utilization';
import locationsReducer from 'reducers/locations';
import authReducer from 'reducers/auth';
import overviewReducer from 'reducers/overview';
import floorPlanSensorReducer from 'reducers/floorplansensor';
import myAccountReducer from 'reducers/myaccount';
import editLocationsReducer from 'reducers/editlocations';
import querySettingsReducer from 'reducers/querysettings';
import settingsPageReducer from 'reducers/settings';
import floorPlanReducer from 'reducers/floorplan';
import commonReducer from 'reducers/common';
import nodeReducer from 'reducers/node';
import statsReducer from 'reducers/stats';

import comparisonReducer from 'reducers/comparison';
import liveReducer from 'reducers/live';
import userReducer from 'reducers/user';

import { clearToken } from 'actions/authentication';
import { showNotification } from 'actions/common';

const reducer = combineReducers({
  organizationReducer,
  authReducer,
  utilizationReducer,
  locationsReducer,
  overviewReducer,
  floorPlanSensorReducer,
  myAccountReducer,
  editLocationsReducer,
  querySettingsReducer,
  settingsPageReducer,
  floorPlanReducer,
  commonReducer,
  nodeReducer,
  statsReducer,
  comparisonReducer,
  liveReducer,
  userReducer
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
