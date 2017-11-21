import React from 'react';
import SearchBar from 'components/common/searchbar';

export default class SearchContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            showSearch: false
        };
        this.showSearchBar = this.showSearchBar.bind(this);
    }
    showSearchBar() {
        this.setState({ showSearch: !this.state.showSearch });
    }

    render() {
        return (
            <div className="col-sm-8 col-xs-12 text-center add-cart-zone">
                {this.state.showSearch ? <SearchBar tree={this.props.tree} /> : <a className="add-card" onClick={this.showSearchBar}> <img src="src/assets/images/plus.svg" />
                    <div className="add-card-descr">
                        Add Location</div>
                </a>}
            </div>
        );
    }
}