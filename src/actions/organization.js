import history from 'components/common/appHistory';

export const FETCH_CUSTOMER_ORGANIZATION = 'FETCH_CUSTOMER_ORGANIZATION';
export const RECEIVE_CUSTOMER_ORGANIZATION = 'RECEIVE_CUSTOMER_ORGANIZATION';
export const SELECT_LOCATION = 'SELECT_LOCATION';
export const SELECT_SITE = 'SELECT_SITE';
export const FETCHING_FAILED = 'FETCHING_FAILED';

export function fetchCustomerOrganization() {
  return {
    type: FETCH_CUSTOMER_ORGANIZATION
  }
}

export function receiveCustomerOrganization(result) {
  return {
    type: RECEIVE_CUSTOMER_ORGANIZATION,
    data: result.data
  }
}

export function selectSite(site) {
  history.push(`/locations/site/${site.id}`);
  return {
    type: SELECT_SITE,
    site
  }
}
export function selectLocation(area) {
  let path = `/locations/area/${area.id}`;
  if (area.isMeetingRoom) {
    path = `/locations/meetingroom/${area.id}`;
  }
  history.push(path);

  return {
    type: SELECT_LOCATION,
    area
  }
}

export function fetchingFailed() {
  return {
    type: FETCHING_FAILED
  }
}

