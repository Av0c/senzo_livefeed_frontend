import history from 'components/common/appHistory';

// Select a node to filter sensors
export const SELECT_NODE_FILTER = "SELECT_NODE_FILTER"

export function selectNodeFilter(node) {
  return {
    type: SELECT_NODE_FILTER,
    node
  }
}

// Select a type to filter sensors
export const SELECT_SENSOR_STATUS_FILTER = "SELECT_SENSOR_STATUS_FILTER"

export function selectSensorStatusFilter(code) {
  return {
    type: SELECT_SENSOR_STATUS_FILTER,
    code
  }
}

// Select a sensor to edit/delete by pressing edit/delete buttons
export const SELECT_SENSOR_BUTTON = "SELECT_SENSOR_BUTTON"

export function selectSensorButton(sensor) {
  return {
    type: SELECT_SENSOR_BUTTON,
    sensor
  }
}

// Edit sensor
export const EDIT_SENSOR = "EDIT_SENSOR"
export const EDIT_SENSOR_OK = "EDIT_SENSOR_OK"
export const EDIT_SENSOR_FAIL = "EDIT_SENSOR_FAIL"
export function editSensor(sensor) {
  return {
    type: EDIT_SENSOR,
    sensor
  }
}
export function editSensorOk(e) {
  return {
    type: EDIT_SENSOR_OK,
    e
  }
}
export function editSensorFail(e) {
  return {
    type: EDIT_SENSOR_FAIL,
    e
  }
}

// Delete sensor
export const DELETE_SENSOR = "DELETE_SENSOR"
export const DELETE_SENSOR_OK = "DELETE_SENSOR_OK"
export const DELETE_SENSOR_FAIL = "DELETE_SENSOR_FAIL"
export function deleteSensor(sensor) {
  return {
    type: DELETE_SENSOR,
    sensor
  }
}
export function deleteSensorOk(e) {
  return {
    type: DELETE_SENSOR_OK,
    e
  }
}
export function deleteSensorFail(e) {
  return {
    type: DELETE_SENSOR_FAIL,
    e
  }
}

// Set fetched to false
export const NEED_DATA = "NEED_DATA"
export function needData() {
  return {
    type: NEED_DATA
  }
}
