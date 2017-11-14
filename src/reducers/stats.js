import * as Stats from 'actions/stats';

const initialState = {
    loading: false,
    overview: {
        average: 0,
        peak: 0,
        hours: 0,
        marks: [
            0.2,
            0.8,
            0
        ],
    },
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
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Stats.FETCH_OCCUPANCY_OVERVIEW:
            return Object.assign({}, state, {
                loading: true
            });

        case Stats.RECEIVE_OCCUPANCY_OVERVIEW:
            return Object.assign({}, state, {
                overview: {
                    average: action.data.average,
                    hours: action.data.hours,
                    peak: action.data.peak,
                    marks: action.data.marks
                }
            });

        case Stats.RECEIVE_NODE_STATS:
            return Object.assign({}, state, {
                stats: action.data
            });

        default:
            return state;
    }
}