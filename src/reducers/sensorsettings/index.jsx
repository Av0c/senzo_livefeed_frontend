import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';

import * as a from "actions/sensorsettings"
import * as aNode from "actions/node"

const initialState = {
	fetched: false,
	nodeFilter: {
		id: -2,
		info: {
			name: "",
			empty: true
		},
		children: [],
		type: null
	},
	sensorStatusFilter: config.sensorStatusFilter[0],
	selectedSensor: {},
	Dstage: "nothing", // D = delete (sensor)
	Drespond: {},

	Estage: "nothing", // E = edit (sensor) 
	Erespond: {},
};

function editSensor(ss){
	return axios.put(`${config.api.root}/sensor/update/${ss.id}`, ss)
		.then((res) => a.editSensorOk(res))
		.catch((error) => a.editSensorFail(error));
}
function deleteSensor(ss){
	return axios.delete(`${config.api.root}/node/delete/${ss.id}`)
		.then((res) => a.deleteSensorOk(res))
		.catch((error) => a.deleteSensorFail(error));
}

export default(state = initialState, action) => {
	switch (action.type) {
		// Fetching data
		case aNode.FETCH_LIVE_DATA: {
			return Object.assign({}, state, {fetched: false});
		}
		case aNode.RECEIVE_LIVE_DATA: {
			return Object.assign({}, state, {fetched: true});
		}
		case aNode.FETCH_FAILED:
		case a.NEED_DATA: {
			return Object.assign({}, state, {fetched: false});
		}
		// Filters
		case a.SELECT_NODE_FILTER: {
			return Object.assign({}, state, {
				nodeFilter: action.node,
			});
		}
		case a.SELECT_SENSOR_STATUS_FILTER: {
			return Object.assign({}, state, {
				sensorStatusFilter: action.code,
			});
		}

		// Pick sensor for edit / delete
		case a.SELECT_SENSOR_BUTTON: {
			return Object.assign({}, state, {
				selectedSensor: action.sensor,
				Estage: "nothing",
				Erespond: {},
				Dstage: "nothing",
				Drespond: {},
			});
		}

		// Edit
		case a.EDIT_SENSOR: {
  			return loop (
				Object.assign({}, state, {
					Estage: "editing",
					Erespond: {}
				}),
				Effects.promise(editSensor, action.sensor)
			)
		}
		case a.EDIT_SENSOR_OK: {
			return Object.assign({}, state, {
				Estage: "edited",
				Erespond: {}
			})
		}
		case a.EDIT_SENSOR_FAIL: {
			return Object.assign({}, state, {
				Estage: "edit-failed",
				Erespond: action.e
			})
		}
		// Delete
		case a.DELETE_SENSOR: {
  			return loop (
				Object.assign({}, state, {
					Dstage: "deleting",
					Drespond: {}
				}),
				Effects.promise(deleteSensor, action.sensor)
			)
		}
		case a.DELETE_SENSOR_OK: {
			return Object.assign({}, state, {
				Dstage: "deleted",
				Drespond: {}
			})
		}
		case a.DELETE_SENSOR_FAIL: {
			return Object.assign({}, state, {
				Dstage: "delete-failed",
				Drespond: action.e
			})
		}

		default:
			return state;
	}
}
