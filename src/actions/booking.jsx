import axios from 'axios';
import toastr from 'toastr';
import config from 'config';
import store from '../store';

export const SET_CURRENT_NODE = 'SET_CURRENT_NODE';
export function setCurrentNode(node) {
	return {
		type: SET_CURRENT_NODE,
		node
	}
}

export const FETCH_BOOKINGS = 'FETCH_BOOKINGS';
export function fetchBookings(id, date) {
	return {
		type: FETCH_BOOKINGS,
		id,
		date,
	};
}

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export function receiveBookings(result) {
	return {
		type: RECEIVE_BOOKINGS,
		data: result.data,
	}
}

export const FETCHING_FAILED = 'FETCHING_FAILED';
export function fetchingFailed() {
	return {
		type: FETCHING_FAILED
	}
}

export const CREATE_BOOKING = 'CREATE_BOOKING';
export function createBooking(id, data) {
	return dispatch => {
		dispatch({ type: CREATE_BOOKING, id, data });
		return axios.post(config.api.root + `/booking/create/${id}`, data)
			.then((response) => {
				toastr.success("Booked successfully !")
				dispatch(fetchBookings(null, store.getState().bookingReducer.date));
				return response;
			}).catch((error) => {
				console.log(error);
				toastr.error(error.statusText.data);
				return error;
			});
	}
}