import axios from 'axios';
import config from 'config';

export const FETCH_SUMMARY_FOR_SITE = "FETCH_SUMMARY_FOR_SITE";
export const FETCHING_SUMMARY_FOR_SITE = "FETCHING_SUMMARY_FOR_SITE";
export const RECEIVE_SUMMARY_FOR_SITE = "RECEIVE_SUMMARY_FOR_SITE";

export function fetchSummaryForSite(siteId) {
  return dispatch => {
    dispatch(fetchingSummaryForSite());
    axios.get(config.api.root + '/api/site/' + siteId + '/utilization/daily')
      .then( (response) => {
        dispatch(receiveSummaryForSite(response.data))
      })
  }
}

export function fetchingSummaryForSite() {
  return {
    type: FETCHING_SUMMARY_FOR_SITE
  }
}

export function receiveSummaryForSite(data) {
  return {
    type: RECEIVE_SUMMARY_FOR_SITE,
    data
  }
}

