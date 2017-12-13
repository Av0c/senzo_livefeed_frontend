import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';

import {
  FETCH_SENSORS,
  RECEIVE_SENSORS,
  FETCH_SENSOR_FLOORPLAN_INFO,
  RECEIVE_SENSOR_FLOORPLAN_INFO,
  receiveSensorFloorplanInfo,
  receiveSensors,
  REMOVE_SENSOR_FAILED,
  REMOVE_SENSOR_COMPLETED,
  REMOVING_SENSOR_INPROGRESS,
  REMOVE_SENSOR_FROM_LIST,
  REMOVE_SENSOR,
  removeSensorCompleted,
  removeSensorFailed,
  SAVE_SENSOR,
  SAVE_SENSOR_COMPLETED,
  saveSensorCompleted,
  saveSensorFailed,
  SAVING_SENSOR_INPROGRESS,
  SAVE_SENSOR_FAILED,
  UI_UPDATE_COMPLETED,
  UPDATE_SENSOR,
  UPLOAD_SUCCESSFUL,
  UPDATE_SENSOR_COMPLETED,
  updateSensorCompleted,
  SELECT_SENSOR,
  MOVE_SENSOR
} from 'actions/floorplan';

import {showNotification} from 'actions/common';

const initialState = {
  loading: false,
  selectedSensor: undefined ,
  sensors:[],
};

function fetchSensors(siteId){
  return axios.get(`${config.api.root}/api/sensor/${siteId}`)
  .then((stuff) => receiveSensors(stuff,siteId))
  .catch((error) => saveSensorFailed(error));
}

function fetchSensorFloorplanInfo(areaId) {
  return axios.get(`${config.api.root}/api/sensor/${areaId}/floorplandata`)
    .then(receiveSensorFloorplanInfo)
    .catch((error) => showNotification("Failed:", error.statusText, false));
}
function removeSensor(sensor){
  return axios.delete(`${config.api.root}/api/sensor/${sensor.id}`)
    .then((result) => fetchSensorFloorplanInfo(sensor.area_id))
    .catch((error) => removeSensorFailed(error));
}

function removeSensorFromList(sensor){
  return axios.delete(`${config.api.root}/api/sensor/${sensor.id}`)
    .then((result) => fetchSensors(sensor.area_id))
    .catch((error) => removeSensorFailed(error));
}

function saveSensor(sensor){
  return axios.post(config.api.root + '/api/area/addsensor', sensor)
    .then((result) => fetchSensorFloorplanInfo(sensor.area_id))
    .catch((error) => saveSensorFailed(error));
}

function updateSensor(sensor){
  return axios.put(config.api.root + '/api/sensor', sensor)
    .then((result) => fetchSensorFloorplanInfo(sensor.area_id))
    .catch((error) => saveSensorFailed(error));
}

// Reducing function
export default (state = initialState, action ) => {
  switch (action.type) {

    case RECEIVE_SENSORS: {
      return Object.assign({}, state, {
        sensors: action.sensors,
        sensorsReceived: true
      })
    }

    case FETCH_SENSORS: {
      return loop (
        Object.assign({}, state, {loading: true}),
        Effects.promise(fetchSensors, action.siteId)
      );
    }

    case FETCH_SENSOR_FLOORPLAN_INFO: {
      return loop (
        Object.assign({}, state, {loading: true}),
        Effects.promise(fetchSensorFloorplanInfo, action.areaId)
      )
    }

    case RECEIVE_SENSOR_FLOORPLAN_INFO: {
      return Object.assign({}, initialState, {
        sensors: action.data
      })
    }

    case UPLOAD_SUCCESSFUL: {
      return Object.assign({}, state, {
        uploadInProgress: false
      })
    }

    case SAVE_SENSOR_COMPLETED: {
      return Object.assign({}, state, {
        saveSensorCompleted: true,
        loading: false
      })
    }

    case SAVE_SENSOR_FAILED: {
      return Object.assign({}, state, {
        loading:false,
        saveSensorFailed:true
      })
    }

    case SAVING_SENSOR_INPROGRESS: {
      return Object.assign({}, state, {
        saveSensorInProgress: true
      })
    }

    case REMOVE_SENSOR:{
      return loop (
        Object.assign({}, initialState, {loading:true}),
          Effects.promise(removeSensor, action.sensor)
      )
    }

    case REMOVE_SENSOR_COMPLETED: {
      return Object.assign({}, state, {
        removeSensorCompleted: true
      })
    }

    case REMOVE_SENSOR_FAILED: {
      return Object.assign({}, state, {
        removeSensorInProgress: false
      })
    }
    case REMOVE_SENSOR_FROM_LIST: {
      return loop (
        Object.assign({}, initialState, {loading:true}),
        Effects.promise(removeSensorFromList, action.sensor)
      )
    }

    case REMOVING_SENSOR_INPROGRESS: {
      return Object.assign({}, state, {
        removeSensorInProgress: true
      })
    }

    case UI_UPDATE_COMPLETED:{
      return Object.assign({}, state, {
        saveSensorCompleted: false,
        removeSensorCompleted: false,
        sensorsReceived: false,
        updatingSensor: false

      })
    }

    case UPDATE_SENSOR_COMPLETED:{
      return Object.assign({}, state, {
        updateSensorCompleted:true
      })
    }

    case SELECT_SENSOR: {
      if (state.selectedSensor != action.sensor) {
        // select new
        return Object.assign({}, state, {
          selectedSensor: action.sensor
        });
      } else {
        // deselect
        return Object.assign({}, state, {
          selectedSensor: {}
        });
      }
    }

    case MOVE_SENSOR: {
      action.sensor.xpercent = action.x;
      action.sensor.ypercent = action.y;
      console.log(action)
      return Object.assign({}, state, {
          selectedSensor: {}
        });
    }

    default: {
      return state;
    }
  }
}
