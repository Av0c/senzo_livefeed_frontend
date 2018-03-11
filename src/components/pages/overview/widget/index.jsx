import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';
import { getOccupancyOverview, getParams, findOccupancyTag } from 'actions/stats';
import WidgetContainer from 'components/pages/overview/widget/widgetcontainer';
import { updateUser, deleteWidget, editWidget } from 'actions/myaccount';

export class Widgets extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        }
    }
    componentWillReceiveProps(nextProps) {
    }

    deleteWidget(nodeId) {
        let self = this;
        let user = this.props.user;
        let index = user.details.location.indexOf(nodeId);
        user.details.location.splice(index, 1);
        this.props.dispatch(updateUser(user.username, user));
    }

    editWidget(nodeId1, nodeId2) {
        let user = this.props.user;
        if (user.details.location.indexOf(nodeId2) > -1) {
            toastr.error("This location's widget has already existed");
        }
        else {
            let index = user.details.location.indexOf(nodeId1);
            user.details.location[index] = nodeId2;
            this.props.dispatch(updateUser(user.username, user))
        }
    }

    render() {
        var ids = [];
        if (this.props.user.details && this.props.user.details.location && this.props.user.details.location.constructor === Array) {
            ids = this.props.user.details.location;
        }
        return (
            <React.Fragment>
                {ids.map((id, index) => {
                    let node = this.props.nodeMap[id];
                    if (node) {
                        return <WidgetContainer id={id} key={index} node={node}
                            deleteWidget={this.deleteWidget.bind(this)}
                            allSensors={this.props.allSensors}
                            querySettings={this.props.querySettings}
                            tree={this.props.tree} editWidget={this.editWidget.bind(this)} />
                    }
                    return null;
                })}
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.myAccountReducer.user,
        nodeMap: state.overviewReducer.nodeMap,
        overviewMap: state.statsReducer.overviewMap,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Widgets);
