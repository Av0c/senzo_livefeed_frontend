import React from 'react';

export default class Stats extends React.Component {

    render() {
        return (
            <div className="stats-body" id="stats-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-sm-12">
                                <div className="stats-graph-card card-shape clearfix">
                                    <div className="graph-header clearfix">
                                        <h2>Total Occupancy</h2>
                                    </div>
                                    <div className="the-graph clearfix">    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="stats-graph-card card-shape clearfix">
                                    <div className="graph-header clearfix">
                                        <h2>Occupancy Range</h2>

                                    </div>
                                    <div className="the-graph clearfix">    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="stats-graph-card card-shape clearfix">
                                    <div className="graph-header clearfix">
                                        <h2>Occupancy Breakdown</h2>

                                    </div>
                                    <div className="the-graph clearfix">    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="stats-graph-card card-shape clearfix">
                                    <div className="graph-header clearfix">
                                        <h2>Daily Occupancy: All Weekdays</h2>

                                    </div>
                                    <div className="the-graph clearfix">    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="stats-graph-card card-shape clearfix">
                                    <div className="graph-header clearfix">
                                        <h2>Daily Occupancy</h2>

                                    </div>
                                    <div className="the-graph clearfix">    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
