import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';

import * as a from "actions/user"


const initialState = {
	contact: {},
	DAselectedUser: "",
	DAstage: "", // DA = delete account
	DArespond: {}
};

function listContact(){
	return axios.get(`${config.api.root}/user/contact`)
		.then((res) => a.listContactOk(res))
		.catch((error) => a.listContactFail(error));
}
function deleteUser(username){
	return axios.delete(`${config.api.root}/user/delete/${username}`)
		.then((res) => a.deleteUserOk(res))
		.catch((error) => a.deleteUserFail(error));
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
		case a.SELECT_DELETE_USER: {
			return Object.assign({}, state, {
				DAselectedUser: action.username
			})
		}
		case a.DELETE_USER: {
  			return loop (
				Object.assign({}, state, {
					DAstage: "deleting",
					DArespond: {}
				}),
				Effects.promise(deleteUser, action.username)
			)
		}
		case a.DELETE_USER_OK: {
			return Object.assign({}, state, {
				DAstage: "deleted",
				DArespond: {}
			})
		}
		case a.DELETE_USER_FAIL: {
			return Object.assign({}, state, {
				DAstage: "delete-failed",
				DArespond: action.e
			})
		}

		default:
			return state;
	}
}
