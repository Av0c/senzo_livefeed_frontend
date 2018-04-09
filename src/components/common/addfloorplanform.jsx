import React from 'react';
import toastr from 'toastr';

export default class AddFloorPlanFrom extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state={
            type: this.props.node.type,
            hasfloorplan: this.props.node.info.hasfloorplan,
            useownfp: this.props.node.info.useownfp,
        };
    }

    changeHandler(e) {
        let key = e.target.id;
        let value = e.target.value;
        if (value=="true") {
            value = true;
        }
        if (value=="false") {
            value = false;
        }
        this.setState({ [key]: value });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.node.type && this.state.type != nextProps.node.type) {
            this.setState({type: nextProps.node.type})
        }
        if (nextProps.node.info.hasfloorplan && this.state.hasfloorplan != nextProps.node.info.hasfloorplan) {
            this.setState({hasfloorplan: nextProps.node.info.hasfloorplan})
        }
        if (nextProps.node.info.useownfp && this.state.useownfp != nextProps.node.info.useownfp) {
            this.setState({useownfp: nextProps.node.info.useownfp})
        }
    }

    submitForm() {
        var img = document.getElementById("img");
        if (img) img = img.files;
        if (img) img = img[0];
        var res = this.props.submit(this.props.node, img, this.state);
        if (res[0]) {
            // this.props.closeAddFloorplanForm();
        } else {
            toastr.error(res[1])
        }
    }

    render() {
        let node = this.props.node;
        return (
            <div>
                <div className={"modal-overlay" + (this.props.isAddingFloorplan ? "" : " closed")} onClick={this.props.closeAddFloorplanForm}></div>
                <div className={"add-account-wrapper invite-modal" + (this.props.isAddingFloorplan ? "" : " closed")}>
                    <div className="modal-header">
                        <button className="close" onClick={this.props.closeAddFloorplanForm}>×</button>
                        <h4 className="modal-title">Add Floor Plan</h4>
                    </div>
                    <div className="modal-body settings-add-location-wrapper">
                        <div>
                            <label>Change area type</label>
                            <select id="type" value={this.state.type} onChange={this.changeHandler.bind(this)}>
                                <option value="location"> Mixed Area </option>
                                <option value='meeting_room' >Meeting Room</option>
                                <option value='open_area' >Open Area</option>
                            </select>
                        </div>
                        <div>
                            <label>Has floorplan ?</label>
                            <select id="hasfloorplan" value={this.state.hasfloorplan} onChange={this.changeHandler.bind(this)}>
                                <option value={true}> Yes </option>
                                <option value={false}> No </option>
                            </select>
                        </div>
                        {
                            this.state.hasfloorplan && <div>
                                <label>Use parent's floorplan ?</label>
                                <select id="useownfp" value={this.state.useownfp} onChange={this.changeHandler.bind(this)}>
                                    <option value={false}> Yes </option>
                                    <option value={true}> No </option>
                                </select>
                            </div>
                        }
                        {
                            this.state.hasfloorplan && this.state.useownfp && <div className="upload-floorplan">
                                <label>
                                    {node.info.hasfloorplan ? 
                                        <span><b>Already has floorplan.</b> Upload and replace :</span>
                                    : "Upload new floorplan :"}
                                </label>
                                <input type="file" id="img" ref="floorplanimage"/>
                            </div>
                        }
                    </div>
                    <div className="modal-footer">
                        <button onClick={this.props.closeAddFloorplanForm} className="btn btn-default" type="button" data-dismiss="modal">Cancel</button>
                        <button className="btn btn-success" onClick={this.submitForm.bind(this)} type="button">Confirm</button>
                    </div>
                </div>
            </div>

        );
    }
}