import React from 'react';
import { Link } from 'react-router';
import Gauge from 'components/common/gauge';
import RoomTypeSelector from 'components/common/roomtypeselector';
import LocationStats from 'components/common/locationstats';
import LocationBottomMenu from 'components/common/locationbottommenu';
export default class Widget extends React.Component {

    countTreeStatistic(root, map, type) {
        var statistic = {
            allRooms: 0,
            allSensors: 0,
            roomsInUse: 0,
            desksInUse: 0
        };
        this.count(root, statistic, map, type);
        return statistic;
    }

    count(root, statistic, map, type) {
        var self = this;
        if (root != null && root.children != null && root.children.length > 0) {
            if (((root.type == 'meeting_room' || root.type == 'open_area') && type == 'all_areas') || root.type == type) {
                statistic.allRooms++;
                let occupied = false;
                root.children.forEach((sensor) => {
                    if (map.get(sensor.id)) {
                        if (map.get(sensor.id).inuse) {
                            occupied = true;
                            statistic.desksInUse++;
                        }
                    }
                });
                statistic.allSensors += root.children.length;
                if (occupied) {
                    statistic.roomsInUse++;
                }
            }
            else {
                root.children.forEach(function (node) {
                    self.count(node, statistic, map, type);
                });
            }
        }
    }

    render() {
        return (
            <div className="col-sm-4 col-xs-12">
                <div className="the-card clearfix">
                    <h1 className="card-location">{this.props.currentNode.info.name}</h1>
                    <div className="card-buttons clearfix">
                        <div className="card-inner-location pull-left">
                            <RoomTypeSelector />
                        </div>
                        <div className="card-nav pull-right"><a className="button-sm pull-right" href="#">LIVE </a>
                            <Link className='button-sm pull-right nav-stats' to={'/statistic/' + this.props.currentNode.id}> Stats</Link></div>
                    </div>
                    <div className="card-gauge-block">
                        <Gauge />
                    </div>
                    <div className="card-marks-block"> </div>
                    <LocationStats stats={this.props.stats} />
                    <LocationBottomMenu />
                </div>
            </div>
        );
    }
}