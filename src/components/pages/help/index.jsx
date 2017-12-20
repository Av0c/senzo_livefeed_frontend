import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"

class Help extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
		};
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
										<input type="text"/>
									</div>
									<div className="feedback-message">
										<label>Message<span className="required">*</span></label>
										<textarea rows="4"></textarea>
									</div>
									<div className="feedback-send-copy">
										<label>Send Copy</label>
										<input type="email" placeholder="example@example.com"/>
									</div>
									<div className="feedback-submit">
										<input type="submit" value="Send Message"/>
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