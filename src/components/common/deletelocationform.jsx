import React from 'react';

export default class DeleteLocationForm extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            type: 'only'
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
                <div style={{ backgroundColor: 'transparent' }} className={"modal-overlay" + (this.props.isDeletingLocation ? "" : " closed")} onClick={this.props.closeDeleteLocationForm}></div>
                <div style={{ zIndex: 1999 }} className={"add-account-wrapper invite-modal" + (this.props.isDeletingLocation ? "" : " closed")}>
                    <div className="modal-header">
                        <button className="close" onClick={this.props.closeDeleteLocationForm} type="button" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 className="modal-title">Delete Location</h4>
                    </div>
                    <div className="modal-body delete-user-wrapper">
                        <p>Are you sure you want to delete {this.props.node.info.name} ?</p>
                        <div className="zone-type">
                            <label htmlFor="country">
                                <input className="zone-radio" onChange={this.changeHandler.bind(this)} id="type" value="only" type="radio" name="zone" checked={this.state.type == 'only'} /><span>Only this location</span>
                            </label>
                            <label htmlFor="multi">
                                <input className="zone-radio" onChange={this.changeHandler.bind(this)} id="type" value="all" type="radio" name="zone" checked={this.state.type == 'all'} /><span>This location and all sub-locations  </span>
                            </label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-default" onClick={this.props.closeDeleteLocationForm} type="button" data-dismiss="modal">Cancel</button>
                        <button className="btn btn-danger" onClick={() => {
                            this.props.submit(this.props.node, this.state.type);
                        }} type="button">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}