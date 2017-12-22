import React from 'react';
import { Link } from 'react-router';
import DeleteLocationForm from 'components/common/deletelocationform';

class EditWidget extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    changeHandler(e) {
        let key = e.target.id;
        let value = e.target.value;
        this.setState({ [key]: value });
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

    render() {
        let options = [];
        this.generateOptions(this.props.tree, options);
        return (
            <div>
                <div style={{backgroundColor:'transparent'}} className={"modal-overlay" + (this.props.isEditingWidget ? "" : " closed")} onClick={this.props.closeEditWidgetForm}></div>
                <div style={{zIndex:'10000'}} className={"add-account-wrapper invite-modal" + (this.props.isEditingWidget ? "" : " closed")}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <button className="close" onClick={this.props.closeEditWidgetForm}>×</button>
                            <h4 className="modal-title">Edit Widget</h4>
                        </div>
                        <div className="modal-body settings-wrapper">
                            <div>
                                <div className="country">
                                    <label style={{paddingLeft:'20px', paddingBottom:'5px'}}>Location</label>
                                    <select id="location" onChange={this.changeHandler.bind(this)}>
                                        {options}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-default" type="button" onClick={this.props.closeEditWidgetForm} >Cancel</button>
                            <button className="btn btn-success" type="button" onClick={() => {
                                this.props.closeEditWidgetForm();
                            }} >Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default class LocationBottomMenu extends React.Component {

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
            <div className="card-bottom-menu">
                <div className="row">
                    <div className="col-xs-4 text-center card-bottom-menu-icon"><a onClick={this.openSettingDropdown.bind(this)} className="card-settings" href="#"><img src="src/assets/images/card-settings.svg" /></a>
                        {this.state.isShowingSetting && <div aria-labelledby="dLabel">
                            <div style={{ backgroundColor: 'transparent' }} className={"modal-overlay" + (this.state.isShowingSetting ? "" : " closed")} onClick={this.closeSettingDropdown.bind(this)} ></div>
                            <div style={{ left: '10px', textAlign: 'left', minWidth: '170px' }} className={" dropdown-menu settings-location-dropdown " + (this.state.isShowingSetting ? "" : " closed")}>
                                <ul style={{ textAlign: 'left' }}>
                                    <li onClick={() => {
                                        this.closeSettingDropdown();
                                        this.openDeleteLocationForm();
                                    }}><a>Delete</a></li>
                                    <li onClick={() => {
                                        this.closeSettingDropdown();
                                        this.openEditWidgetForm();
                                    }}> <a>Edit</a></li>
                                </ul>
                            </div>
                        </div>
                        }
                        {this.state.isDeletingLocation && <DeleteLocationForm isDeletingLocation={this.state.isDeletingLocation}
                            node={this.props.node} closeDeleteLocationForm={this.closeDeleteLocationForm.bind(this)}
                            submit={this.deleteWidget.bind(this)} />}
                        {this.state.isEditingWidget && <EditWidget isEditingWidget={this.state.isEditingWidget}
                            closeEditWidgetForm={this.closeEditWidgetForm.bind(this)}
                            tree={this.props.tree} />}
                    </div>
                    <div className="col-xs-4 text-center card-bottom-menu-icon"><a className="card-export" href="#"><img src="src/assets/images/export.svg" /></a></div>
                    <div className="col-xs-4 text-center">
                        <Link to={`/live/${this.props.node.id}`} className="card-settings" onClick={this.props.redirectMaintenanceView} >
                            <div className="faulty">{this.props.faulty}</div>
                            <img src="src/assets/images/maintenance.svg" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}