import appHistory from 'components/common/appHistory';
import jwtDecode from 'jwt-decode';
import toastr from 'toastr';
import {
	LOGIN_FAILED,
	LOGIN,
	LOGIN_OK,

	SEND_RESET_PW,
	SEND_RESET_PW_OK,
	SEND_RESET_PW_FAILED,

	RESET_PW_GET_USER,
	RESET_PW_GET_USER_OK,
	RESET_PW_GET_USER_FAILED,

	CLEAR_TOKEN,
} from 'actions/authentication';

const initialState = {
	token: localStorage.getItem("token"),
	loginInProgress: false,

	sendResetPWInProgress: false,
	sendResetPWDone: false,

	resetPWUser: null,
	resetPWBadKey: false,

	error: false,
	errorMessage : '',
};

// Reducing function
export default (state = initialState, action ) => {
	console.log(action)
	switch (action.type) {
		// Login
		case LOGIN: {
			return Object.assign({}, state, {
				loginInProgress: true,
			})
		}
		case LOGIN_OK: {
			localStorage.setItem("token",  action.token);
			return Object.assign({}, state, {
				token: action.token,
				loginInProgress: false,
			})
		}
		case LOGIN_FAILED: {
			toastr.error(action.data)
			return Object.assign({}, state, initialState, {
				loginInProgress: false,
				error: true,
				errorMessage: action.data,
			})
		}

		// Reset password
		case SEND_RESET_PW: {
			return Object.assign({}, state, {
				sendResetPWInProgress: true,
				sendResetPWDone: false,
			})
		}
		case SEND_RESET_PW_OK: {
			toastr.success("Email has been sent !")
			return Object.assign({}, state, {
				sendResetPWInProgress: false,
				sendResetPWDone: true,
			})
		}
		case SEND_RESET_PW_FAILED: {
			if (action.data == "sql: no rows in result set\n") {
				toastr.error("User not found !")
			} else {
				toastr.error("Error: " + action.data)
			}
			return Object.assign({}, state, initialState, {
				sendResetPWInProgress: false,
				sendResetPWDone: false,
				error: true,
				errorMessage: action.data,
			})
		}

		// Get user to reset password
		case RESET_PW_GET_USER: {
			return Object.assign({}, state, {
			})
		}
		case RESET_PW_GET_USER_OK: {
			return Object.assign({}, state, {
				resetPWUser: action.data,
				resetPWBadKey: false,
			})
		}
		case RESET_PW_GET_USER_FAILED: {
			return Object.assign({}, state, initialState, {
				resetPWUser: null,
				resetPWBadKey: true,
				error: true,
				errorMessage: action.data,
			})
		}

		// ---
		case CLEAR_TOKEN: {
			localStorage.removeItem("token");
			var old = window.location.hash.slice(1);
			if (old != "/login") {
				localStorage.setItem("redirect", old);
				appHistory.push('/login');
			}
			return Object.assign({}, initialState);
		}
		
		default: {
			return state;
		}
	}
}
