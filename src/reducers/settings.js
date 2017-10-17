import { combineReducers } from 'redux-loop';

import userReducer from './settings/user'
import sensorReducer from './settings/sensor'
import customerReducer from './settings/customer'

export default combineReducers({
  user: userReducer,
  sensor: sensorReducer,
  customer: customerReducer
})
