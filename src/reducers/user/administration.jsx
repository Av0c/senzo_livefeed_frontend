import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';

import * as a from "actions/user"


const initialState = {
	contact: {},
	contactFetched: false,
	nodeFilter: {
		id: -2,
		info: {
			name: "",
			empty: true
		},
		children: [],
		type: null
	},
	userTypeFilter: config.userTypeFilter[0],

	selectedUser: {},
	EAstage: "nothing", // EA = edit account
	EArespond: {},

};

function listContact(){
	return axios.get(`${config.api.root}/user/contact`)
		.then((res) => a.listContactOk(res))
		.catch((error) => a.listContactFail(error));
}
function editUser(user){
	return axios.put(`${config.api.root}/user/update/${user.username}`, user)
		.then((res) => a.editUserOk(res))
		.catch((error) => a.editUserFail(error));
}
function deleteUser(user){
	return axios.delete(`${config.api.root}/user/delete/${user.username}`)
		.then((res) => a.listContact())
		.catch((error) => a.deleteUserFail(error));
}


export default(state = initialState, action) => {
	switch (action.type) {
		// List contact
		case a.LIST_CONTACT: {
			return loop (
				Object.assign({}, state, {contactFetched: false}),
				Effects.promise(listContact)
			);
		}
		case a.LIST_CONTACT_OK: {
			return Object.assign({}, state, {
				contact: action.e.data,
				contactFetched: true,
			})
		}
		case a.LIST_CONTACT_FAIL:
		case a.NEED_CONTACT: {
			return Object.assign({}, state, {
				contactFetched: false,
			})
		}
		// Select
		case a.SELECT_USER: {
			return Object.assign({}, state, {
				selectedUser: action.user,
				EAstage: "nothing",
				EArespond: {},
				DAstage: "nothing",
				DArespond: {},
			})
		}
		// Edit
		case a.EDIT_USER: {
  			return loop (
				Object.assign({}, state, {
					EAstage: "editing",
					EArespond: {}
				}),
				Effects.promise(editUser, action.username)
			)
		}
		case a.EDIT_USER_OK: {
			return Object.assign({}, state, {
				EAstage: "edited",
				EArespond: {}
			})
		}
		case a.EDIT_USER_FAIL: {
			return Object.assign({}, state, {
				EAstage: "edit-failed",
				EArespond: action.e
			})
		}
		// Delete
		case a.DELETE_USER: {
  			return loop (
				Object.assign({}, state, {
				}),
				Effects.promise(deleteUser, action.username)
			)
		}
		case a.DELETE_USER_OK: {
			return Object.assign({}, state, {
			})
		}
		case a.DELETE_USER_FAIL: {
			return Object.assign({}, state, {
			})
		}
		// Filters
		case a.USERAD_SELECT_NODE: {
			return Object.assign({}, state, {
				nodeFilter: action.node,
			});
		}

		case a.USERAD_SELECT_TYPE: {
			return Object.assign({}, state, {
				userTypeFilter: action.code,
			});
		}

		default:
			return state;
	}
}
