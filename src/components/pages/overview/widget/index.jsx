import React from 'react';
import { connect } from 'react-redux';
import { getOccupancyOverview, getParams } from 'actions/stats';
import WidgetContainer from 'components/pages/overview/widget/widgetcontainer';
import { updateUser } from 'actions/myaccount';

export class Widgets extends React.Component {

    deleteWidget(nodeId) {
        let self = this;
        let user = this.props.user;
        let index = user.details.location.indexOf(nodeId);
        user.details.location.splice(index, 1);
        this.props.dispatch(updateUser(user.username, user)).then(() => {
            let remove = self.props.overview.findIndex((element) => {
                return element.id == nodeId;
            });
            self.props.overview.splice(remove, 1);
        });
    }

    generateWidgets() {
        return this.props.overview.map((element, index) => {
            return <WidgetContainer id={index} key={index} node={element.node}
                deleteWidget={this.deleteWidget.bind(this)}
                stats={element.data} allSensors={this.props.allSensors}
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
        user: state.myAccountReducer.user,
        overview: state.statsReducer.overview
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Widgets);