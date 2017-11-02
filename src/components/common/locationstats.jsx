import React from 'react';

export default class LocationStats extends React.Component {

    render() {
        return (
            <div className="card-stats-numeric clearfix">
                <div className="total-rooms-container text-center pull-left">
                    <div className="total-rooms-title"><span>Total Rooms</span></div>
                    <div className="total-rooms-number"><span>{this.props.stats.allRooms}</span></div>
                    <div className="total-rooms-inuse"><span id="rooms-inuse">{this.props.stats.roomsInUse}</span><span> in use   </span></div>
                </div>
                <div className="total-desks-container text-center pull-right">
                    <div className="total-desks-title"><span>Total Desks</span></div>
                    <div className="total-desks-number"><span>{this.props.stats.allSensors}</span></div>
                    <div className="total-desks-inuse"><span id="desks-inuse">{this.props.stats.desksInUse}</span><span> in use   </span></div>
                </div>
            </div>
        );
    }
}