import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"

class DefaultSettings extends React.Component {
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
								<h2 className="account-title">Default Settings</h2>
							</div>
						</div>
					</div>
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12"> 
								<div className="card default-settings-card clearfix">
									<div className="card-heading clearfix">
										<h3 className="pull-left">Company Settings Card</h3>
										<div className="location-picker pull-right"><a id="loc-picker" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Locations </a><i className="fa fa-chevron-down" aria-hidden="true"></i>
											<div className="dropdown-menu location-picker-dropdown" aria-labelledby="loc-picker">
												<label for="all-locations">
													<input type="checkbox" id="all-locations"/><span>All Locations</span>
												</label>
												<label for="finland">
													<input type="checkbox" id="finland"/><span>Finland </span>
												</label>
												<label for="russia">
													<input type="checkbox" id="russia"/><span>Russia</span>
												</label>
											</div>
										</div>
									</div>
									<div className="working-hours">
										<h4>Working Hours    </h4>
										<div className="hours-picker"></div>
									</div>
									<div className="working-days">
										<h4>Working Days</h4>
										<div className="days-picker clearfix">
											<label className="text-center" for="monday-1"> 
												<input className="chbx" type="checkbox" name="monday" id="monday-1"/><span className="custom-checkbox"></span><span className="week-day">Monday</span>
											</label>
											<label className="text-center" for="tuesday-1"> 
												<input className="chbx" type="checkbox" name="monday" id="tuesday-1"/><span className="custom-checkbox"></span><span className="week-day">Tuesday</span>
											</label>
											<label className="text-center" for="wednesday-1"> 
												<input className="chbx" type="checkbox" name="monday" id="wednesday-1"/><span className="custom-checkbox"></span><span className="week-day">Wednesday  </span>
											</label>
											<label className="text-center" for="thursday-1"> 
												<input className="chbx" type="checkbox" name="monday" id="thursday-1"/><span className="custom-checkbox"></span><span className="week-day">Thursday  </span>
											</label>
											<label className="text-center" for="friday-1"> 
												<input className="chbx" type="checkbox" name="monday" id="friday-1"/><span className="custom-checkbox"></span><span className="week-day">Friday     </span>
											</label>
											<label className="text-center" for="saturday-1"> 
												<input className="chbx" type="checkbox" name="monday" id="saturday-1"/><span className="custom-checkbox"></span><span className="week-day">Saturday  </span>
											</label>
											<label className="text-center" for="sunday-1"> 
												<input className="chbx" type="checkbox" name="monday" id="sunday-1"/><span className="custom-checkbox"></span><span className="week-day">Sunday    </span>
											</label>
										</div>
									</div>
									<div className="default-settings-bottom">
										<div className="pull-right">
											<a className="button" href="#">Save Changes</a><a className="button btn-green" href="#add-location-modal" data-toggle="modal">Add Card  </a>
										</div>
									</div>
								</div>
								<div className="card default-settings-card clearfix">
									<div className="card-heading clearfix">
										<h3 className="pull-left">Settings: Finland, Sweden</h3>
										<div className="location-picker pull-right"><a id="loc-picker" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Locations </a><i className="fa fa-chevron-down" aria-hidden="true"></i>
											<div className="dropdown-menu location-picker-dropdown" aria-labelledby="loc-picker">
												<label for="all-locations">
													<input type="checkbox" id="all-locations"/><span>All Locations</span>
												</label>
												<label for="finland">
													<input type="checkbox" id="finland"/><span>Finland </span>
												</label>
												<label for="russia">
													<input type="checkbox" id="russia"/><span>Russia</span>
												</label>
											</div>
										</div>
									</div>
									<div className="working-hours">
										<h4>Working Hours    </h4>
										<div className="hours-picker"></div>
									</div>
									<div className="working-days">
										<h4>Working Days</h4>
										<div className="days-picker">
											<label className="text-center" for="monday-1"> 
												<input className="chbx" type="checkbox" name="monday" id="monday-1"/><span className="custom-checkbox"></span><span className="week-day">Monday</span>
											</label>
											<label className="text-center" for="tuesday-1"> 
												<input className="chbx" type="checkbox" name="monday" id="tuesday-1"/><span className="custom-checkbox"></span><span className="week-day">Tuesday</span>
											</label>
											<label className="text-center" for="wednesday-1"> 
												<input className="chbx" type="checkbox" name="monday" id="wednesday-1"/><span className="custom-checkbox"></span><span className="week-day">Wednesday  </span>
											</label>
											<label className="text-center" for="thursday-1"> 
												<input className="chbx" type="checkbox" name="monday" id="thursday-1"/><span className="custom-checkbox"></span><span className="week-day">Thursday  </span>
											</label>
											<label className="text-center" for="friday-1"> 
												<input className="chbx" type="checkbox" name="monday" id="friday-1"/><span className="custom-checkbox"></span><span className="week-day">Friday     </span>
											</label>
											<label className="text-center" for="saturday-1"> 
												<input className="chbx" type="checkbox" name="monday" id="saturday-1"/><span className="custom-checkbox"></span><span className="week-day">Saturday  </span>
											</label>
											<label className="text-center" for="sunday-1"> 
												<input className="chbx" type="checkbox" name="monday" id="sunday-1"/><span className="custom-checkbox"></span><span className="week-day">Sunday   </span>
											</label>
										</div>
									</div>
									<div className="default-settings-bottom">
										<div className="pull-right"><a className="bin-default-settings" href="#delete-location-modal" data-toggle="modal"></a><a className="button" href="#">Save Changes</a><a className="button btn-green" href="#add-location-modal" data-toggle="modal">Add Card               </a></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="modal fade" id="delete-location-modal">
					<div className="modal-dialog modal-sm">
						<div className="modal-content">
							<div className="modal-header">
								<button className="close" type="button" data-dismiss="modal" aria-hidden="true">×</button>
								<h4 className="modal-title">Delete Location</h4>
							</div>
							<div className="modal-body delete-user-wrapper">
								<p>Are you sure you want to delete this Location?</p>
							</div>
							<div className="modal-footer">
								<button className="btn btn-default" type="button" data-dismiss="modal">Cancel</button>
								<button className="btn btn-danger" type="button">Delete</button>
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
									<label for="finland">
										<input type="checkbox" name="Finland" id="finland"/><span>Finland</span>
									</label>
									<label for="russia">
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
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultSettings);