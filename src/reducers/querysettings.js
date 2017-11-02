import config from 'config';
import { SELECT_PERIOD, SELECT_MODE, APPLY_DATES, SELECT_ROOM_TYPE } from 'actions/querysettings';

const initialState = {
  room: {
    type: "All areas",
    code: "all_areas"
  },
  period: config.time.period.DAY,
  mode: config.mode.AVERAGE,
  from: '',
  to: ''
};

export default (state = initialState, action) => {
  switch (action.type) {

    case SELECT_PERIOD: {
      return Object.assign({}, state, { period: action.period })
    }
    case SELECT_MODE: {
      return Object.assign({}, state, { mode: action.mode })
    }
    case APPLY_DATES: {
      return Object.assign({}, state, {
        period: config.time.period.CUSTOM,
        from: action.dates.from,
        to: action.dates.to
      })
    }
    case SELECT_ROOM_TYPE: {
      return Object.assign({}, state, {
        room: action.room
      })
    }
    default:
      return state;
  }
}