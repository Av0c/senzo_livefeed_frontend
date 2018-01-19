import React from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';
import { getOccupancyOverview, getParams } from 'actions/stats';
import WidgetContainer from 'components/pages/overview/widget/widgetcontainer';
import { updateUser, deleteWidget, editWidget } from 'actions/myaccount';

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
        this.props.dispatch(deleteWidget(nodeId));
    }

    editWidget(nodeId1, nodeId2) {
        let user = this.props.user;
        if (user.details.location.indexOf(nodeId2) > -1) {
            toastr.error("This location's widget has already existed");
        }
        else {
            let index = user.details.location.indexOf(nodeId1);
            user.details.location[index] = nodeId2;
            this.props.dispatch(updateUser(user.username, user)).then(()=> {
                this.props.dispatch(editWidget(nodeId1, nodeId2));
            });
        }
    }

    generateWidgets() {
        return this.props.overview.map((element, index) => {
            return <WidgetContainer id={index} key={index} node={element.node}
                deleteWidget={this.deleteWidget.bind(this)}
                stats={element.data} allSensors={this.props.allSensors}
                querySettings={this.props.querySettings}
                tree={this.props.tree} editWidget={this.editWidget.bind(this)} />
        });
    }

    render() {
        let widgets = this.generateWidgets();
        return (
            <div className="card-container">
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
