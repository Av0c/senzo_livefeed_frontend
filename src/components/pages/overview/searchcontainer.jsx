import React from 'react';
import { connect } from 'react-redux';
import { addNodeWidget } from 'actions/overview';
import SearchBar from 'components/common/searchbar';
import SearchBarDropDown from 'components/common/searchbardropdown';
import { getOccupancyOverview, getParams } from 'actions/stats';
import { updateUser } from 'actions/myaccount';
import toastr from 'toastr';

export class SearchContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            showSearch: false
        };
        this.showSearchBar = this.showSearchBar.bind(this);
        this.hideSearchBar = this.hideSearchBar.bind(this);
        this.addNodeWidget = this.addNodeWidget.bind(this);
    }
    showSearchBar() {
        this.setState({ showSearch: true });
    }
    hideSearchBar() {
        this.setState({ showSearch: false });
    }

    addNodeWidget(node) {
        let user = Object.assign({}, this.props.user);
        if (!user.details || !user.details.location) {
            user.details = user.details || {};
            user.details.location = [node.id];
            this.props.dispatch(updateUser(user.username, user));
        }
        else if(user.details.location.includes(node.id)){
            toastr.error("Already has a widget for this location.")
        } else {
            user.details.location = [...user.details.location, node.id];
            this.props.dispatch(updateUser(user.username, user));
        }
    }

    render() {
        return (
            <div className="grid-card-center">
                <div className="the-card add-widget-card" onClick={this.showSearchBar}>
                    {this.state.showSearch ?
                        <div className={"search-container"} style={{}}>
                            <SearchBarDropDown
                                onChange={(node) => {this.addNodeWidget(node)}}
                                onFocus={() => {}}
                                onClose={() => {this.hideSearchBar()}}
                                tree={this.props.tree}
                                />
                        </div>
                        :
                        <div className="add-widget-button"> <i className="material-icons">add</i>
                        <div className="add-widget-button-desc">
                            Add Location
                        </div>
                        </div>}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.myAccountReducer.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
