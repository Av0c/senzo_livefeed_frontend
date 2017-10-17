import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { customerFormDataChanged, saveCustomer } from 'actions/customer';

class CreateCustomer extends React.Component {

  render() {
    return (
      <div className="settings-container">
        <div className='settings-title'>Customers</div>
        <div className="settings-subtitle">
          Customer Admin Account
        </div>
        <br></br>
        <br></br>
        <div className="new-customer">
          <div className="settings-row">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" onChange={this.handleChange.bind(this)} />
          </div>
          <br></br>

          <br></br>
          <div className="settings-row">
            <label htmlFor="firstName">First name</label>
            <input id="firstName" type="text" onChange={this.handleChange.bind(this)} />

            <label htmlFor="lastName">Last name</label>
            <input id="lastName" type="text" onChange={this.handleChange.bind(this)} />

            <label htmlFor="email">email</label>
            <input id="email" type="text" onChange={this.handleChange.bind(this)} />
          </div>
          <br></br>
          <div className="settings-row">
            <label htmlFor="username">username</label>
            <input id="username" type="text" onChange={this.handleChange.bind(this)} />
          </div>
          <br></br>
          <div className="settings-row">
            <label htmlFor="password">password</label>
            <input id="password" type="password" onChange={this.handleChange.bind(this)} />
          </div>
          <br></br>
          <div className="page-actions">
            <div className="white-text-button">
              <span onClick={this.save.bind(this)}>save</span>
            </div>
            <div className="white-text-button">
              <Link className="link" to="/settings/customers/">cancel</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  save() {
    this.props.save(this.props.state.customer)
  }

  handleChange(e){
    this.props.formDataChanged({
      [e.target.id]: e.target.value
    })
  }

}

function mapStateToProps(state){
  return {
    state: state.settingsPageReducer.customer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    save: (customer) => dispatch(saveCustomer(customer)),
    formDataChanged: (data) => dispatch(customerFormDataChanged(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateCustomer);
