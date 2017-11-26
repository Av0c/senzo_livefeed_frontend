import React from 'react';
import { Link } from 'react-router';
import Gauge from 'components/common/gauge';
import Bar from 'components/common/bar';
import RoomTypeSelector from 'components/common/roomtypeselector';
import LocationStats from 'components/common/locationstats';
import LocationBottomMenu from 'components/common/locationbottommenu';

export default class Widget extends React.Component {

    render() {
        return (
            <div style={{marginBottom: '20px'}} className="col-sm-4 col-xs-12">
                <div className="the-card clearfix">
                    <h1 className="card-location">{this.props.node.info.name}</h1>
                    <div className="card-buttons clearfix">
                        <div className="card-inner-location pull-left">
                            <RoomTypeSelector type={this.props.type} chooseType={this.props.getOverview} />
                        </div>
                        <div className="card-nav pull-right">
                            <Link className='button-sm pull-right nav-stats' to={'live/' + this.props.node.id}> Live</Link>
                            <Link className='button-sm pull-right nav-stats' to={'/statistic/' + this.props.node.id}> Stats</Link>
                        </div>
                    </div>
                    <Gauge
                        label="Occupancy"
                        arcParams={[180, 125]}
                        values={this.props.gauge}
                    />
                    <Bar values={this.props.bar} />
                    <LocationStats stats={this.props.stats} />
                    <LocationBottomMenu />
                </div>
            </div>
        );
    }
}