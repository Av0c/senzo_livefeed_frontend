import React from 'react';
import Select from 'react-select';

//Searchbar used in:
// Location dropdown (src\containers\toolbar.jsx)
// Add widget selection (src\components\pages\overview\searchcontainer.jsx)
// Comparison view (src\components\pages\comparison\comparisoncard\index.jsx)

export default class SearchBarDropDown extends React.Component {

    constructOptions(tree, options) {
        var self = this;
        if (tree.type != 'customer') {
            options.push({ label: tree.info.name, values: tree });
        }
        if (tree.children && tree.type != 'meeting_room' && tree.type != 'open_area') {
            tree.children.forEach(function (element) {
                if (element.type != "sensor") {
                    self.constructOptions(element, options);
                }
            });
        }

    }

    render() {
        let options = [];
        this.constructOptions(this.props.tree, options);
        return (
            <Select
                options={options}
                onBlurResetsInput={true}
				onSelectResetsInput={true}
                onChange={(val) => {this.props.onChange(val.values)}}
                onOpen={this.props.onOpen}
                onFocus={this.props.onFocus}
                onClose={this.props.onClose}
                placeholder="Search..."
                value={this.props.value}
                clearable={false}
                openOnFocus={true}
                openOnClick={true}
            />
        );
    }
}
