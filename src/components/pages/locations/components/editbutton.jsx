import React from 'react';

export default class EditButton extends React.Component {

    render() {
        return (
            <div>
                <div className="button btn-green settings-edit" id="dLabel" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Edit</div>
                <div className="dropdown-menu settings-location-dropdown" aria-labelledby="dLabel">
                    <ul>
                        <li><a data-toggle="modal">Edit Location</a></li>
                        <li> <a data-toggle="modal">Add Floorplan</a></li>
                        <li> <a data-toggle="modal">Add Sensor</a></li>
                    </ul>
                </div>
            </div>
        );
    }
} 