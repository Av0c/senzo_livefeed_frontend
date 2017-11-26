import history from 'components/common/appHistory'

/**
 * Floorplan image related
 */
export const UPLOAD_IMAGE_FAILED = 'UPLOAD_IMAGE_FAILED';
export const UPLOAD_IMAGE_SUCCESSFUL = 'UPLOAD_SUCCESSFUL';
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
export const FETCH_IMAGE = 'FETCH_IMAGE';
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';

export function uploadImage(data) {
  return {
    type: UPLOAD_IMAGE,
    data
  }
}

export function uploadImageFailed() {
  return {
    type: UPLOAD_IMAGE_FAILED
  }
}

export function uploadImageSuccessful() {
  history.push('/settings/areas/edit');
  return {
    type: UPLOAD_IMAGE_SUCCESSFUL
  }
}

export function fetchImage(id) {
  return {
    type: FETCH_IMAGE,
    id: id
  }
}

export function receiveImage(result) {
  return {
    type: RECEIVE_IMAGE,
    data: result.data
  }
}

/**
 * Floorplan sensor related
 */
export const FETCH_SENSORS = 'FETCH_SENSORS';
export const RECEIVE_SENSORS = 'RECEIVE_SENSORS';
export const FETCH_SENSOR_FLOORPLAN_INFO = 'FETCH_SENSOR_FLOORPLAN_INFO';
export const RECEIVE_SENSOR_FLOORPLAN_INFO = 'RECEIVE_SENSOR_FLOORPLAN_INFO';
export const REMOVE_SENSOR = 'REMOVE_SENSOR';
export const REMOVE_SENSOR_COMPLETED = 'REMOVE_SENSOR_SUCCESFUL';
export const REMOVE_SENSOR_FAILED = 'REMOVE_SENSOR_FAILED';
export const REMOVE_SENSOR_FROM_LIST = 'REMOVE_SENSOR_FROM_LIST';
export const REMOVING_SENSOR_INPROGRESS = 'REMOVING_SENSOR_INPROGRESS';
export const SAVE_SENSOR = 'SAVE_SENSOR';
export const SAVE_SENSOR_COMPLETED = 'SAVE_SENSOR_COMPLETED';
export const SAVE_SENSOR_FAILED = 'SAVE_SENSOR_FAILED';
export const SAVING_SENSOR_INPROGRESS = 'SAVING_SENSOR_INPROGRESS';
export const UI_UPDATE_COMPLETED = 'UI_UPDATE_COMPLETED';
export const UPDATE_SENSOR = 'UPDATE_SENSOR';
export const UPDATE_SENSOR_COMPLETED = 'UPDATE_SENSOR_COMPLETED';
export const SELECT_SENSOR = 'SELECT_SENSOR';
export const MOVE_SENSOR = 'MOVE_SENSOR';

export function updateSensor(sensor) {
  return {
    type: UPDATE_SENSOR,
    sensor
  }
}

export function fetchSensors(siteId) {
  return {
    type: FETCH_SENSORS,
    siteId
  }
}

export function fetchSensorFloorplanInfo(areaId) {
  return {
    type: FETCH_SENSOR_FLOORPLAN_INFO,
    areaId
  }
}

export function receiveSensorFloorplanInfo(result) {
  return {
    type: RECEIVE_SENSOR_FLOORPLAN_INFO,
    data: result.data
  }
}

export function uiUpdateCompleted() {
  return {
    type: UI_UPDATE_COMPLETED
  }
}

export function saveSensor(sensor) {
  return {
    type: SAVE_SENSOR,
    sensor
  }
}

export function saveSensorCompleted(sensor) {
  return {
    type: SAVE_SENSOR_COMPLETED,
    sensor
  }
}

export function updateSensorCompleted() {
  return {
    type: UPDATE_SENSOR_COMPLETED
  }
}

export function receiveSensors(result, areaId) {
  return {
    type: RECEIVE_SENSORS,
    sensors: result.data,
    areaId
  }
}

export function saveSensorFailed() {
  return {
    type: SAVE_SENSOR_FAILED
  }
}

export function removeSensor(sensor) {
  return {
    type: REMOVE_SENSOR,
    sensor
  }
}

export function removeSensorFromList(sensor) {
  return {
    type: REMOVE_SENSOR_FROM_LIST,
    sensor
  }
}

export function removeSensorCompleted() {
  return {
    type: REMOVE_SENSOR_COMPLETED
  }
}

export function removeSensorFailed() {
  return {
    type: REMOVE_SENSOR_FAILED
  }
}

export function removingSensorInprogress() {
  return {
    type: REMOVING_SENSOR_INPROGRESS
  }
}

export function selectSensor(sensor) {
  return {
    type: SELECT_SENSOR,
    sensor
  }
}

export function moveSensor(sensor, x, y) {
  return {
    type: MOVE_SENSOR,
    sensor,
    x, y
  }
}