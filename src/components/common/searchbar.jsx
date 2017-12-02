import React from 'react';
import Select from 'react-select';

export default class SearchBar extends React.Component {

    onChange(val) {
        this.props.addNodeWidget(val.values);
    }

    constructOptions(tree, options) {
        var self = this;
        options.push({ label: tree.info.name, values: tree });
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
            <div style={{ width: '300px', textAlign: 'left', position: 'absolute', top: '0px' }}>
                <Select name="form-field-name"
                    options={options}
                    onChange={this.onChange.bind(this)}
                    onClose={this.props.hideSearchBar} />
            </div>
        );
    }
}