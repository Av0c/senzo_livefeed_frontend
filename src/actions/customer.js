import history from 'components/common/appHistory';

export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS';
export const RECEIVE_CUSTOMERS = 'RECEIVE_CUSTOMERS';

export const FETCH_CUSTOMER = 'FETCH_CUSTOMER';
export const RECEIVE_CUSTOMER = 'RECEIVE_CUSTOMER';

export const SAVE_CUSTOMER = 'SAVE_CUSTOMER';

export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER';

export const CUSTOMER_FORM_DATA_CHANGED = 'CUSTOMER_FORM_DATA_CHANGED';
export const CUSTOMER_SAVED = 'CUSTOMER_SAVED';

export function fetchCustomers() {
  return {
    type: FETCH_CUSTOMERS
  }
}

export function receiveCustomers(result) {
  return {
    type: RECEIVE_CUSTOMERS,
    data: result.data
  }
}

export function fetchCustomer(id) {
  return {
    type: FETCH_CUSTOMER,
    id
  }
}

export function receiveCustomer(result) {
  return {
    type: RECEIVE_CUSTOMER,
    data: result.data
  }
}
export function saveCustomer(customer) {
  return {
    type: SAVE_CUSTOMER,
    customer
  }
}

export function updateCustomer(customer) {
  return {
    type: UPDATE_CUSTOMER,
    customer
  }
}

export function customerFormDataChanged(data) {
  return {
    type: CUSTOMER_FORM_DATA_CHANGED,
    data
  }
}

export function customerSaved() {
  history.push('/settings/customers/');
  return {
    type: CUSTOMER_SAVED
  }
}