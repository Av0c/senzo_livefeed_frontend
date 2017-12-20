import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"

class SensorSettings extends React.Component {
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
									<h2 className="account-title pull-left">Sensor Settings</h2>
									<div className="all-locations-select pull-left">
										<div className="location-dropdown-root sensor-location-root">
											<ul> 
												<li><a href="#">Manchester</a></li>
												<li><a href="#">Glasgow  </a>
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
										</div><span>All Locations</span><i className="fa fa-chevron-down" aria-hidden="true"> </i>
									</div>
									<div className="maintenance-select pull-left"><span>Maintenance</span><i className="fa fa-chevron-down" aria-hidden="true">   </i></div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<div className="breadcrumbs"><a className="bc-root" href="#">FNB</a><span className="bc-divider">></span><a className="bc-element" href="#">1st Place, Bank City</a><span className="bc-divider">></span><a className="bc-element" href="#">Floor 1    </a></div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<table className="table sensor-settings-table">
									<tr>
										<td> <strong>MAC Address</strong></td>
										<td> <strong>Name</strong></td>
										<td><strong>Offline Since</strong></td>
										<td colspan="2">   </td>
									</tr>
									<tr>
										<td>f8:f0:05:f7:fc:cc</td>
										<td>ZA1</td>
										<td>02.02.2017</td>
										<td><a className="button" href="#edit-sensor-modal" data-toggle="modal"> Edit</a></td>
										<td> <a className="button" href="#">Floorplan</a></td>
										<td><a className="bin" href="#delete-sensor-modal" data-toggle="modal">      </a></td>
									</tr>
									<tr>
										<td>f8:f0:05:f7:fc:cc</td>
										<td>ZA1</td>
										<td>02.02.2017</td>
										<td> <a className="button" href="#edit-sensor-modal" data-toggle="modal"> Edit</a></td>
										<td> <a className="button" href="#">Floorplan</a></td>
										<td><a className="bin" href="#delete-sensor-modal" data-toggle="modal">    </a></td>
									</tr>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="modal fade" id="delete-sensor-modal">
					<div className="modal-dialog modal-sm">
						<div className="modal-content">
							<div className="modal-header">
								<button className="close" type="button" data-dismiss="modal" aria-hidden="true">×</button>
								<h4 className="modal-title">Delete Sensor</h4>
							</div>
							<div className="modal-body delete-user-wrapper">
								<p>Are you sure you want to delete this Sensor?</p>
							</div>
							<div className="modal-footer">
								<button className="btn btn-default" type="button" data-dismiss="modal">Cancel</button>
								<button className="btn btn-danger" type="button">Delete</button>
							</div>
						</div>
					</div>
				</div>
				<div className="modal fade" id="edit-sensor-modal">
					<div className="modal-dialog modal-sm">
						<div className="modal-content">
							<div className="modal-header">
								<button className="close" type="button" data-dismiss="modal" aria-hidden="true">×</button>
								<h4 className="modal-title">Edit Sensor</h4>
							</div>
							<div className="modal-body edit-sensor-wrapper">
								<div className="sensor-mac">
									<label>MAC Address</label>
									<input type="text" placeholder="f8:f0:05:f7:fc:cc"/>
								</div>
								<div className="sensor-name">  
									<label>Name</label>
									<input type="text" placeholder="ZA1"/>
								</div>
							</div>
							<div className="modal-footer">
								<button className="btn btn-default" type="button" data-dismiss="modal">Cancel</button>
								<button className="btn btn-success" type="button">OK</button>
							</div>
						</div>
					</div>
				</div>
				<div className="modal fade" id="floorplan-modal">
					<div className="modal-dialog modal-sm">
						<div className="modal-content">
							<div className="modal-header">
								<button className="close" type="button" data-dismiss="modal" aria-hidden="true">×</button>
								<h4 className="modal-title">Add Floorplan</h4>
							</div>
							<div className="modal-body edit-sensor-wrapper">
								<div className="sensor-mac">
									<label>MAC Address</label>
									<input type="text" placeholder="f8:f0:05:f7:fc:cc"/>
								</div>
								<div className="sensor-name">  
									<label>Name</label>
									<input type="text" placeholder="ZA1"/>
								</div>
							</div>
							<div className="modal-footer">
								<button className="btn btn-default" type="button" data-dismiss="modal">Cancel</button>
								<button className="btn btn-success" type="button">OK</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(SensorSettings);