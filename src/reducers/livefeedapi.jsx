import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';
import store from '../store';
import toastr from "toastr"
import * as a from 'actions/livefeedapi'

const initialState = {
	apikey: "%YOUR_API_KEY%",
	generated: false,
	wrongPassword: false
};

function generateAPIKey(auth) {
	console.log(auth);
	return axios.post(config.api.root + `/user/apikey`, auth)
		.then((response) => {
			return a.generateAPIKeyOk(response);
		}).catch((error) => {
			console.log(error);
			return a.generateAPIKeyFail(error);
		});
}
export default (state = initialState, action) => {
	switch (action.type) {
		case a.GENERATE_API_KEY: {
			return loop(
				Object.assign({}, state),
				Effects.promise(generateAPIKey, action.auth)
			);
		}

		case a.GENERATE_API_KEY_OK: {
			toastr.remove();
			toastr.success("API key generated !")
			return Object.assign({}, state, {
				generated: true,
				apikey: action.apikey,
			})
		}

		case a.GENERATE_API_KEY_FAIL: {
			toastr.remove();
			toastr.error("Wrong password !")
			return Object.assign({}, state, {
				wrongPassword: true,
			})
		}

		case a.CLEAR_API_KEY: {
			return Object.assign({}, state, {
				generated: false,
				apikey: "%YOUR_API_KEY%",
				wrongPassword: false,
			})
		}

		default: {
			return state
		}
	}
}