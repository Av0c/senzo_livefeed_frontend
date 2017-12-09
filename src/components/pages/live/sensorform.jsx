import React from 'react'


export default class SensorForm extends React.Component {

  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {
    //this.setState(this.props.sensor)
  }
  componentWillReceiveProps(nextProps) {
    //this.setState(nextProps.sensor)
  }

  render() {
    return (
      <div>
        <div>
          <div className={"modal-overlay"}></div>
          <div className={"add-account-wrapper invite-modal"}>
            <div className="modal-header">
              <button className="close">×</button>
              <h4 className="modal-title">Sensor Form</h4>
            </div>
            <div className="modal-body settings-add-location-wrapper">
              <div className="user_email">
                <label>
                  <span>MAC address </span>
                  <input type="username" id="mac" placeholder="xx:xx:xx:xx:xx:xx" value={this.state.mac || ''} onChange={this.changeHandler.bind(this)} required/>
                </label>
                <label>
                  <span>Name</span>
                  <input type="username" id="name" value={this.state.name || ''} onChange={this.changeHandler.bind(this)} required />
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-default" type="button" data-dismiss="modal">Cancel</button>
              <button className="btn btn-success" type="button">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  changeHandler(e) {
    let key = e.target.id;
    let value = e.target.value;
    this.setState({ [key]: value });
  }
}