import * as Comparison from 'actions/comparison';

const initialState = {
    nodes: [null, null],
    daily: [],
    total: [],
    range: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Comparison.COMPARISON_PUT_NODE: {
            // set nodes[action.pos] = action.node
            return Object.assign({}, state, {
                nodes: Object.assign([...state.nodes], {[action.pos]: action.node}),
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