import React from 'react';
import { connect } from 'react-redux';
import { getOccupancyOverview, getParams } from 'actions/stats';
import WidgetContainer from 'components/pages/overview/widget/widgetcontainer';
import { RECEIVE_FIRST_LOCATION_OVERVIEW, RECEIVE_SECOND_LOCATION_OVERVIEW } from 'actions/comparison';

export class Widgets extends React.Component {

    deleteWidget() {
    }

    generateWidgets() {
        return this.props.overview.map((element, index) => {
            return <WidgetContainer id={index} key={index} node={element.node}
                stats={element.data} allSensors={this.props.allSensors}
                deleteWidget={this.deleteWidget.bind(this)}
                querySettings={this.props.querySettings}
                action={index == 0 ? RECEIVE_FIRST_LOCATION_OVERVIEW : RECEIVE_SECOND_LOCATION_OVERVIEW} />

        });
    }

    render() {
        let widgets = this.generateWidgets();
        return (
            <div>
                {widgets}
            </div>
        );
    }


}

function mapStateToProps(state) {
    return {
        overview: state.comparisonReducer.overview
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Widgets);