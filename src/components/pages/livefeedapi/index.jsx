import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"
import API from "./api"

class LiveFeedAPI extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
		};
	}

	render() {
		return (
			<div>
				<div className="settings-wrapper">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12">
								<div className="settings-header clearfix">
									<h2 className="account-title pull-left">Live feed & SenzoAPI settings</h2>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<div className="live-feeds clearfix">
									<h3 className="pull-left">Live Feeds</h3>
									<div className="add-feed" href="#">Add Feed
										<div className="location-dropdown-root api-location-root hidden">
											<ul> 
												<li><a href="#">Manchester</a></li>
												<li><a href="#">Glasgow	</a>
													<ul>
														<li><a className="all-item" href="#">All Locations</a></li>
														<li><a href="#">Office 1</a>
															<ul>
																<li><a className="all-item" href="#">All Locations</a></li>
																<li> <a href="#">Department 1</a></li>
																<li><a href="#">Department 2 </a></li>
															</ul>
														</li>
													</ul>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<ul className="api-locations-list">
									<li className="clearfix">
										<div className="api-loc clearfix">
											<div className="location-name pull-left">Helsinki/Main office/Floor 1 </div>
											<div className="feed-link pull-left"> <a href="#">http://senzolive.com/live1</a></div>
											<div className="show-users pull-left" data-toggle="collapse" href="#collapse-users-1"> <a className="button">Show Users</a></div><a className="bin apibin" href="#delete-feed-modal" data-toggle="modal">	</a>
										</div>
										<ul className="users collapse" id="collapse-users-1">
											<li className="api-single-user clearfix">
												<div className="api-username pull-left">John Doe</div>
												<div className="api-email pull-left">john@doe.com</div><a className="button alw allowed" href="#">Allowed</a><a className="api-edit button" href="#">Edit</a><a className="bin userbin" href="#delete-user-modal" data-toggle="modal"> </a>
											</li>
											<li className="api-single-user clearfix">
												<div className="api-username pull-left">John Doe</div>
												<div className="api-email pull-left">john@doe.com</div><a className="button alw blocked" href="#">Blocked</a><a className="api-edit button" href="#">Edit</a><a className="bin userbin" href="#delete-user-modal" data-toggle="modal">		</a>
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
						<API />
					</div>
				</div>
				<div className="modal fade" id="delete-feed-modal">
					<div className="modal-dialog modal-sm">
						<div className="modal-content">
							<div className="modal-header">
								<button className="close" type="button" data-dismiss="modal" aria-hidden="true">×</button>
								<h4 className="modal-title">Delete Live Feed</h4>
							</div>
							<div className="modal-body delete-user-wrapper">
								<p>Are you sure you want to delete this Live Feed?</p>
							</div>
							<div className="modal-footer">
								<button className="btn btn-default" type="button" data-dismiss="modal">Cancel</button>
								<button className="btn btn-danger" type="button">Delete</button>
							</div>
						</div>
					</div>
				</div>

				<div className="modal fade" id="delete-user-modal">
					<div className="modal-dialog modal-sm">
						<div className="modal-content">
							<div className="modal-header">
								<button className="close" type="button" data-dismiss="modal" aria-hidden="true">×</button>
								<h4 className="modal-title">Delete User</h4>
							</div>
							<div className="modal-body delete-user-wrapper">
								<p>Are you sure you want to delete this user account and all related information?</p>
							</div>
							<div className="modal-footer">
								<button className="btn btn-default" type="button" data-dismiss="modal">Cancel</button>
								<button className="btn btn-danger" type="button">Send Invitation</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(LiveFeedAPI);