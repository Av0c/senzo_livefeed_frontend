import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Location extends React.Component {

    constructor(props, context) {
        super(props, context);
        var node = this.props.nodeMap[this.props.location.query["n"]];
        var qnode = node;
        var open = false;
        if (node) {
            while (node.parent) {
                if (node.parent.id==this.props.node.id) {
                    open = true;
                    break;
                }
                node = node.parent;
            }
        }

        this.state = {
            isShowingChildren: open,
            isShowingEdit: false,
            qnode: qnode,
        }
    }

    componentDidMount() {
        if (this.state.qnode) {
            if (this.state.qnode.id == this.props.node.id) {
                this.name.scrollIntoView();
            }
        }
    }

    showChildren() {
        this.setState({ isShowingChildren: !this.state.isShowingChildren });
    }

    showEditDropdown() {
        this.setState({ isShowingEdit: !this.state.isShowingEdit });
    }

    closeEditDropdown() {
        this.setState({ isShowingEdit: false });
    }

    renderIcon() {
        var type;
        switch (this.props.node.type) {
            case "meeting_room" :
                type = "group";
                return <i className="material-icons" style={{ marginRight: "5px" }}>{type}</i>

            case "open_area":
                type = "nature_people";
                return <i className="material-icons" style={{ marginRight: "5px" }}>{type}</i>

            case "location":
            case "multicountry":
            case "customer":
                type = (this.state.isShowingChildren) ? "remove_circle_outline" : "add_circle_outline"
                return <i className="material-icons" style={{ marginRight: "5px" }}>{type}</i>

            default:
                return null;
        }
    }
    render() {
        let icon = this.renderIcon();
        let canBeParent = (this.props.node.type!="open_area" && this.props.node.type!="meeting_room" && this.props.node.type!="sensor");
        return (
            <li className="location-item-li">
                <div className="location-wrapper clearfix">
                    <div ref={e => this.name = e} className={"location-name pull-left"+((this.state.qnode && this.props.node.id==this.state.qnode.id) ? " highlight" : "")} onClick={this.showChildren.bind(this)} >
                        {icon}
                        {this.props.node.info.name}
                        {this.props.node.info.useownfp && <div data-tooltip="Use its own floor plan. If this symbol is not showed, parent's floor plan is used instead."><i className="material-icons" style={{ marginLeft: "5px" }}>picture_in_picture</i></div>}
                    </div>
                    <div className="location-options pull-right">
                        {
                            canBeParent && <i data-tooltip="Add location" onClick={() => this.props.openAddLocationForm(this.props.node)} className="location-button material-icons cursor-pointer pull-left" data-toggle="modal">
                                add_location
                            </i>
                        }
                        <div className="edit-btn pull-left">
                            <i data-tooltip="Edit" className="location-button material-icons cursor-pointer" id="dLabel" onClick={this.showEditDropdown.bind(this)}>edit</i>
                            {this.state.isShowingEdit && <div aria-labelledby="dLabel">
                                <div style={{ backgroundColor: 'transparent' }} className={"modal-overlay" + (this.state.isShowingEdit ? "" : " closed")} onClick={this.closeEditDropdown.bind(this)} ></div>
                                <div className={" dropdown-menu settings-location-dropdown " + (this.state.isShowingEdit ? "" : " closed")}>
                                    <ul>
                                        <li onClick={() => {
                                            this.closeEditDropdown();
                                            this.props.openEditLocationForm(this.props.node);
                                        }}><a>Edit Location</a></li>

                                        <li onClick={() => {
                                            this.closeEditDropdown();
                                            this.props.openAddFloorplanForm(this.props.node);
                                        }}> <a>Edit Floor Plan</a></li>

                                        <li><Link to={'live/' + this.props.node.id}>Go to Live View</Link></li>
                                    </ul>
                                </div>
                            </div>
                            }
                        </div>
                        <i data-tooltip="Delete" className="location-button material-icons cursor-pointer red-500 pull-left" style={{marginLeft: "10px"}} onClick={() => this.props.openDeleteLocationForm(this.props.node)}>delete_forever</i>
                    </div>
                </div>
                <div className={!this.state.isShowingChildren ? "hidden" : ""}>
                    {this.props.children}
                </div>
            </li>
        );
    }
}

function mapStateToProps(state) {
    return {
        nodeMap: state.overviewReducer.nodeMap,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Location);
