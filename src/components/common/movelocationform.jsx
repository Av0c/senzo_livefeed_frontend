import React from 'react';
import Modal from "components/common/modal";
import { connect } from 'react-redux';

export default class MoveLocationForm extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            availableParent: {
                customer: ["root"],
                multicountry: ["customer"],
                country: ["customer", "multicountry"],
                location: ["customer", "multicountry", "country", "location"],
                meeting_room: ["customer", "multicountry", "country", "location"],
                open_area: ["customer", "multicountry", "country", "location"],
            },
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        try {
            var parentId = nextProps.node.parent.id;
            this.setState({ parentId: parentId });
        } catch (err) {};
    }

    canBeChild(x, y) {
        return (this.state.availableParent[x.type] && this.state.availableParent[x.type].indexOf(y.type) != -1);
    }

    listNodes(root, depth, res) {
        var self = this;
        if (root && root.type != "sensor" && root.id != this.props.node.id) {
            res.push({
                node: root,
                padding: "\u00a0\u00a0".repeat(depth)
            });
            root.children.forEach((child) => {
                self.listNodes(child, depth + 1, res);
            })
        }
    }

    generateOptionList() {
        var nodes = [];
        this.listNodes(this.props.nodeMap[this.props.me.rootnodeid], 0, nodes)
        return nodes.map((x) => {
            if (this.canBeChild(this.props.node, x.node)) {
                return <option value={x.node.id} key={x.node.id}> {x.padding + x.node.info.name} </option>
            } else {
                return null;
            }
        })
    }

    changeHandler(e) {
        let key = e.target.id;
        let value = e.target.value;
        this.setState({ [key]: value });
    }

    open() {
        this.modal.open();
    }

    render() {
        var options = this.generateOptionList();
        var name = "this location";
        try {
            name = this.props.node.info.name;
        } catch (err) {};

        return (
                <Modal
                    ref={(elem) => {this.modal = elem}}
                    clickButton={(e) => this.props.submit(this.props.node, this.state.parentId, () => this.modal.close())}
                    header="Move Location"
                    buttonText="Move"
                    buttonClass="btn-success"
                    entry={ null }
                    >
                    <div>
                        <label>
                            Select a new parent for <b>{name}</b> :
                        </label>
                        <select id="parentId" value={this.state.parentId} onChange={this.changeHandler.bind(this)}>
                            { options }
                        </select>
                    </div>
                </Modal>
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         tree: state.overviewReducer.customerOverview,
//         nodeMap: state.overviewReducer.nodeMap,
//         me: state.myAccountReducer.user,
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         dispatch
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MoveLocationForm);