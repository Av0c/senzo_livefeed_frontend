import React from 'react';
import { Link } from 'react-router';

export default class Location extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isShowingChildren: false,
            isShowingEdit: false,
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
        if (this.props.node.type != 'meeting_room' && this.props.node.type != 'open_area') {
            if (this.state.isShowingChildren) {
                return <img src="src/assets/images/minus-button.png" style={{ marginLeft: '10px', height: '80%' }} />
            }
            else {
                return <img src="src/assets/images/plus-button.png" style={{ marginLeft: '10px', height: '80%' }} />
            }
        }
        else {
            return '';
        }
    }
    render() {
        let icon = this.renderIcon();
        return (
            <li className="location-item-li">
                <div className="location-wrapper clearfix">
                    <div className="location-name pull-left" data-toggle="collapse" onClick={this.showChildren.bind(this)} >{this.props.node.info.name}
                        {icon}
                    </div>
                    <div style={{ marginRight: '100px' }} className="location-options pull-right"> <a onClick={() => this.props.openAddLocationForm(this.props.node)} className="button btn-green pull-left" data-toggle="modal">Add Location</a>
                        <div className="edit-btn pull-left">
                            <div className="button btn-green settings-edit" id="dLabel" onClick={this.showEditDropdown.bind(this)}>Edit</div>
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
                                        }}> <a>Add Floorplan</a></li>
                                        <Link to={'live/' + this.props.node.id}>Add Sensor</Link>
                                    </ul>
                                </div>
                            </div>
                            }
                        </div>
                        <img className="bin pull-left" onClick={() => this.props.openDeleteLocationForm(this.props.node)} src="/src/assets/images/bin.svg"/>
                    </div>
                </div>
                {this.state.isShowingChildren && this.props.children}
            </li>
        );
    }
}