import store from '../store';

export function finalize(url) {
	var apikey = store.getState().authReducer.apikey;
	if (apikey && apikey.length > 0) {
		if (url.indexOf("?") == -1) {
			return url + `?apikey=${apikey}`;
		} else {
			return url + `&apikey=${apikey}`;
		}
	} else {
		return url;
	}
}
