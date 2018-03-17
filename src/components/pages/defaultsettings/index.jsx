import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"
import Card from "./card"
import * as a from 'actions/defaultsettings'

class DefaultSettings extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
		};
	}

	defaultCard(cards) {
		var res = {}
		Object.keys(cards).map((key) => {
			if (cards[key].isdefault) {
				res = cards[key];
			}
		})
		return res;
	}

	addCard() {
		this.props.dispatch(a.addCard({
			starthour: 8,
			endhour: 17,
			weekdaymask: "0111110",
		}));
	}

	render() {
		return (
			<div>
				<div className="settings-wrapper">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12">
								<h2 className="account-title">Default Settings</h2>
							</div>
						</div>
					</div>
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12"> 
								{
									Object.keys(this.props.cards).map((key) => {
										if (key == "default") {
											// Default card (company card) has 2 instances : cards[$id] and card["default"]
											return null;
										}
										var card = this.props.cards[key];
										return (
											<Card
												key={card.id}
												card={card}
												root={this.props.root}
												disabled={ card.isdefault==1 }
												defaultCard={this.defaultCard(this.props.cards)}
											/>
										);
									})
								}
								<div className="add-card">
									<a className="button btn-green pull-right" onClick={this.addCard.bind(this)}>Add Card  </a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="modal fade" id="add-location-modal">
					<div className="modal-dialog modal-sm">
						<div className="modal-content">
							<div className="modal-header">
								<button className="close" type="button" data-dismiss="modal" aria-hidden="true">×</button>
								<h4 className="modal-title">Add Card</h4>
							</div>
							<div className="modal-body add-account-wrapper">
								<p>Pick Locations:</p>
								<div className="locations-select">
									<label>
										<input type="checkbox" name="Finland" id="finland"/><span>Finland</span>
									</label>
									<label>
										<input type="checkbox" name="Russia" id="russia"/><span>Russia</span>
									</label>
								</div>
							</div>
							<div className="modal-footer">
								<button className="btn btn-default" type="button" data-dismiss="modal">Cancel</button>
								<button className="btn btn-success" type="button">Confirm</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		root: state.overviewReducer.customerOverview,
		cards: state.defaultSettingsReducer.card
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultSettings);