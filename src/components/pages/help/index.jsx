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
									<h5>How can I get data for each individual desk instead of larger areas?</h5>
									<p>You may export the data by clicking Export button. Data on chosen location and time period will be exported as an .csv file, in one hour periods and for each individual sensor.
									Furthermore, during H1/2018 we will add a Heatmap graphic that will visualize the occupancy of individual desks.</p>
								</div>
								<div className="single-faq">
									<h5>My organization works in two shifts, can I separate occupancy data for the shifts?</h5>
									<p>Each location may have only one working hours, so please include both shifts when setting this. You may see the data for each shift by customizing the time period (choose "Custom", dates and hours).</p>
								</div>
								<div className="single-faq">
									<h5>How can I add another admin account?</h5>
									<p>Company and Local admins may add new admin (or other) accounts in Settings - User Administration menu.</p>
								</div>
								<div className="single-faq">
									<h5>How can I integrate SenzoIT´s occupancy data with other systems (i.e. booking software)?</h5>
									<p>SenzoAPI is available since 02/2018. Please download SenzoAPI documentation in Settings menu and contact SenzoIT´s technical support (support@senzoit.com) in order to schedule an API introduction session. You may then freely integrate our occupancy data with system(s) of choices.</p>
								</div>
								<div className="single-faq">
									<h5>I´m worried about having sensors so close to my body, is it dangerous?</h5>
									<p>No need to worry, SenzoIT has conducted SAR measurement tests and the system is approved by an accredited test lab (Verkotan, 2017).</p>
								</div>
								<div className="single-faq">
									<h5>Is SenzoIT monitoring my personal behaviour?</h5>
									<p>SenzoIT's system can't recognize individual employees or their working behaviour. System provides occupancy and efficiency data on offices, meeting rooms and desks only.</p>
								</div>
								<div className="single-faq">
									<h5>What is the delay of the data in SenzoIT´s system?</h5>
									<p>SenzoUnits send occupancy data by every two minutes. The delay between the sensors and cloud system depend on wifi connection and should not be more than milliseconds. Processing the data in the cloud takes also only milliseconds.</p>
								</div>
								<div className="single-faq">
									<h5>What is the difference between occupied and standby?  Perhaps we should indicate the time on the screen so people know</h5>
									<p>Standby means that desk is unoccupied but someone has used it during last fifteen minutes (this time is customizable). Should we have a better word for this? Time indication will be added.</p>
								</div>
								<div className="single-faq">
									<h5>What does unregistered mean?</h5>
									<p>Sensor is installed but not yet registered to the software. Should happen only for a short time after installation.</p>
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
										<span className="button-sm" style={{width:"230px"}} onClick={() => this.submit()}>Send Message</span>
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
