import axios from 'axios';
import config from 'config';
import history from 'components/common/appHistory';

import toastr from 'toastr';

import * as overviewAction from "./overview"
import * as nodeAction from "./node"
import store from '../store';
/**
 * Floorplan image related
 */
export const FETCH_IMAGE = 'FETCH_IMAGE';
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';

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
//  */
// export const FETCH_SENSORS = 'FETCH_SENSORS';
// export const RECEIVE_SENSORS = 'RECEIVE_SENSORS';
// export const FETCH_SENSOR_FLOORPLAN_INFO = 'FETCH_SENSOR_FLOORPLAN_INFO';
// export const RECEIVE_SENSOR_FLOORPLAN_INFO = 'RECEIVE_SENSOR_FLOORPLAN_INFO';
// export const REMOVE_SENSOR = 'REMOVE_SENSOR';
// export const REMOVE_SENSOR_COMPLETED = 'REMOVE_SENSOR_SUCCESFUL';
// export const REMOVE_SENSOR_FAILED = 'REMOVE_SENSOR_FAILED';
// export const REMOVE_SENSOR_FROM_LIST = 'REMOVE_SENSOR_FROM_LIST';
// export const REMOVING_SENSOR_INPROGRESS = 'REMOVING_SENSOR_INPROGRESS';
// export const SAVE_SENSOR = 'SAVE_SENSOR';
// export const SAVE_SENSOR_COMPLETED = 'SAVE_SENSOR_COMPLETED';
// export const SAVE_SENSOR_FAILED = 'SAVE_SENSOR_FAILED';
// export const SAVING_SENSOR_INPROGRESS = 'SAVING_SENSOR_INPROGRESS';
// export const UI_UPDATE_COMPLETED = 'UI_UPDATE_COMPLETED';
export const UPDATE_SENSOR = 'UPDATE_SENSOR';
export const UPDATE_SENSOR_COMPLETED = 'UPDATE_SENSOR_COMPLETED';
export const UPDATE_SENSOR_FAILED = 'UPDATE_SENSOR_FAILED';
// export const SELECT_SENSOR = 'SELECT_SENSOR';
// export const MOVE_SENSOR = 'MOVE_SENSOR';

export function updateSensor(sensor) {
	return dispatch => {
		dispatch(updateSensorInProgress(sensor));
		return axios.put(config.api.root + `/sensor/update/${sensor.id}`, sensor)
			.then((response) => {
				// Dirty hack !
				var ss = Object.assign({}, store.getState().nodeReducer.map.get(sensor.id), sensor);
				store.getState().nodeReducer.map.set(sensor.id, ss);

				// toastr.success(`Sensor ${ss.name} has been moved.`);

				dispatch(nodeAction.fetchLiveData(store.getState().myAccountReducer.user.companyid));
				dispatch(overviewAction.fetchCustomerOverview(store.getState().myAccountReducer.user.companyid));
			})
			.catch(function (response) {
		toastr.error("Move sensor failed : ", response);
				dispatch(updateSensorFailed(response.data));
			})
	}
}

export function updateSensorInProgress(sensor) {
	return {
		type: UPDATE_SENSOR,
		sensor
	}
}

export function updateSensorFailed(data) {
	return {
		type: UPDATE_SENSOR_FAILED,
		data
	}
}

export function updateSensorCompleted() {
	return {
		type: UPDATE_SENSOR_COMPLETED
	}
}


// export function fetchSensors(siteId) {
//   return {
//     type: FETCH_SENSORS,
//     siteId
//   }
// }

// export function fetchSensorFloorplanInfo(areaId) {
//   return {
//     type: FETCH_SENSOR_FLOORPLAN_INFO,
//     areaId
//   }
// }

// export function receiveSensorFloorplanInfo(result) {
//   return {
//     type: RECEIVE_SENSOR_FLOORPLAN_INFO,
//     data: result.data
//   }
// }

// export function uiUpdateCompleted() {
//   return {
//     type: UI_UPDATE_COMPLETED
//   }
// }

// export function saveSensor(sensor) {
//   return {
//     type: SAVE_SENSOR,
//     sensor
//   }
// }

// export function saveSensorCompleted(sensor) {
//   return {
//     type: SAVE_SENSOR_COMPLETED,
//     sensor
//   }
// }


// export function receiveSensors(result, areaId) {
//   return {
//     type: RECEIVE_SENSORS,
//     sensors: result.data,
//     areaId
//   }
// }

// export function saveSensorFailed() {
//   return {
//     type: SAVE_SENSOR_FAILED
//   }
// }

// export function removeSensorInProgress(sensor) {
//   return {
//     type: REMOVE_SENSOR,
//     sensor
//   }
// }

// export function removeSensorFromList(sensor) {
//   return {
//     type: REMOVE_SENSOR_FROM_LIST,
//     sensor
//   }
// }

// export function removeSensorCompleted() {
//   return {
//     type: REMOVE_SENSOR_COMPLETED
//   }
// }

// export function removeSensorFailed() {
//   return {
//     type: REMOVE_SENSOR_FAILED
//   }
// }

// export function removingSensorInprogress() {
//   return {
//     type: REMOVING_SENSOR_INPROGRESS
//   }
// }

// export function selectSensor(sensor) {
//   return {
//     type: SELECT_SENSOR,
//     sensor
//   }
// }

// export function moveSensor(sensor, x, y) {
//   return {
//     type: MOVE_SENSOR,
//     sensor,
//     x, y
//   }
// }

// export function removeSensor(id, sensor) {
//   return dispatch => {
//     dispatch(removeSensor(sensor));
//     return axios.post(config.api.root + `/node/create/${id}`, sensor)
//       .then((response) => {
//         dispatch(removeSensorCompleted(response.data));
//       })
//       .catch(function (response) {
//         dispatch(removeSensorFailed(response.data));
//       })
//   }
// }

// export function createSensor(id, sensor) {
//   return dispatch => {
//     dispatch(saveSensor(sensor));
//     return axios.post(config.api.root + `/sensor/create/0/${id}`, sensor)
//       .then((response) => {
//         dispatch(saveSensorCompleted(response.data));
//         return response;
//       })
//       .catch(function (response) {
//         dispatch(saveSensorFailed());
//         return response;
//       })
//   }
// }

