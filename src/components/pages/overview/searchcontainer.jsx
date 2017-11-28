import React from 'react';
import { connect } from 'react-redux';
import {addNodeWidget} from 'actions/overview';
import SearchBar from 'components/common/searchbar';
import { getOccupancyOverview, getParams } from 'actions/stats';

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
        let params = getParams({currentNode: node, querySettings: this.props.querySettings});
        this.props.dispatch(getOccupancyOverview(params, node));
    }

    render() {
        return (
            <div className="col-sm-8 col-xs-12 text-center add-cart-zone">
                {this.state.showSearch ? <SearchBar querySettings={this.props.querySettings} addNodeWidget={this.addNodeWidget} tree={this.props.tree} hideSearchBar={this.showSearchBar} /> : <a className="add-card" onClick={this.showSearchBar}> <img src="src/assets/images/plus.svg" />
                    <div className="add-card-descr">
                        Add Location</div>
                </a>}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(null, mapDispatchToProps)(SearchContainer);