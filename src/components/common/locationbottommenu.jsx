import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"

import toastr from 'toastr';
import DeleteLocationForm from 'components/common/deletelocationform';
import DeleteWidget from 'components/common/deletewidget';

import * as a from "actions/sensorsettings"

class EditWidget extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
        this.setState({ location: this.props.nodeId });
    }

    changeHandler(e) {
        let key = e.target.id;
        let value = e.target.value;
        this.setState({ [key]: parseInt(value) });
    }

    generateOptions(tree, options) {
        var self = this;
        if (tree.type != 'customer') {
            options.push(<option key={tree.id} value={tree.id}>{tree.info.name}</option>);
        }
        if (tree.children && tree.type != 'meeting_room' && tree.type != 'open_area') {
            tree.children.forEach(function (element) {
                if (element.type != "sensor") {
                    self.generateOptions(element, options);
                }
            });
        }
    }

    submit() {
        if (this.props.nodeId == this.state.location) {
            toastr.error("Please, choose a different location");
        }
        else {
            this.props.editWidget(this.props.nodeId, this.state.location);
            this.props.closeEditWidgetForm();
        }
    }

    render() {
        let options = [];
        this.generateOptions(this.props.tree, options);
        return (
            <div>
                <div style={{ backgroundColor: 'transparent' }} className={"modal-overlay" + (this.props.isEditingWidget ? "" : " closed")} onClick={this.props.closeEditWidgetForm}></div>
                <div style={{ zIndex: '10000' }} className={"add-account-wrapper invite-modal" + (this.props.isEditingWidget ? "" : " closed")}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <button className="close" onClick={this.props.closeEditWidgetForm}>×</button>
                            <h4 className="modal-title">Edit Widget</h4>
                        </div>
                        <div className="modal-body settings-wrapper">
                            <div>
                                <div className="country">
                                    <label style={{ paddingLeft: '20px', paddingBottom: '5px' }}>Location</label>
                                    <select value={this.state.location} id="location" onChange={this.changeHandler.bind(this)}>
                                        {options}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-default" type="button" onClick={this.props.closeEditWidgetForm} >Cancel</button>
                            <button className="btn btn-success" type="button" onClick={this.submit.bind(this)} >Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class LocationBottomMenu extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isShowingSetting: false,
            isDeletingLocation: false,
            isEditingWidget: false
        };
    }

    openDeleteLocationForm() {
        this.setState({ isDeletingLocation: true });
    }

    closeDeleteLocationForm() {
        this.setState({ isDeletingLocation: false });
    }

    openSettingDropdown() {
        this.setState({ isShowingSetting: true });
    }

    closeSettingDropdown() {
        this.setState({ isShowingSetting: false });
    }

    openEditWidgetForm() {
        this.setState({ isEditingWidget: true });
    }

    closeEditWidgetForm() {
        this.setState({ isEditingWidget: false });
    }

    deleteWidget(node) {
        this.props.deleteWidget(node.id);
        this.closeDeleteLocationForm();
    }

    render() {
        return (
            <div className="card-bottom-menu" ref="container" onScroll={this.onscroll}>
                <div className="row">
                    <div className="col-xs-4 text-center card-bottom-menu-icon">
                        <a onClick={this.openSettingDropdown.bind(this)} className="card-settings" >
                            <img src="src/assets/images/card-settings.svg" />
                        </a>
                        {this.state.isShowingSetting && (<div>
                            <div style={{ backgroundColor: 'transparent' }} className={"modal-overlay" + (this.state.isShowingSetting ? "" : " closed")} onClick={this.closeSettingDropdown.bind(this)} ></div>
                            <div className={"edit-widget-dropdown " + (this.state.isShowingSetting ? "" : " closed")}>
                                <ul style={{ textAlign: 'left', paddingLeft: '30px', marginTop: '15px' }}>
                                    <li onClick={() => {
                                        this.closeSettingDropdown();
                                        this.openDeleteLocationForm();
                                    }}><a>Delete</a></li>
                                    <li style={{ marginTop: '10px' }} onClick={() => {
                                        this.closeSettingDropdown();
                                        this.openEditWidgetForm();
                                    }}> <a>Edit</a></li>
                                </ul>
                            </div>
                        </div>)
                        }
                        {this.state.isDeletingLocation && <DeleteWidget isDeletingWidget={this.state.isDeletingLocation}
                            node={this.props.node} closeDeleteWidgetForm={this.closeDeleteLocationForm.bind(this)}
                            submit={this.deleteWidget.bind(this)} />}
                        {this.state.isEditingWidget && <EditWidget isEditingWidget={this.state.isEditingWidget}
                            closeEditWidgetForm={this.closeEditWidgetForm.bind(this)}
                            tree={this.props.tree} nodeId={this.props.node.id} editWidget={this.props.editWidget} />}
                    </div>
                    <div className="col-xs-4 text-center card-bottom-menu-icon"><a className="card-export" href="#"><img src="src/assets/images/export.svg" /></a></div>
                    <div className="col-xs-4 text-center card-bottom-menu-icon">
                        <Link
                            to={(this.props.node.info.hasfloorplan && this.props.faulty) ? `/live/${this.props.node.id}` : "/settings/sensor"}
                            className="card-settings"
                            onClick={() => {
                                if (this.props.node.info.hasfloorplan && this.props.faulty) { // live view
                                    this.props.redirectMaintenanceView(this.props.node);
                                } else { // sensor settings
                                    this.props.dispatch(a.selectNodeFilter(this.props.node));
                                    // Filter : No fault sensor => all sensors, else offline sensor
                                    var statusFilter = config.sensorStatusFilter[(this.props.faulty == 0) ? 0 : 2]
                                    this.props.dispatch(a.selectSensorStatusFilter(statusFilter));
                                }
                            }}
                        >
                            {(this.props.faulty > 0) &&
                                <div className={"faulty-number " + (this.props.node.info.hasfloorplan ? "background-red" : "background-blue")}>
                                    {this.props.faulty}
                                </div>
                            }
                            <img src="src/assets/images/maintenance.svg" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(null, mapDispatchToProps)(LocationBottomMenu);