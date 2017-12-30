import React from 'react';

export default class AddFloorPlanFrom extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state={
            type: 'location',
            file: ''
        };
    }

    changeHandler(e) {
        let key = e.target.id;
        let value = e.target.value;
        this.setState({ [key]: value });
    }

    render() {
        let node = this.props.node;
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
                            <select id="type" onChange={this.changeHandler.bind(this)}>
                                <option value="location"> Mixed Area </option>
                                <option value='meeting_room' >Meeting Room</option>
                                <option value='open_area' >Open Area</option>
                            </select>
                        </div>
                        <div className="upload-floorplan">
                            <label>Plan</label>
                            <input type="file" id="img" ref="floorplanimage"/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button onClick={this.props.closeAddFloorplanForm} className="btn btn-default" type="button" data-dismiss="modal">Cancel</button>
                        <button className="btn btn-success" onClick={() =>{
                        this.props.submit(node, document.getElementById("img").files[0], this.state.type);
                        this.props.closeAddFloorplanForm();}} type="button">Confirm</button>
                    </div>
                </div>
            </div>

        );
    }
}