import React from 'react';

export default class ConfirmDeleteLocationForm extends React.Component {
    render() {
        return (
            <div>
                <div className={"modal-overlay" + (this.props.isConfirmingDeleteLocation ? "" : " closed")} onClick={this.props.closeConfirmDeleteLocationForm}></div>
                <div className={"add-account-wrapper invite-modal" + (this.props.isConfirmingDeleteLocation ? "" : " closed")}>
                    <div className="modal-header">
                        <button className="close" onClick={this.props.closeConfirmDeleteLocationForm} type="button" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 className="modal-title">Confirm Delete Location</h4>
                    </div>
                    <div className="modal-body delete-user-wrapper">
                        <p>Choosen location and all related data will be deleted !</p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-default" onClick={this.props.closeConfirmDeleteLocationForm} type="button" data-dismiss="modal">Cancel</button>
                        <button className="btn btn-danger" onClick={() => {
                            this.props.submit(this.props.node);
                            this.props.closeConfirmDeleteLocationForm();
                        }} type="button">OK</button>
                    </div>
                </div>
            </div>
        );
    }
}