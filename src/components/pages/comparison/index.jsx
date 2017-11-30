import React from 'react';
import DateSelector from 'components/common/dateselector';
import LeftMenu from 'components/common/leftmenu';
import ComparisonCard from 'components/pages/comparison/comparisoncard';
import Charts from 'components/pages/comparison/charts';

export default class Comparison extends React.Component {

    render() {
        return (
            <div className="comparison-stats-wrapper">
                <div className="container-fluid">
                    <div style={{ paddingTop: '30px', marginBottom: '30px' }} className="row">
                        <div className="col-md-12">
                            <LeftMenu overview='' comparison='active' />
                            <DateSelector />
                        </div>
                    </div>
                    <ComparisonCard />
                    <Charts />
                </div>
            </div>
        );
    }
}