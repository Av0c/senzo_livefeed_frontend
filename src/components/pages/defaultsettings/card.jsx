import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"
import TimePicker from 'components/common/timepicker'
import Modal from 'components/common/modal'
import enhanceWithClickOutside from "react-click-outside";
import * as a from 'actions/defaultsettings'

class Card extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			starthour: this.props.card.starthour,
			endhour: this.props.card.endhour,
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.card.starthour != this.state.starthour || nextProps.card.endhour != this.state.endhour) {
			this.setState({
				starthour: nextProps.card.starthour,
				endhour: nextProps.card.endhour,
				weekdaymask: nextProps.card.weekdaymask,
			});
		}
	}

	maskChecked(pos) {
		if (!this.props.card.weekdaymask) {
			return false;
		}
		return this.props.card.weekdaymask[pos] == "1";
	}

	changeHour(hours) {
		var newCard = Object.assign({}, this.props.card);
		newCard.starthour = hours[0];
		newCard.endhour = hours[1];
		this.props.dispatch(a.updateCard(newCard));
	}

	replaceAt(s, index, replacement) {
	    return s.substr(0, index) + replacement + s.substr(index + replacement.length);
	}

	changeWeekday(pos) {
		var newCard = Object.assign({}, this.props.card);
		newCard.weekdaymask = this.replaceAt(newCard.weekdaymask, pos, (newCard.weekdaymask[pos]=="0") ? "1" : "0");
		this.props.dispatch(a.updateCard(newCard));
	}

	deleteCard() {
		this.props.dispatch(a.deleteCard(this.props.card));
	}

	addNodeToCard(node, Card) {
		var card = Card;
		if (node.info.cardid == card.id) {
			card = this.props.defaultCard;
		}
		this.props.dispatch(a.addNodeToCard(node, card));
	}

	getNodes(root, res) {
		var self = this;
		for(var i=0; i<root.children.length; i++) {
			if (root.children[i].type=="sensor") {
				return;
			}
		}
		if (root) {
			if (root.info.cardid == this.props.card.id) {
				res.push(root);
			}
			root.children.map((x)=> {
				if (x.type!="sensor") {
					self.getNodes(x, res);
				}
			});
		}
	}

	makeName(nodes) {
		var res = "";
		nodes.map((x, idx) => {
			res = res + ", " + x.info.name
		});
		res = res.substring(2);
		if (res.length>50) {
			res = res.substring(0, 47) + "...";
		}
		return "Settings: " + res;
	}

	isCompanyAdmin(user) {
		var node = this.props.nodeMap[this.props.me.rootnodeid];
		console.log(node);
		return (user.role == "ADMIN") && node && (node.type == "customer");
	}

	render() {
		var nodes = [];
		this.getNodes(this.props.root, nodes);
		var header = this.props.card.isdefault ? "Company Settings" : this.makeName(nodes);
		var editable = this.isCompanyAdmin(this.props.me);
		var deletable = editable && (this.props.card.isdefault == 0);

		return (
			<div className="card default-settings-card clearfix">
				<div className="card-heading clearfix">
					<h3 className="pull-left">{header}</h3>
					<LocationPicker
						root={this.props.root}
						card={this.props.card}
						disabled={this.props.disabled || !editable}
						defaultCard={this.props.defaultCard}
						handleChange={this.addNodeToCard.bind(this)}
					/>
				</div>
				<div className="working-hours">
					<h4>Working Hours    </h4>
					<div className="hours-picker">
						<TimePicker
							disabled={!editable}
							nSegments={24}
							values={[this.props.card.starthour, this.props.card.endhour]}
							onChange={this.changeHour.bind(this)}
						/>
					</div>
				</div>
				<div className="working-days">
					<h4>Working Days</h4>
					<div className="days-picker clearfix">
						<label className="text-center"> 
							<input className="chbx" type="checkbox" checked={this.maskChecked(1)} onChange={this.changeWeekday.bind(this, 1)} disabled={!editable}/>
							<span className="custom-checkbox"></span><span className="week-day">Monday</span>
						</label>
						<label className="text-center">
							<input className="chbx" type="checkbox" checked={this.maskChecked(2)} onChange={this.changeWeekday.bind(this, 2)} disabled={!editable}/>
							<span className="custom-checkbox"></span><span className="week-day">Tuesday</span>
						</label>
						<label className="text-center"> 
							<input className="chbx" type="checkbox" checked={this.maskChecked(3)} onChange={this.changeWeekday.bind(this, 3)} disabled={!editable}/>
							<span className="custom-checkbox"></span><span className="week-day">Wednesday</span>
						</label>
						<label className="text-center"> 
							<input className="chbx" type="checkbox" checked={this.maskChecked(4)} onChange={this.changeWeekday.bind(this, 4)} disabled={!editable}/>
							<span className="custom-checkbox"></span><span className="week-day">Thursday</span>
						</label>
						<label className="text-center"> 
							<input className="chbx" type="checkbox" checked={this.maskChecked(5)} onChange={this.changeWeekday.bind(this, 5)} disabled={!editable}/>
							<span className="custom-checkbox"></span><span className="week-day">Friday</span>
						</label>
						<label className="text-center"> 
							<input className="chbx" type="checkbox" checked={this.maskChecked(6)} onChange={this.changeWeekday.bind(this, 6)} disabled={!editable}/>
							<span className="custom-checkbox"></span><span className="week-day">Saturday</span>
						</label>
						<label className="text-center"> 
							<input className="chbx" type="checkbox" checked={this.maskChecked(0)} onChange={this.changeWeekday.bind(this, 0)} disabled={!editable}/>
							<span className="custom-checkbox"></span><span className="week-day">Sunday</span>
						</label>
					</div>
				</div>
				<div className="default-settings-bottom">
					<div className="pull-right">
						{ deletable && 
							<Modal
								clickButton={this.deleteCard.bind(this)}
								header="Delete Card"
								buttonText="Delete"
								buttonClass="btn-danger"
								entry={ <img className="bin" src="/src/assets/images/bin.svg"/> }
							>
								<p>Are you sure you want to delete this setting card ?</p>
							</Modal>
						}
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		me: state.authReducer.user,
		nodeMap: state.overviewReducer.nodeMap,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

class LocationPicker extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			open: false,
		};
	}

	componentWillReceiveProps(nextProps) {
	}

	toggle() {
		this.setState({open: !this.state.open});
	}

	handleClickOutside() {
		if (this.state.open) {
			this.toggle();
		}
	}

	renderTree(root) {
		var self = this;
		if (!root) {
			return null
		}
		for(var i=0; i<root.children.length; i++) {
			if (root.children[i].type=="sensor") {
				return null;
			}
		}
		return (
			<div className="location-picker-dropdown" key={root.id}>
				{
					root.type != "customer" ? 
						<label>
							<input
								type="checkbox"
								disabled={this.props.disabled}
								checked={root.info.cardid == this.props.card.id}
								onChange={() => this.props.handleChange(root, this.props.card)}
							/>
							<span className={this.props.disabled ? "disabled" : ""}>{root.info.name}</span>
						</label>
					: null
				}
				{
					root.children.map((x)=> {
						if (x.type!="sensor") {
							return self.renderTree(x);
						} else {
							return null;
						}
					})
				}
			</div>
		);
	}	

	render() {
		return (
			<div className="pull-right location-picker">
				<a type="button" className="" onClick={this.toggle.bind(this)}>Locations </a>
				<i className="fa fa-chevron-down" aria-hidden="true"></i>
				<div className={"dropdown-menu " + (this.state.open ? "" : "hidden")}
					aria-labelledby="loc-picker">
					{this.renderTree(this.props.root)}
				</div>
			</div>
		);
	}
}

LocationPicker = enhanceWithClickOutside(LocationPicker);