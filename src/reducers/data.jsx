import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';
import store from '../store';

import * as a from 'actions/data'

const initialState = {
	summary: null,
	url: null,
	sensorsData: null,
};

export default (state = initialState, action) => {
	switch (action.type) {

		case a.RECEIVE_SUMMARY: {
			return Object.assign({}, state, {
				summary: action.data,
			})
		}

		case a.RECEIVE_STRUCTURE: {
			return Object.assign({}, state, {
				url: action.data,
			})
		}

		case a.RECEIVE_LIVE: {
			return Object.assign({}, state, {
				sensorsData: action.data,
			});
		}

		default: {
			return state
		}
	}
}