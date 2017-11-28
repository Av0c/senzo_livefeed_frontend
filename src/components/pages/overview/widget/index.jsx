import React from 'react';
import { connect } from 'react-redux';
import { getOccupancyOverview, getParams } from 'actions/stats';
import WidgetContainer from 'components/pages/overview/widget/widgetcontainer';

export class Widgets extends React.Component {

    generateWidgets() {
        return this.props.overview.map((element, index) => {
            return <WidgetContainer id={index} key={index} node={element.node} stats={element.data} allSensors={this.props.allSensors}
            querySettings={this.props.querySettings} />
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
        overview: state.statsReducer.overview
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Widgets);