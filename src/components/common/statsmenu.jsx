import React from 'react';
import RoomTypeSelector from 'components/common/roomtypeselector';
import TagSelector from 'components/common/tagselector';

export default class StatsMenu extends React.Component {

    render() {
        return (
            <div className="stats-menu" style={{ paddingTop: '50px', marginBottom: '10px' }}>
                <div className="container-fluid" style={{ paddingLeft: '0px' }}>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="stats-title pull-left">
                                <h1>Main Office</h1>
                            </div>
                            <div className="stats-room-select stats-select pull-left" style={{paddingTop: '0px'}}>
                                <RoomTypeSelector />
                            </div>
                            <div className="stats-occupancy-select stats-select pull-left" style={{paddingTop: '0px'}}>
                                <TagSelector />
                            </div><a className="stats-live-btn button-sm pull-left" href="#">LIVE</a><a className="stats-export pull-left" href="#"><img src="src/assets/images/export.svg" /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}