import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { customerFormDataChanged, updateCustomer, fetchCustomer} from 'actions/customer';
import timezones from '../../../../timezones.json';

class EditCustomer extends React.Component {

  constructor() {
    super();
    this.state = {
      id: 0,
      name: '',
      workingHoursFrom: 0,
      workingHoursTo: 0,
      timezone: 'UTC'
    }
  }

  componentDidMount() {
    this.props.getCustomer(this.props.params.id)
  }

  componentWillReceiveProps(props) {
    this.setState({
      id: props.state.customer.id,
      name: props.state.customer.name,
      workingHoursFrom: props.state.customer.workingHoursFrom,
      workingHoursTo: props.state.customer.workingHoursTo,
      timezone: props.state.customer.timezone
    })

  }

  render() {

    return (
      <div className="settings-container">
        <div className="new-customer">
          <div className="settings-row">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" onChange={this.handleChange.bind(this)} value={this.state.name} />
          </div>
          <div className="settings-row">
            <label htmlFor="name">From</label>
            <input id="workingHoursFrom" type="number" onChange={this.handleChange.bind(this)} value={this.state.workingHoursFrom} min={0} max={23} step={1}/>
          </div>
          <div className="settings-row">
            <label htmlFor="name">To</label>
            <input id="workingHoursTo" type="number" onChange={this.handleChange.bind(this)} value={this.state.workingHoursTo} min={0} max={23} step={1}/>
          </div>
          <div className="settings-row">
            <label htmlFor="name">Timezone</label>
            <select id="timezone" onChange={this.handleChange.bind(this)} value={this.state.timezone} >
              {
               timezones.map( (timezonegroup,idx) => {
                 return (
                   <optgroup label={timezonegroup.group}>
                     {timezonegroup.zones.map( (zone, idx) => <option key={idx} value={zone.value}>{zone.name} </option> )}
                   </optgroup>
                 )

               })
              }
            </select>
          </div>
          <div className="page-actions">
            <div className="white-text-button">
              <span onClick={this.update.bind(this)}>save</span>
            </div>
            <div className="white-text-button">
              <Link className="link" to="/settings/customers/">cancel</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  update() {
    this.props.update(this.state)
  }

  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value
    });
  }

}

function mapStateToProps(state){
  return {
    state: state.settingsPageReducer.customer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    update: (customer) => dispatch(updateCustomer(customer)),
    formDataChanged: (data) => dispatch(customerFormDataChanged(data)),
    getCustomer: (id) => dispatch(fetchCustomer(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditCustomer);