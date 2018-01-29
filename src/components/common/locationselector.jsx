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
            list.push(<DropdownItem key={tree.id} class={self.props.class}>
                <div onClick={self.clickOption.bind(self, tree)}>
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

    querySettingsChanged(params1, params2) {
        return (
            params1.startdate !== params2.startdate ||
            params1.enddate !== params2.enddate ||
            params1.starthour !== params2.starthour ||
            params1.endhour !== params2.endhour ||
            params1.weekdaymask !== params2.weekdaymask ||
            params1.tag !== params2.tag ||
            params1.room !== params2.room
        );
    }

    componentWillReceiveProps(nextProps) {
        // if (nextProps.tree.children && nextProps.overview.length < 2) {
        //     if (nextProps.tree.type == 'customer') {
        //         this.setState({ node: nextProps.tree.children[0] });
        //         this.props.chooseLocation(nextProps.tree.children[0]);
        //     }
        //     else {
        //         this.setState({ node: nextProps.tree });
        //         this.props.chooseLocation(nextProps.tree);
        //     }
        // } else if (this.props.querySettings.active != nextProps.querySettings.active) {
        //     this.props.chooseLocation(this.state.node);
        // }
        if (nextProps.tree.children && !nextProps.nodes[nextProps.index]) {
            if (nextProps.tree.type == 'customer') {
                this.setState({ node: nextProps.tree.children[0] });
                this.props.chooseLocation(nextProps.tree.children[0]);
            }
            else {
                this.setState({ node: nextProps.tree });
                this.props.chooseLocation(nextProps.tree);
            }
        } else if (this.querySettingsChanged(this.props.querySettings, nextProps.querySettings)) {
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
        nodes: state.comparisonReducer.nodes,
    };
}

export default connect(mapStateToProps, null)(LocationSelector);
