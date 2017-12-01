import React from 'react';
import { connect } from 'react-redux';

export class Settings extends React.Component {
    render() {
        return (
            <div className="settings-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="account-title">Location Settings</h2>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="heading clearfix">
                                <h3 className="pull-left">Microsoft</h3><a className="button btn-green add-loc-button" href="#settings-add-location-modal" data-toggle="modal">Add Location   </a>
                            </div>
                            <ul className="locations-list clearfix">
                                <li>
                                    <div className="location-wrapper clearfix">
                                        <div className="location-name pull-left" data-toggle="collapse" href="#collapse-finland">Finland</div>
                                        <div className="location-options pull-right"> <a className="button btn-green pull-left" href="#settings-add-location-modal" data-toggle="modal">Add Location</a>
                                            <div className="edit-btn pull-left">
                                                <div className="button btn-green settings-edit" id="dLabel" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Edit</div>
                                                <div className="dropdown-menu settings-location-dropdown" aria-labelledby="dLabel">
                                                    <ul>
                                                        <li><a href="#settings-edit-location-modal" data-toggle="modal">Edit Location</a></li>
                                                        <li> <a href="#add-floorplan-modal" data-toggle="modal">Add Floorplan</a></li>
                                                        <li> <a href="#settings-add-sensor-modal" data-toggle="modal">Add Sensor</a></li>
                                                    </ul>
                                                </div>
                                            </div><a className="bin pull-left" href="#delete-location-modal" data-toggle="modal"></a>
                                        </div>
                                    </div>
                                    <ul className="collapse" id="collapse-finland">
                                        <li>
                                            <div className="location-wrapper clearfix">
                                                <div className="location-name pull-left" data-toggle="collapse" href="#collapse-office-1">Office 1</div>
                                                <div className="location-options pull-right"> <a className="button btn-green pull-left" href="#settings-add-location-modal" data-toggle="modal">Add Location</a>
                                                    <div className="edit-btn pull-left">
                                                        <div className="button btn-green settings-edit" id="dLabel" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Edit</div>
                                                        <div className="dropdown-menu settings-location-dropdown" aria-labelledby="dLabel">
                                                            <ul>
                                                                <li><a href="#settings-edit-location-modal" data-toggle="modal">Edit Location</a></li>
                                                                <li> <a href="#add-floorplan-modal" data-toggle="modal">Add Floorplan</a></li>
                                                                <li> <a href="#settings-add-sensor-modal" data-toggle="modal">Add Sensor</a></li>
                                                            </ul>
                                                        </div>
                                                    </div><a className="bin pull-left" href="#delete-location-modal" data-toggle="modal"></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="location-wrapper clearfix">
                                                <div className="location-name pull-left" data-toggle="collapse" href="#collapse-office-2">Office 2</div>
                                                <div className="location-options pull-right"> <a className="button btn-green pull-left" href="#settings-add-location-modal" data-toggle="modal">Add Location</a>
                                                    <div className="edit-btn pull-left">
                                                        <div className="button btn-green settings-edit" id="dLabel" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Edit</div>
                                                        <div className="dropdown-menu settings-location-dropdown" aria-labelledby="dLabel">
                                                            <ul>
                                                                <li><a href="#settings-edit-location-modal" data-toggle="modal">Edit Location</a></li>
                                                                <li> <a href="#add-floorplan-modal" data-toggle="modal">Add Floorplan</a></li>
                                                                <li> <a href="#settings-add-sensor-modal" data-toggle="modal">Add Sensor</a></li>
                                                            </ul>
                                                        </div>
                                                    </div><a className="bin pull-left" href="#delete-location-modal" data-toggle="modal"></a>
                                                </div>
                                            </div>
                                            <ul className="collapse" id="collapse-office-2">
                                                <li>
                                                    <div className="location-wrapper clearfix">
                                                        <div className="location-name pull-left" data-toggle="collapse" href="#collapse-office-wing-1">Office Wing 1</div>
                                                        <div className="location-options pull-right"> <a className="button btn-green pull-left" href="#settings-add-location-modal" data-toggle="modal">Add Location</a>
                                                            <div className="edit-btn pull-left">
                                                                <div className="button btn-green settings-edit" id="dLabel" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Edit</div>
                                                                <div className="dropdown-menu settings-location-dropdown" aria-labelledby="dLabel">
                                                                    <ul>
                                                                        <li><a href="#settings-edit-location-modal" data-toggle="modal">Edit Location</a></li>
                                                                        <li> <a href="#add-floorplan-modal" data-toggle="modal">Add Floorplan</a></li>
                                                                        <li> <a href="#settings-add-sensor-modal" data-toggle="modal">Add Sensor</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div><a className="bin pull-left" href="#delete-location-modal" data-toggle="modal"></a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="location-wrapper clearfix">
                                        <div className="location-name pull-left" data-toggle="collapse" href="#collapse-undefined">Russia</div>
                                        <div className="location-options pull-right"> <a className="button btn-green pull-left" href="#settings-add-location-modal" data-toggle="modal">Add Location</a>
                                            <div className="edit-btn pull-left">
                                                <div className="button btn-green settings-edit" id="dLabel" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Edit</div>
                                                <div className="dropdown-menu settings-location-dropdown" aria-labelledby="dLabel">
                                                    <ul>
                                                        <li><a href="#settings-edit-location-modal" data-toggle="modal">Edit Location</a></li>
                                                        <li> <a href="#add-floorplan-modal" data-toggle="modal">Add Floorplan</a></li>
                                                        <li> <a href="#settings-add-sensor-modal" data-toggle="modal">Add Sensor</a></li>
                                                    </ul>
                                                </div>
                                            </div><a className="bin pull-left" href="#delete-location-modal" data-toggle="modal"></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
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
        tree: state.overviewReducer.customerOverview
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);