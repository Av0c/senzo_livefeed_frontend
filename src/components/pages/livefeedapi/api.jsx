import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"
import Modal from "components/common/modal"

import * as a from 'actions/livefeedapi'

class API extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			password: "",
			forcedClose: false,
		};
	}

	componentWillUnmount() {
		this.props.dispatch(a.clearAPIKey())
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.apikey != nextProps.apikey) {
			this.setState({forcedClose: true});
		} else {
			this.setState({forcedClose: false});
		}
	}

	generateAPIKey() {
		this.props.dispatch(a.generateAPIKey({
			username: this.props.me.username,
			old: this.state.password
		}))
	}

	onPasswordChange(e) {
		this.setState({password: e.target.value});
	}

	render() {
		console.log(this.props);
		return (
			<div className="row">
				<div className="col-md-6">
					<div className="senzo-api">
						<h3>SenzoAPI </h3>
						<div className="current-api-key">
							<p>
							Attach API key in request : <br/>
							<code>https://backend.senzodata.com/api/...?apikey={this.props.apikey}...</code>
							</p>

							<p>Generated API key is shown only <b>once</b>. So please back it up safely and carefully.
							If you have lost your API key, please generate a new one. <b>Generating new API key would make every previous API keys invalid.</b>
							</p>

							<p> If you think someone else has unauthorized access to your API key, it's best to generate a new one.
							</p>
							<Modal
								clickButton={this.generateAPIKey.bind(this)}
								header="Generate New Key"
								buttonText="Generate"
								buttonClass="btn-success"
								entry={
									!this.props.generated && <div className="button settings-button generate pull-right">Generate New Key</div>
								}
								forcedClose={this.state.forcedClose}
							>
								<p>Are you sure you want to generate a new API key ? <b>Every previous keys would become invalid.</b></p>
								<label>Password :</label>
								<input
									type="password"
									value={this.state.password}
									onChange={this.onPasswordChange.bind(this)}
									className={this.props.wrongPassword ? "has-error" : ""}
								/>
							</Modal>
							{
								this.props.generated && <div>
									<label>New API key :</label>
									<code>{this.props.apikey}</code>
									<p>Please back up this key. You can only see it this time !</p>
								</div>
							}

						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		me: state.authReducer.user,
		generated: state.livefeedAPIReducer.generated,
		wrongPassword: state.livefeedAPIReducer.wrongPassword,
		apikey: state.livefeedAPIReducer.apikey
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(API);