import moment from 'moment';
import { SELECT_PERIOD, SELECT_MODE, SELECT_ROOM_TYPE, SELECT_TAG } from 'actions/querysettings';
import config from 'config';
const initialState = {
  room: config.room.ALLAREA,
  tag: 'Occupancy',
  enddate: moment().format('DD-MM-YYYY'),
  startdate: moment().subtract(1, "weeks").add(1, "days").format('DD-MM-YYYY'),
  id: -1,
  starthour: 8,
  endhour: 17,
  marks: [0.2, 0.8],
  groupby: 'day',
  active: 'This week'
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
        starthour: action.period.starthour,
        endhour: action.period.endhour,
        groupby: action.period.groupby,
        active: action.period.active,
      });
    }
    default:
      return state;
  }
}