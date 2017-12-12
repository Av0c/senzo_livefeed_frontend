import React from 'react';
import { Link } from 'react-router';

export default class Location extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isShowingChilren: true,
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

    render() {
        return (
            <li>
                <div className="location-wrapper clearfix">
                    <div className="location-name pull-left" data-toggle="collapse" onClick={this.showChildren.bind(this)} >{this.props.node.info.name}</div>
                    <div className="location-options pull-right"> <a onClick={() =>this.props.openAddLocationForm(this.props.node)} className="button btn-green pull-left" data-toggle="modal">Add Location</a>
                        <div className="edit-btn pull-left">
                            <div className="button btn-green settings-edit" id="dLabel" onClick={this.showEditDropdown.bind(this)}>Edit</div>
                            {this.state.isShowingEdit && <div aria-labelledby="dLabel">
                                <div style={{ backgroundColor: 'transparent' }} className={"modal-overlay" + (this.state.isShowingEdit ? "" : " closed")} onClick={this.closeEditDropdown.bind(this)} ></div>
                                <div className={" dropdown-menu settings-location-dropdown " + (this.state.isShowingEdit ? "" : " closed")}>
                                <ul>
                                    <li onClick={() => {
                                        this.closeEditDropdown();
                                        this.props.openEditLocationForm(this.props.node);}}><a>Edit Location</a></li>
                                    <li onClick={() => {
                                        this.closeEditDropdown();
                                        this.props.openAddFloorplanForm(this.props.node);}}> <a>Add Floorplan</a></li>
                                    <Link to={'live/' + this.props.node.id}>Add Sensor</Link>
                                </ul>
                                </div>
                            </div>
                            }
                        </div><a onClick={()=>this.props.openDeleteLocationForm(this.props.node)} className="bin pull-left" data-toggle="modal"></a>
                    </div>
                </div>
                {this.state.isShowingChildren && this.props.children}
            </li>
        );
    }
}