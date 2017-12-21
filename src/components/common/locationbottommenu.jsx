import React from 'react';
import { Link } from 'react-router';
import DeleteLocationForm from 'components/common/deletelocationform';

export default class LocationBottomMenu extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isShowingSetting: false,
            isDeletingLocation: false
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
                                    }}> <a>Edit</a></li>
                                </ul>
                            </div>
                        </div>
                        }
                        {this.state.isDeletingLocation && <DeleteLocationForm isDeletingLocation={this.state.isDeletingLocation}
                            node={this.props.node} closeDeleteLocationForm={this.closeDeleteLocationForm.bind(this)}
                            submit={this.deleteWidget.bind(this)} />}
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