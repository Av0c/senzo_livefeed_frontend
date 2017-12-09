export const FETCH_AREA_DATA = 'FETCH_AREA_DATA';
export const RECEIVE_AREA_DATA = 'RECEIVE_AREA_DATA';
export const APPLY_AREA_QUERY = 'APPLY_AREA_QUERY';
export const EXPORT_AREA_UTILIZATION_CSV = 'EXPORT_AREA_UTILIZATION_CSV';

export const FETCH_SITE_DATA = 'FETCH_SITE_DATA';
export const RECEIVE_SITE_DATA = 'RECEIVE_SITE_DATA';
export const APPLY_SITE_QUERY = 'APPLY_SITE_QUERY';
export const EXPORT_SITE_UTILIZATION_CSV = 'EXPORT_SITE_UTILIZATION_CSV';

export const FETCH_MEETING_ROOM_DATA = 'FETCH_MEETING_ROOM_DATA';
export const RECEIVE_MEETING_ROOM_DATA = 'RECEIVE_MEETING_ROOM_DATA';
export const APPLY_MEETING_ROOM_QUERY = 'APPLY_MEETING_ROOM_QUERY';
export const EXPORT_MEETING_ROOM_UTILIZATION_CSV = 'EXPORT_MEETING_ROOM_UTILIZATION_CSV';

export const FETCH_SENSOR_STATISTICS = 'FETCH_SENSOR_STATISTICS';
export const RECEIVE_SENSOR_STATISTICS = 'RECEIVE_SENSOR_STATISTICS';

export const FETCHING_FAILED = 'FETCHING_FAILED';




/**
 * Site actions
 */

export function fetchSiteData(id, settings) {
  return {
    type: FETCH_SITE_DATA,
    id,
    settings
  }
}

export function receiveSiteData(result) {
  return {
    type: RECEIVE_SITE_DATA,
    data: result.data
  }
}

export function applySiteQuery(id, settings) {
  return {
    type: APPLY_SITE_QUERY,
    settings,
    id
  }
}

/**
 * Meeting room actions
 */
export function fetchMeetingRoomData(id, settings) {
  return {
    type: FETCH_MEETING_ROOM_DATA,
    id,
    settings
  }
}

export function receiveMeetingRoomData(result) {
  return {
    type: RECEIVE_MEETING_ROOM_DATA,
    data: result.data
  }
}

export function applyMeetingRoomQuery(id, settings) {
  return {
    type: APPLY_MEETING_ROOM_QUERY,
    settings,
    id
  }

}

/**
 * Common location actions
 */

export function fetchSensorStatistics(locationType, locationId) {
  return {
    type: FETCH_SENSOR_STATISTICS,
    locationType,
    locationId
  }
}

export function receiveSensorStatistics(result) {
  return {
    type: RECEIVE_SENSOR_STATISTICS,
    data: result.data
  }

}


export function fetchingFailed() {
  return {
    type: FETCHING_FAILED
  }

}