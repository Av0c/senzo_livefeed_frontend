import React from 'react';

export default class EditLocationForm extends React.Component {

    render() {
        return (
            <div>
                <div className={"modal-overlay" + (this.props.isEditingLocation? "" : " closed")} onClick={this.props.closeEditLocationForm}></div>
                <div className={"add-account-wrapper invite-modal" + (this.props.isEditingLocation ? "" : " closed")}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <button className="close" onClick={this.props.closeEditLocationForm}>×</button>
                            <h4 className="modal-title">Edit Location</h4>
                        </div>
                        <div className="modal-body settings-wrapper">
                            <div className="country">
                                <label>Country</label>
                                <select>
                                    <option>Finland</option>
                                    <option>Russia</option>
                                </select>
                            </div>
                            <div className="timezone">
                                <label>Timezone</label>
                                <select>
                                    <option>UTC+3:00</option>
                                    <option>UTC+4:00</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-default" type="button" onClick={this.props.closeEditLocationForm}>Cancel</button>
                            <button className="btn btn-success" type="button">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}