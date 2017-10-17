import React from 'react';
import { connect } from 'react-redux';
import {fetchCustomers} from 'actions/customer'
import Customer from './customer';
import { Link } from 'react-router';

class Customers extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCustomers())
  }

  render() {
    return (
      <div className='settings-container'>
        <form autoComplete="nope">
          <div className='settings-title'>Customers</div>
          <div className='settings-form'>
            <div className='settings-line'></div>
            <div className="customers">
              {this.props.state.customers.map( (customer,idx) => {
                return <Customer key={idx} customer={customer} />
              })}
            </div>
            <div className="settings-line"></div>
            <div className="page-actions">
              <div className="white-text-button">
                <Link className="link" to="/settings/customers/create">New customer</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    state: state.settingsPageReducer.customer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Customers);