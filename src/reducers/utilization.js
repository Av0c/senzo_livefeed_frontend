import {
  FETCHING_UTILIZATION_DATA,
  RECEIVE_UTILIZATION_DATA,
  FETCHING_FAILED,
  FETCH_LOCATION_DETAILS
} from 'actions/utilization';


const initialState = {
  loading: false,
  data: {
    children: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_UTILIZATION_DATA:
      return Object.assign({}, state, {loading: true});

    case RECEIVE_UTILIZATION_DATA:
      return Object.assign({}, state, {
        loading: false,
        data: action.data
      });

    case FETCHING_FAILED: {
      return state;
    }
    case FETCH_LOCATION_DETAILS: {
      return Object.assign({}, state, {
        loading: false,
        data: action.data
      });
    }
    default:
      return state;
  }
}
