import React from 'react';
import Dropdown from 'components/common/dropdown';
import DropdownItem from 'components/common/dropdownitem';
import config from 'config';

export default class LocationSelector extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            name: ''
        };
    }
    clickOption(tree) {
        this.setState({name: tree.info.name});
        this.props.chooseLocation(tree);
    }
    generateListItems(tree, list) {
        var self = this;
        list.push(<DropdownItem key={tree.id*tree.id} class={self.props.class}>
            <div key={tree.id} onClick={self.clickOption.bind(self, tree)}>
                {tree.info.name}
            </div>
        </DropdownItem>);
        if (tree.children && tree.type != 'meeting_room' && tree.type != 'open_area') {
            
            tree.children.forEach(function (element) {
                return self.generateListItems(element, list);
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({name: nextProps.tree.info.name});
        this.props.chooseLocation(nextProps.tree);
    }

    render() {
        let list = [];
        this.generateListItems(this.props.tree, list);
        return (
            <Dropdown header={this.state.name} toggleable>
                {list}
            </Dropdown>
        );
    }
}