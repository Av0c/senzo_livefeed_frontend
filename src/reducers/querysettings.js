import config from 'config';
import { SELECT_PERIOD, SELECT_MODE, APPLY_DATES, SELECT_ROOM_TYPE } from 'actions/querysettings';

const initialState = {
  room: {
    type: "All areas",
    code: "all_areas"
  },
  tag: {
    type: "Occupancy",
    tag: "O"
  },
  startdate: '',
  enddate: '',
  id: -1,
  starthour: 8,
  endhour: 17,
  startweekday: 1,
  endweekday: 5,
  marks: [0.2, 0.9]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ROOM_TYPE: {
      return Object.assign({}, state, {
        room: action.room
      });
    }
    default:
      return state;
  }
}