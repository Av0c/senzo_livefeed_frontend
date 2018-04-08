import TotalOccupancy from 'components/pages/stats/totaloccupancy';
import OccupancyRange from 'components/pages/stats/occupancyrange';
import DailyOccupancy from 'components/pages/stats/dailyoccupancy';
import OccupancyBreakDown from 'components/pages/stats/occupancybreakdown';

import React, { Component } from 'react';

class Charts extends Component {

    render() {
        return (
            <div>
                <div className="col-sm-12">
                    <TotalOccupancy currentNode={this.props.currentNode} querySettings={this.props.querySettings} />
                </div>
                <div className="col-sm-12">
                    <OccupancyRange querySettings={this.props.querySettings} currentNode={this.props.currentNode} />
                </div>
                <div className="col-sm-12">
                    <OccupancyBreakDown querySettings={this.props.querySettings} currentNode={this.props.currentNode} />
                </div>
                <div className="col-sm-12">
                    <DailyOccupancy querySettings={this.props.querySettings} currentNode={this.props.currentNode} />
                </div>
            </div>
        );
    }

}

export default Charts;
