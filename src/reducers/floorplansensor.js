import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';

import * as a from 'actions/floorplan';

const initialState = {
  loading: false,
  selectedSensor: undefined ,
  sensors:[],
};

// Reducing function
export default (state = initialState, action ) => {
  switch (action.type) {


    case a.MOVE_SENSOR: {
      action.sensor.xpercent = action.x;
      action.sensor.ypercent = action.y;
      return Object.assign({}, state, {
          selectedSensor: {}
        });
    }

    default: {
      return state;
    }
  }
}
