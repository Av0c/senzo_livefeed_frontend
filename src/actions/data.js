import axios from 'axios';
import config from 'config';
import history from 'components/common/appHistory';
import toastr from 'toastr';
import store from '../store';

// SUMMARY

export const FETCH_SUMMARY = 'FETCH_SUMMARY';
export function fetchSummary() {
	return dispatch => {
		dispatch({ type: FETCH_SUMMARY });
		return axios.get(config.api.root + `/myurl`)
			.then((response) => {
				dispatch(receiveSummary(response.data));
				return response;
			})
			.catch(function (response) {
				console.log(response);
				return response;
			})
	}
}

export const RECEIVE_SUMMARY = 'RECEIVE_SUMMARY';
export function receiveSummary(result) {
	return {
		type: RECEIVE_SUMMARY,
		data: result.data
	}
}

// STRUCTURE

export const FETCH_STRUCTURE = 'FETCH_STRUCTURE';
export function fetchStructure(key) {
	return dispatch => {
		dispatch({type: FETCH_STRUCTURE, key});
		return axios.get(config.api.root + `/structure/${key}`)
			.then((response) => {
				dispatch(receiveStructure(response.data));
				return response;
			})
			.catch(function (response) {
				console.log(response);
				return response;
			})
	}
}

export const RECEIVE_STRUCTURE = 'RECEIVE_STRUCTURE';
export function receiveStructure(result) {
	return {
		type: RECEIVE_STRUCTURE,
		data: result.data
	}
}

// LIVE

export const FETCH_LIVE = 'FETCH_LIVE';
export function fetchLive(key) {
	return dispatch => {
		dispatch({type: FETCH_LIVE, key});
		return axios.get(config.api.root + `/live/${key}`)
			.then((response) => {
				dispatch(receiveLive(response.data));
				return response;
			})
			.catch(function (response) {
				console.log(response);
				return response;
			})
	}
}

export const RECEIVE_LIVE = 'RECEIVE_LIVE';
export function receiveLive(result) {
	return {
		type: RECEIVE_LIVE,
		data: result.data
	}
}