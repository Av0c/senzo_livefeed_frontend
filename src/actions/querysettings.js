export const SELECT_PERIOD = 'SELECT_PERIOD';
export const SELECT_MODE = 'SELECT_MODE';
export const SELECT_TAG = 'SELECT_TAG';
export const SELECT_ROOM_TYPE = 'SELECT_ROOM_TYPE';

export function selectTag(tag) {
  return {
    type: SELECT_TAG,
    tag
  };
}

export function selectPeriod(period) {
  return {
    type: SELECT_PERIOD,
    period
  };
}

export function selectRoomType(room) {
  return {
    type: SELECT_ROOM_TYPE,
    room
  };
}




