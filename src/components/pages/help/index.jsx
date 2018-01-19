import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"
import axios from 'axios';
import toastr from "toastr"

class Help extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			subject: "",
			body: "",
			subjectError: false,
			bodyError: false
		};
	}

	submit() {
		var ok1 = (this.state.subject.length > 0);
		var ok2 = (this.state.body.length > 0);
		if (ok1 && ok2) {
			var form = {
				subject: this.state.subject,
				body: this.state.body,
			}
			toastr.info("Sending...");
			axios.post(config.api.root + `/help`, form)
			.then((response) => {
				toastr.remove();
				toastr.success("Submit successfully !");
			}).catch((error) => {
				toastr.remove();
				toastr.success("Submit failed !");
			});
		}
		this.setState({
			subjectError: !ok1,
			bodyError: !ok2,
		});
	}

	onChange(key, e) {
		var st = {};
		st[key] = e.target.value;
		this.setState(st);
	}

	render() {
		return (
			<div className="settings-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							<div className="settings-header clearfix">
								<h2 className="account-title pull-left">Help!</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-5">
							<div className="faq-container">
								<h4>Frequently asked questions</h4>
								<div className="single-faq">
									<h5>Is there something somewhere?</h5>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue enim sed ipsum semper dignissim. Integer et lobortis dui. Fusce a lorem nec leo lobortis gravida. Donec odio orci, facilisis sit amet nunc vel, pretium efficitur mi. Donec vehicula ligula sed commodo gravida. Vestibulum eu nunc at elit dapibus gravida.		</p>
								</div>
								<div className="single-faq">
									<h5>Is there something somewhere?</h5>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue enim sed ipsum semper dignissim. Integer et lobortis dui. Fusce a lorem nec leo lobortis gravida. Donec odio orci, facilisis sit amet nunc vel, pretium efficitur mi. Donec vehicula ligula sed commodo gravida. Vestibulum eu nunc at elit dapibus gravida.	</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-md-offset-1">
							<div className="feedback-container">
								<h4>Contact SenzoIT</h4>
								<p>Please send your message to SenzoIT´s support team.</p>
								<form className="feedback">
									<div className="feedback-subject">
										<label>Subject<span className="required">*</span></label>
										<input
											type="text"
											value={this.state.subject}
											className={this.state.subjectError ? "has-error" : ""}
											onChange={(e) => this.onChange("subject", e)}
										/>
									</div>
									<div className="feedback-message">
										<label>Message<span className="required">*</span></label>
										<textarea
											rows="4"
											value={this.state.body}
											className={this.state.bodyError ? "has-error" : ""}
											onChange={(e) => this.onChange("body", e)}
										></textarea>
									</div>
									<div className="feedback-submit">
										<input type="button" value="Send Message" onClick={() => this.submit()}/>
									</div>
								</form>
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
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Help);