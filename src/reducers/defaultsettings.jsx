import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';
import store from '../store';
import * as a from 'actions/defaultsettings'
import { fetchCustomerOverview } from 'actions/overview'

const initialState = {
	card: null,
};

function fetchCard() {
	return axios.get(config.api.root + `/card`)
		.then((response) => {
			return a.fetchCardOk(response);
		}).catch((error) => {
			console.log(error);
			return a.fetchCardFail(error);
		});
}
function updateCard(card) {
	return axios.put(config.api.root + `/card/update/${card.id}`, card)
		.then((response) => {
			return a.fetchCard();
		}).catch((error) => {
			console.log(error);
			return a.updateCardFail(error);
		});
}
function addCard(card) {
	return axios.post(config.api.root + `/card/create`, card)
		.then((response) => {
			return a.fetchCard();
		}).catch((error) => {
			console.log(error);
			return a.addCardFail(error);
		});
}
function addNodeToCard(node, card) {
	var rootid = store.getState().overviewReducer.customerOverview.id
	var newNode = {info: {cardid: card.id}}
	return axios.put(config.api.root + `/node/update/${node.id}`, newNode)
		.then((response) => {
			return fetchCustomerOverview(rootid);
		}).catch((error) => {
			console.log(error);
			return a.addNodeToCardFail(error);
		});
}

export default (state = initialState, action) => {
	console.log(action)
	switch (action.type) {
		case a.FETCH_CARD: {
			return loop(
				Object.assign({}, state, { loading: true }),
				Effects.promise(fetchCard)
			);
		}

		case a.FETCH_CARD_OK: {
			return Object.assign({}, state, {
				loading: false,
				card: action.cardMap
			})
		}

		case a.UPDATE_CARD: {
			return loop(
				Object.assign({}, state, { loading: true }),
				Effects.promise(updateCard, action.card)
			);
		}

		case a.ADD_CARD: {
			return loop(
				Object.assign({}, state, { loading: true }),
				Effects.promise(addCard, action.card)
			);
		}

		case a.DELETE_CARD: {
			return loop(
				Object.assign({}, state, { loading: true }),
				Effects.promise(deleteCard, action.card)
			);
		}

		case a.ADD_NODE_TO_CARD: {
			return loop(
				Object.assign({}, state, { loading: true }),
				Effects.promise(addNodeToCard, action.node, action.card)
			);
		}

		default: {
			return state
		}
	}
}