import React from 'react';
import { connect } from 'react-redux';
import { addNodeWidget } from 'actions/overview';
import SearchBar from 'components/common/searchbar';
import { getOccupancyOverview, getParams } from 'actions/stats';
import { updateUser } from 'actions/myaccount';

export class SearchContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            showSearch: false
        };
        this.showSearchBar = this.showSearchBar.bind(this);
        this.addNodeWidget = this.addNodeWidget.bind(this);
    }
    showSearchBar() {
        this.setState({ showSearch: !this.state.showSearch });
    }

    addNodeWidget(node) {
        let user = Object.assign({}, this.props.user);
        if (!user.details) {
            user.details = {};
            user.details.location = [node.id];
        }
        else if(user.details.location.includes(node.id)){

        }
        else {
            user.details.location = [...user.details.location, node.id];
        }

        let params = getParams({ currentNode: node, querySettings: this.props.querySettings });
        this.props.dispatch(updateUser(user.username, user));
    }

    render() {
        return (
            <div className="col-sm-3 col-xs-12 text-center add-cart-zone">
                {this.state.showSearch ? <SearchBar querySettings={this.props.querySettings} addNodeWidget={this.addNodeWidget} tree={this.props.tree} hideSearchBar={this.showSearchBar} /> : <a className="add-card" onClick={this.showSearchBar}> <img src="src/assets/images/plus.svg" />
                    <div className="add-card-descr">
                        Add Location</div>
                </a>}
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