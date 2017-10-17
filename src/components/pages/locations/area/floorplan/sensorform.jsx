import React from 'react'


export default class SensorForm extends React.Component {

  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {
    this.setState(this.props.sensor)
  }
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.sensor)
  }

  render() {
    let removeButton = this.props.sensor.id ?  <input type="button" value="remove" onClick={this.props.actions.remove.bind(this, this.state)} /> : null;
    let saveButton = this.props.sensor.id ? <input type="button" value="Update" onClick={this.props.actions.update.bind(this, this.state)} /> :  <input type="button" value="Save" onClick={this.props.actions.save.bind(this, this.state)} />
    return (
      <div className='add-sensor-container' >
        <br></br>
        <label htmlFor="mac">MAC address</label>
        <input type="text" id="dev_id" value={this.state.dev_id || ''}
               onChange={this.changeHandler.bind(this)}
               placeholder="xx:xx:xx:xx:xx:xx" required />
        <label htmlFor="name">name</label>
        <input type="text" id="name" value={this.state.name || ''}
               onChange={this.changeHandler.bind(this)}/>
        <input type="button" value="Cancel" onClick={ this.props.actions.select.bind(this, undefined)} />
        {removeButton}
        {saveButton}
      </div>
    )
  }

  changeHandler(e){
    let key = e.target.id;
    let value = e.target.value;
    this.setState ({[key] : value});
  }
}
