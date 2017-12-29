import React from 'react';

export default class DeleteLocationForm extends React.Component {
    render() {
        return (
            <div>
                <div style={{ backgroundColor: 'transparent' }} className={"modal-overlay" + (this.props.isDeletingLocation ? "" : " closed")} onClick={this.props.closeDeleteLocationForm}></div>
                <div style={{ zIndex: 1999 }} className={"add-account-wrapper invite-modal" + (this.props.isDeletingLocation ? "" : " closed")}>
                    <div className="modal-header">
                        <button className="close" onClick={this.props.closeDeleteLocationForm} type="button" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 className="modal-title">Delete Location</h4>
                    </div>
                    <div className="modal-body delete-user-wrapper">
                        <p>Are you sure you want to delete {this.props.node.info.name} ?</p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-default" onClick={this.props.closeDeleteLocationForm} type="button" data-dismiss="modal">Cancel</button>
                        <button className="btn btn-danger" onClick={() => {
                            this.props.submit(this.props.node);
                        }} type="button">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}