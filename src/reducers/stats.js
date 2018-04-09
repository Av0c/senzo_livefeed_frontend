import * as Stats from 'actions/stats';
import store from '../store';

const initialState = {
    loading: false,
    overviewMap : {},
    stats: {
        constraint: {
            startdate: "13-11-2017",
            enddate: "18-11-2017",
            starthour: 8,
            endhour: 17,
            weekdaymask: "0111110",
        },
        points: []
    },
    range: {
        points: []
    },
    breakdown: [],
    daily: {},
    sensorAverage: {
        values: {},
        constraint: {}
    },
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Stats.FETCH_OCCUPANCY_OVERVIEW:
            var map = {
                ...state.overviewMap,
                [action.node.id]: {
                    loading: true,
                }
            }
            return Object.assign({}, state, {
                overviewMap: map
            });

        case Stats.RECEIVE_OCCUPANCY_OVERVIEW:
            var map = {
                ...state.overviewMap,
                [action.node.id]: {
                    params: action.params,
                    data: action.data,
                    loading: false,
                }
            }
            return Object.assign({}, state, {
                overviewMap: map,
            });

        case Stats.RECEIVE_NODE_STATS:
            return Object.assign({}, state, {
                stats: action.data
            });

        case Stats.RECEIVE_OCCUPANCY_RANGE: {
            return Object.assign({}, state, {
                range: action.data
            });
        }

        case Stats.RECEIVE_STATS_BREAKDOWN: {
            return Object.assign({}, state, {
                breakdown: action.data
            });
        }

        case Stats.RECEIVE_STATS_DAILY: {
            return Object.assign({}, state, {
                daily: action.data
            });
        }

        case Stats.RECEIVE_SENSOR_AVERAGE: {
            return Object.assign({}, state, {
                sensorAverage: action.data,
            });
        }

        default:
            return state;
    }
}