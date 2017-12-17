import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';

import * as a from "actions/user"


const initialState = {
	stage: "nothing",
	invitation: {},
	respond: {}
};

function checkInviteKey(key){
	return axios.get(`${config.api.root}/user/invite/check/${key}`)
		.then((res) => a.checkInviteKeyOk(res))
		.catch((error) => a.checkInviteKeyFail(error));
}
function createUser(key, user) {
	return axios.post(`${config.api.root}/user/create/${key}`, user)
		.then((res) => a.createUserOk(res))
		.catch((error) => a.createUserFail(error));
}

export default(state = initialState, action) => {
	console.log(action);
	switch (action.type) {
		// Check invitation key
		case a.CHECK_INVITE_KEY: {
			return loop (
				Object.assign({}, state, {
					stage: "keychecking",
					respond: {}
				}),
				Effects.promise(checkInviteKey, action.key)
			);
		}
		case a.CHECK_INVITE_KEY_OK: {
			return Object.assign({}, state, {
					stage: "keychecked",
					invitation: action.e.data,
					respond: action.e
			})
		}
		case a.CHECK_INVITE_KEY_FAIL: {
			return Object.assign({}, state, {
					stage: "keycheck-failed",
					respond: action.e
			})
		}

		// Create user
		case a.CREATE_USER: {
			return loop (
				Object.assign({}, state, {
					stage: "creating",
					respond: {}
				}),
				Effects.promise(createUser, action.key, action.user)
			);
		}
		case a.CREATE_USER_OK: {
			return Object.assign({}, state, {
					stage: "created",
					respond: action.e
			})
		}
		case a.CREATE_USER_FAIL: {
			return Object.assign({}, state, {
					stage: "create-failed",
					respond: action.e
			})
		}
		default:
			return state;
	}
}
