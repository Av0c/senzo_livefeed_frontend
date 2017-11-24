import * as Stats from 'actions/stats';

const initialState = {
    loading: false,
    overview: [],
    stats: {
        constraint: {
            startdate: "13-11-2017",
            enddate: "18-11-2017",
            starthour: 8,
            endhour: 17,
            startweekday: 1,
            endweekday: 5
        },
        points: []
    },
    range: {
        points: []
    },
    breakdown: [],
    daily: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Stats.FETCH_OCCUPANCY_OVERVIEW:
            return Object.assign({}, state, {
                loading: true
            });

        case Stats.RECEIVE_OCCUPANCY_OVERVIEW:
            
            let contained = false;
            for (let i = 0; i < state.overview.length; i++) {
                if (state.overview[i].node.id == action.data.node.id) {
                    contained = true;
                    state.overview[i].data = action.data.data;
                }
            }
            if (contained) {

                return Object.assign({}, state, {
                    overview: [...state.overview]
                });
            }
            else {
                return Object.assign({}, state, {
                    overview: [...state.overview, { node: action.data.node, data: action.data.data }]
                });
            }

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

        default:
            return state;
    }
}