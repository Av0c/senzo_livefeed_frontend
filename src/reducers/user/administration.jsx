import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';

import * as a from "actions/user"


const initialState = {
	contact: {}
};

function listContact(){
	return axios.get(`${config.api.root}/user/contact`)
		.then((res) => a.listContactOk(res))
		.catch((error) => a.listContactFail(error));
}

export default(state = initialState, action) => {
	console.log(action);
	switch (action.type) {
		// Check invitation key
		case a.LIST_CONTACT: {
			return loop (
				Object.assign({}, state, {}),
				Effects.promise(listContact)
			);
		}
		case a.LIST_CONTACT_OK: {
			return Object.assign({}, state, {
				contact: action.e.data
			})
		}
		case a.LIST_CONTACT_FAIL: {
			return Object.assign({}, state, {
				contact: {}
			})
		}

		default:
			return state;
	}
}
