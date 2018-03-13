import React from 'react';
import { connect } from 'react-redux';
import { getOccupancyOverview, getParams } from 'actions/stats';
import WidgetContainer from 'components/pages/overview/widget/widgetcontainer';
import { RECEIVE_FIRST_LOCATION_OVERVIEW, RECEIVE_SECOND_LOCATION_OVERVIEW } from 'actions/comparison';

export class Widgets extends React.Component {

    deleteWidget() {
    }

    render() {
        return (
            <React.Fragment>
                {this.props.nodes.map((node, index) => {
                    if (node) {
                        return <WidgetContainer id={index} key={index} node={node}
                            allSensors={this.props.allSensors}
                            deleteWidget={this.deleteWidget.bind(this)}
                            querySettings={this.props.querySettings}
                            action={index == 0 ? RECEIVE_FIRST_LOCATION_OVERVIEW : RECEIVE_SECOND_LOCATION_OVERVIEW} />
                    } else {
                        return null;
                    }
                })}
            </React.Fragment>
        );
    }


}

function mapStateToProps(state) {
    return {
        nodes: state.comparisonReducer.nodes
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Widgets);
