import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';
import store from '../store';

import * as a from 'actions/booking'

const initialState = {
	summary: null,
	url: null,
	sensorMap: null,
};

export default (state = initialState, action) => {
	console.log(action)
	switch (action.type) {

		case a.RECEIVE_SUMMARY: {
			return Object.assign({}, state, {
				summary: action.data,
			})
		}

		case a.RECEIVE_STRUCTURE: {
			return Object.assign({}, state, {
				structure: action.data,
			})
		}

		case a.RECEIVE_LIVE: {
			let map = new Map();
			action.data.forEach(function (element) {
				map.set(element.id, element);
			})
			return Object.assign({}, state, {
				map: map
			});
		}

		default: {
			return state
		}
	}
}