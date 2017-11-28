import React from 'react';
import Select from 'react-select';

export default class SearchBar extends React.Component {

    onChange(val) {
        this.props.addNodeWidget(val.values);
    }

    constructOptions(tree, options) {
        var self = this;

        if (tree.children) {
            options.push({ label: tree.info.name, values: tree });
            tree.children.forEach(function (element) {
                self.constructOptions(element, options);
            });
        }

    }

    render() {
        let options = [];
        this.constructOptions(this.props.tree, options);
        return (
            <div style={{ width: '300px', textAlign: 'left', position: 'absolute', top: '0px' }}>
                <Select name="form-field-name"
                    options={options}
                    onChange={this.onChange.bind(this)}
                    onClose={this.props.hideSearchBar} />
            </div>
        );
    }
}