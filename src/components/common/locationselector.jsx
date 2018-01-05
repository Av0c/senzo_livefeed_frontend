import React from 'react';
import { connect } from 'react-redux';
import Dropdown from 'components/common/dropdown';
import DropdownItem from 'components/common/dropdownitem';
import config from 'config';

export class LocationSelector extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            node: {
                info: {
                    name: ''
                }
            }
        };
    }

    clickOption(tree) {
        this.setState({ node: tree });
        this.props.chooseLocation(tree);
    }
    generateListItems(tree, list) {
        var self = this;
        if (tree.type != 'customer') {
            list.push(<DropdownItem key={tree.id * tree.id} class={self.props.class}>
                <div key={tree.id} onClick={self.clickOption.bind(self, tree)}>
                    {tree.info.name}
                </div>
            </DropdownItem>);
        }
        if (tree.children && tree.type != 'meeting_room' && tree.type != 'open_area') {
            tree.children.forEach(function (element) {
                return self.generateListItems(element, list);
            });
        }
    }

    componentDidMount() {
        let nextProps = this.props;
        if (nextProps.tree.id > 0) {
            if (nextProps.tree.children) {
                if (nextProps.tree.type == 'customer') {
                    this.setState({ node: nextProps.tree.children[0] });
                    this.props.chooseLocation(nextProps.tree.children[0]);
                }
                else {
                    this.setState({ node: nextProps.tree });
                    this.props.chooseLocation(nextProps.tree);
                }
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.tree.children && nextProps.overview.length < 2) {
            if (nextProps.tree.type == 'customer') {
                this.setState({ node: nextProps.tree.children[0] });
                this.props.chooseLocation(nextProps.tree.children[0]);
            }
            else {
                this.setState({ node: nextProps.tree });
                this.props.chooseLocation(nextProps.tree);
            }
        }
        else if (this.props.querySettings.active != nextProps.querySettings.active) {
            this.props.chooseLocation(this.state.node);
        }
    }

    render() {
        let list = [];
        this.generateListItems(this.props.tree, list);
        return (
            <Dropdown header={this.state.node.info.name} toggleable>
                {list}
            </Dropdown>
        );
    }
}

function mapStateToProps(state) {
    return {
        overview: state.comparisonReducer.overview
    };
}

export default connect(mapStateToProps, null)(LocationSelector);