import { SELECT_PERIOD, SELECT_MODE, SELECT_ROOM_TYPE, SELECT_TAG } from 'actions/querysettings';
import config from 'config';
const initialState = {
  room: config.room.ALLAREA,
  tag: 'Occupancy',
  startdate: '',
  enddate: '',
  id: -1,
  starthour: 8,
  endhour: 17,
  startweekday: 1,
  endweekday: 5,
  marks: [0.2, 0.9],
  groupby: 'day'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ROOM_TYPE: {
      return Object.assign({}, state, {
        room: action.room,
      });
    }

    case SELECT_TAG: {
      return Object.assign({}, state, {
        tag: action.tag
      });
    }

    case SELECT_PERIOD: {
      return  Object.assign({}, state, {
        startdate: action.period.from,
        enddate: action.period.to,
        groupby: action.period.groupby
      });
    }
    default:
      return state;
  }
}