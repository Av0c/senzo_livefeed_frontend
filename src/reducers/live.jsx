import {
	SELECT_NODE,
	SELECT_VIEW
} from 'actions/live/filter';

import config from 'config';

const initialState = {
	nodeFilter: {
		info: {
			name: "",
			empty: true
		},
		children: [],
		type: null
	},
	viewFilter: config.viewFilter[0],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SELECT_NODE: {
			return Object.assign({}, state, {
				nodeFilter: action.node,
			});
		}

		case SELECT_VIEW: {
			return Object.assign({}, state, {
				viewFilter: action.view,
			});
		}

		default:
			return state;
	}
}