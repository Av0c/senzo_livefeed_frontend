import {
  RECEIVE_SENSORS
} from 'actions/floorplan';
import {
  RECEIVE_CUSTOMER_ORGANIZATION
} from 'actions/organization'

import lodash from 'lodash';

const initialState = {
  areaList: []
};

// Reducing function
export default (state = initialState, action ) => {
  switch (action.type) {

    case RECEIVE_SENSORS: {
      let clickedArea = lodash.find(state.areaList, (e) => e.id == action.areaId)
      if (clickedArea) {
        clickedArea.sensors = action.sensors
      }
      return Object.assign({}, state, {test: Math.random()})
    }

    case RECEIVE_CUSTOMER_ORGANIZATION: {
      let areaList = lodash.flatMapDeep(action.data, buildAreaFlatMap);
      return Object.assign({}, state, {
        areaList: areaList
      })
    }

    default: {
      return state;
    }
  }
}

function buildAreaFlatMap(organization) {
  var children = organization.children || [];
  var areas = organization.areas || [];
  var grandChildren = children.map(buildAreaFlatMap);
  return areas.concat(grandChildren)
}
