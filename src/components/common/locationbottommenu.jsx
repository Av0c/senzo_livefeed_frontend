import React from 'react';
import { Link } from 'react-router';

export default class LocationBottomMenu extends React.Component {

    render() {
        return (
            <div className="card-bottom-menu">
                <div className="row">
                    <div className="col-xs-4 text-center card-bottom-menu-icon"><a className="card-settings" href="#"><img src="src/assets/images/card-settings.svg" /></a></div>
                    <div className="col-xs-4 text-center card-bottom-menu-icon"><a className="card-export" href="#"><img src="src/assets/images/export.svg" /></a></div>
                    <div className="col-xs-4 text-center">
                        <Link to={`/live/${this.props.nodeId}`} className="card-settings" onClick={this.props.redirectMaintenanceView} >
                            <div className="faulty">{this.props.faulty}</div>
                            <img src="src/assets/images/maintenance.svg" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}