import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"

export default class Modal extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			loaded: false,
			open: false,
			forcedClose: false,
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.forcedClose && !this.state.forcedClose) {
			this.setState({
				open: false,
				forcedClose: true,
			});
		}
	}

	toggle() {
		this.setState({
			open: !this.state.open,
			loaded: true,
			forcedClose: false,
		});
		if (typeof this.props.onToggle == "function") {
			this.props.onToggle(!this.state.open);
		}
	}

	render() {
		let type = "hidden";
		if (this.state.loaded) {
			type = this.state.open ? "open" : "closed";
		}
		return (
			<div>
				<div onClick={this.toggle.bind(this)}>
				{ this.props.entry }
				</div>
				<div className={"modal-overlay "+type} onClick={this.toggle.bind(this)}></div>
				<div className={"add-account-wrapper invite-modal "+type}>
					<div className="modal-header">
						<button className="close" onClick={this.toggle.bind(this)}>×</button>
						<h4 className="modal-title">{this.props.header}</h4>
					</div>
					<div className="modal-body">
						{ this.props.children }
					</div>
					<div className="modal-footer">
						<button className="btn btn-default" type="button" onClick={this.toggle.bind(this)}>Cancel</button>
						<button className={"btn "+this.props.buttonClass || ""} type="button" onClick={this.props.clickButton}>
							{this.props.buttonText}
						</button>
					</div>
				</div>
			</div>
		);
	}
}