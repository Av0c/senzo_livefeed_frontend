import * as Comparison from 'actions/comparison';

const initialState = {
    overview: [],
    daily: [],
    total: [],
    range: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Comparison.RECEIVE_FIRST_LOCATION_OVERVIEW: {
            state.overview[0] = { node: action.node, data: action.data };
            return Object.assign({}, state, {
                overview: [...state.overview]
            });
        }

        case Comparison.RECEIVE_SECOND_LOCATION_OVERVIEW: {
            state.overview[1] = { node: action.node, data: action.data };
            return Object.assign({}, state, {
                overview: [...state.overview]
            });
        }

        case Comparison.RECEIVE_FIRST_LOCATION_TOTAL: {
            state.total[0] = { data: action.data };
            return Object.assign({}, state, {
                total: [...state.total]
            });
        }

        case Comparison.RECEIVE_SECOND_LOCATION_TOTAL: {
            state.total[1] = { data: action.data };
            return Object.assign({}, state, {
                total: [...state.total]
            });
        }

        case Comparison.RECEIVE_FIRST_LOCATION_RANGE: {
            state.range[0] = { data: action.data };
            return Object.assign({}, state, {
                range: [...state.range]
            });
        }

        case Comparison.RECEIVE_SECOND_LOCATION_RANGE: {
            state.range[1] = { data: action.data };
            return Object.assign({}, state, {
                range: [...state.range]
            });
        }

        case Comparison.RECEIVE_FIRST_LOCATION_DAILY: {
            state.daily[0] = { data: action.data };
            return Object.assign({}, state, {
                daily: [...state.daily]
            });
        }

        case Comparison.RECEIVE_SECOND_LOCATION_DAILY: {
            state.daily[1] = { data: action.data };
            return Object.assign({}, state, {
                daily: [...state.daily]
            });
        }

        default:
            return state;
    }
}