import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';
import {showNotification} from 'actions/common';

import {
  customerSaved,
  CUSTOMER_FORM_DATA_CHANGED,
  FETCH_CUSTOMERS,
  FETCH_CUSTOMER,
  receiveCustomer,
  RECEIVE_CUSTOMER,
  RECEIVE_CUSTOMERS,
  receiveCustomers,
  SAVE_CUSTOMER,
  UPDATE_CUSTOMER
} from 'actions/customer'

function fetchCustomers() {
  return axios.get(`${config.api.root}/api/customer`)
    .then(receiveCustomers)
    .catch((error) => showNotification("Failed: " + error.statusText, false))
}

function fetchCustomer(id) {
  return axios.get(`${config.api.root}/api/customer/${id}`)
    .then(receiveCustomer)
    .catch((error) => showNotification("Failed: " + error.statusText, false))

}

function saveCustomer(customer) {
  let serializedCustomer = {
    name: customer.name,
    admin: {
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      username: customer.username,
      password: customer.password
    }
  };
  return axios.post(`${config.api.root}/api/customer`, serializedCustomer)
    .then(customerSaved)
    .then(() => showNotification("Customer created", true))
    .catch((error) => showNotification("Failed: " + error.statusText, false))
}

function updateCustomer(customer) {
  return axios.put(`${config.api.root}/api/customer`, customer)
    .then(customerSaved)
    .then(() => showNotification("Customer updated", true))
    .catch((error) => showNotification("Failed: " + error.statusText, false))
}

const initialState = {
  customers: [],
  customer: {
    name: '',
    workingHoursFrom: 0,
    workingHoursTo: 0,
    timezone: '',
    //Customer admin details
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: ''
  }
};

export default (state = initialState, action) => {
  switch (action.type) {

    case FETCH_CUSTOMERS: {
      return loop (
        Object.assign({}, initialState),
        Effects.promise(fetchCustomers)
      )
    }
    case FETCH_CUSTOMER: {
      return loop (
        Object.assign({}, initialState),
        Effects.promise(fetchCustomer, action.id)
      )
    }
    case RECEIVE_CUSTOMER: {
      return Object.assign({}, initialState, {customer: action.data})
    }

    case RECEIVE_CUSTOMERS: {
      return Object.assign({}, state, {customers: action.data})
    }

    case SAVE_CUSTOMER: {
      return loop (
        Object.assign({}, state),
        Effects.promise(saveCustomer, action.customer)
      )
    }

    case UPDATE_CUSTOMER: {
      return loop (
        Object.assign({}, state),
        Effects.promise(updateCustomer, action.customer)
      )
    }

    case CUSTOMER_FORM_DATA_CHANGED: {
      return Object.assign({}, state, {
        customer: Object.assign({}, state.customer, action.data )
      })
    }

    default:
      return state;
  }
}