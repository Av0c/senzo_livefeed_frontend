import TotalOccupancy from 'components/pages/stats/totaloccupancy';
import OccupancyRange from 'components/pages/stats/occupancyrange';
import DailyOccupancy from 'components/pages/stats/dailyoccupancy';
import OccupancyBreakDown from 'components/pages/stats/occupancybreakdown';

import React, { Component } from 'react';

class Charts extends Component {

    render() {
        return (
            <div>
                <div className="col-sm-12" style={{transform: "scale(0.9)"}}>
                    <TotalOccupancy currentNode={this.props.currentNode} querySettings={this.props.querySettings} />
                </div>
                <div className="col-sm-12" style={{transform: "scale(0.9)"}}>
                    <OccupancyRange querySettings={this.props.querySettings} currentNode={this.props.currentNode} />
                </div>
                <div className="col-sm-12" style={{transform: "scale(0.9)"}}>
                    <OccupancyBreakDown querySettings={this.props.querySettings} currentNode={this.props.currentNode} />
                </div>
                <div className="col-sm-12" style={{transform: "scale(0.9)"}}>
                    <DailyOccupancy querySettings={this.props.querySettings} currentNode={this.props.currentNode} />
                </div>
            </div>
        );
    }

}

export default Charts;
