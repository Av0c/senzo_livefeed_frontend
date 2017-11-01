import axios from 'axios';
import config from 'config';

export const FETCH_LIVE_DATA = "FETCH_LIVE_DATA";
export const RECEIVE_LIVE_DATA = "RECEIVE_LIVE_DATA";
export const FETCH_FAILED = "FETCH_FAILED";

export function fetchLiveData(id) {
   return {
      type: FETCH_LIVE_DATA,
      id
   };
}

export function receiveLiveData(response) {
   return {
      type: RECEIVE_LIVE_DATA,
      data: response.data
   };
}

export function fetchFailed(data) {
   return {
      type: FETCH_FAILED,
      data
   };
}

export function getLiveData(id) {
   return dispatch => {
      dispatch(fetchLiveData(id));
      axios.get(config.api.root + '/sensor/live/'+id)
        .then( (response) => {
          dispatch(receiveLiveData(response.data));
        })
      .catch(function (response) {
        dispatch(fetchFailed(response.data));
      });
   };
}