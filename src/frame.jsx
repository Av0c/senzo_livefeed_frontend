import React from 'react';
import { connect } from 'react-redux';
import appHistory from 'components/common/appHistory';

import { clearToken } from 'actions/authentication';
import { setCurrentNode } from 'actions/overview';
import 'react-datepicker/dist/react-datepicker.css';
import './style/main.less';

import { fetchCustomerOverview } from 'actions/overview';
import { fetchCard } from 'actions/defaultsettings';
import { fetchLiveData } from 'actions/node';
import { fetchImage } from 'actions/floorplan';
import { fetchCurrentUser } from 'actions/myaccount';

import Toolbar from 'containers/toolbar';
import ScrollTop from 'components/common/scrolltop';

export class Frame extends React.Component {

    handleTreeClick(node) {
        if(this.props.location.pathname.includes("/statistic") || this.props.location.pathname=="/" ||
        this.props.location.pathname.includes("/comparison") || this.props.location.pathname.includes("/settings/sensor")) {
            appHistory.push(`/statistic/${node.id}`);
        } else if (this.props.location.pathname.includes("/live")) {
            appHistory.push(`/live/${node.id}`);
        } else {
            this.props.dispatch(setCurrentNode(node));
        }
    }

    componentDidMount() {
        // Neccessary api init here.
        this.props.dispatch(fetchCurrentUser()).then(() => {
            this.props.dispatch(fetchCard());
            this.props.dispatch(fetchCustomerOverview(this.props.user.companyid));
            this.props.dispatch(fetchLiveData(this.props.user.companyid));
            this.props.dispatch(fetchImage(this.props.user.companyid));
        }).catch((err) => {
            console.log(err)
        });
    }


    render() {
        return (this.props.user && this.props.tree && this.props.cards && this.props.sensorMap && this.props.images) ?
        <div style={{ width: '100%', paddingLeft: '0px', paddingRight: '0px', maxWidth: '100%' }} className="container">
            <Toolbar
                actions={{ logout: this.props.logout }}
                statistic={this.handleTreeClick.bind(this)}
                location={this.props.location}
            />
            <div className="content">
                { this.props.children }
                <ScrollTop></ScrollTop>
            </div>
        </div> : null
    }
}

function mapStateToProps(state) {
    return {
        user: state.myAccountReducer.user,
        tree: state.overviewReducer.customerOverview,
        cards: state.defaultSettingsReducer.card,
        sensorMap: state.nodeReducer.map,
        images: state.floorPlanReducer.images,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => {
            dispatch(clearToken());
        },
        setCurrentNode: (node) => {
            dispatch(setCurrentNode(node));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Frame);
