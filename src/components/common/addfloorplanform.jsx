import React from 'react';

export default class AddFloorPlanFrom extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state={
            type: 'Mixed Area'
        };
    }

    changeHandler(e) {
        let key = e.target.id;
        let value = e.target.value;
        this.setState({ [key]: value });
    }

    render() {
        return (
            <div>
                <div className={"modal-overlay" + (this.props.isAddingFloorplan ? "" : " closed")} onClick={this.props.closeAddFloorplanForm}></div>
                <div className={"add-account-wrapper invite-modal" + (this.props.isAddingFloorplan ? "" : " closed")}>
                    <div className="modal-header">
                        <button className="close" onClick={this.props.closeAddFloorplanForm}>×</button>
                        <h4 className="modal-title">Add Floorplan</h4>
                    </div>
                    <div className="modal-body settings-add-location-wrapper">
                        <div className="area-type">
                            <label>Area Type</label>
                            <select>
                                <option>Mixed Area</option>
                                <option>Meeting Room</option>
                                <option>Working Area</option>
                            </select>
                        </div>
                        <div className="upload-floorplan">
                            <label>Plan</label>
                            <input type="file" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button onClick={this.props.closeAddFloorplanForm} className="btn btn-default" type="button" data-dismiss="modal" onClick={this.props.closeAddFloorplanForm}>Cancel</button>
                        <button className="btn btn-success" type="button">Confirm</button>
                    </div>
                </div>
            </div>

        );
    }
}