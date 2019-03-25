import axios from 'axios';
import config from 'config';
import history from 'components/common/appHistory';
import toastr from 'toastr';
import store from '../store';
import { finalize } from "actions/URLfinalizer";

// SUMMARY

export const FETCH_SUMMARY = 'FETCH_SUMMARY';
export function fetchSummary() {
	return dispatch => {
		dispatch({ type: FETCH_SUMMARY });
		return axios.get(finalize(config.api.root + `/myurl`))
			.then((response) => {
				console.log(response)
				dispatch(receiveSummary(response));
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
		return axios.get(finalize(config.api.root + `/structure/${key}`))
			.then((response) => {
				dispatch(receiveStructure(response));
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
		return axios.get(finalize(config.api.root + `/live/${key}`))
			.then((response) => {
				dispatch(receiveLive(response));
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

// STATS

export const FETCH_STATS = 'FETCH_STATS';
export function fetchStats(key, startdate, enddate) {
	return dispatch => {
		dispatch({type: FETCH_STATS, key});
		return axios.get(finalize(config.api.root + `/stats/${key}?startdate=${startdate}&enddate=${enddate}`))
			.then((response) => {
				dispatch(receiveStats(response));
				return response;
			})
			.catch(function (response) {
				console.log(response);
				return response;
			})
	}
}

export const RECEIVE_STATS = 'RECEIVE_STATS';
export function receiveStats(result) {
	return {
		type: RECEIVE_STATS,
		data: result.data
	}
}