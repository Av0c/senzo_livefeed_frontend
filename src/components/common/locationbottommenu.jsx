import React from 'react';

export default class LocationBottomMenu extends React.Component {

    render() {
        return (
            <div className="card-bottom-menu">
                <div className="row">
                    <div className="col-xs-4 text-center"><a className="card-settings" href="#"><img src="src/assets/images/card-settings.svg" /></a></div>
                    <div className="col-xs-4 text-center"><a className="card-export" href="#"><img src="src/assets/images/export.svg" /></a></div>
                    <div className="col-xs-4 text-center"><a className="card-settings" href="#"><img src="src/assets/images/maintenance.svg" /></a></div>
                </div>
            </div>
        );
    }
}