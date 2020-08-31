import axios from "axios";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import rootReducer from '../../../../../../rootReducer'
import customersReducer from '../reducers/customerReducer'

// these constants can be used as the names of the actions 
// so you minimise using the wrong string
export const FETCH_CUSTOMERS_BEGIN   = 'FETCH_CUSTOMERS_BEGIN';
export const FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS';
export const FETCH_CUSTOMERS_FAILURE = 'FETCH_CUSTOMERS_FAILURE';

export const ADD_CUSTOMER_BEGIN   = 'ADD_CUSTOMER_BEGIN';
export const ADD_CUSTOMER_SUCCESS = 'ADD_CUSTOMER_SUCCESS';
export const ADD_CUSTOMER_FAILURE = 'ADD_CUSTOMER_FAILURE';

export const UPDATE_CUSTOMER_BEGIN   = 'UPDATE_CUSTOMER_BEGIN';
export const UPDATE_CUSTOMER_SUCCESS = 'UPDATE_CUSTOMER_SUCCESS';
export const UPDATE_CUSTOMER_FAILURE = 'UPDATE_CUSTOMER_FAILURE';

export const DELETE_CUSTOMER_BEGIN   = 'DELETE_CUSTOMER_BEGIN';
export const DELETE_CUSTOMER_SUCCESS = 'DELETE_CUSTOMER_SUCCESS';
export const DELETE_CUSTOMER_FAILURE = 'DELETE_CUSTOMER_FAILURE';

export const fetchCustomersBegin = () => ({
  type: FETCH_CUSTOMERS_BEGIN
});

export const fetchCustomersSuccess = customers => ({
  type: FETCH_CUSTOMERS_SUCCESS,
  payload: { customers }
});

export const fetchCustomersFailure = error => ({
  type: FETCH_CUSTOMERS_FAILURE,
  payload: { error }
});

// Add Customer
export const addCustomerBegin = () => ({
  type: ADD_CUSTOMER_BEGIN
});

export const addCustomerSuccess = customer => ({
  type: ADD_CUSTOMER_SUCCESS,
  payload: { message: "success" }
});

export const addCustomerFailure = error => ({
  type: ADD_CUSTOMER_FAILURE,
  payload: { error }
});

// Update Customer
export const updateCustomerBegin = () => ({
  type: UPDATE_CUSTOMER_BEGIN
});

export const updateCustomerSuccess = customer => ({
  type: UPDATE_CUSTOMER_SUCCESS,
  payload: { message: "success" }
});

export const updateCustomerFailure = error => ({
  type: UPDATE_CUSTOMER_FAILURE,
  payload: { error }
});

// Delete Customer
export const deleteCustomerBegin = () => ({
  type: DELETE_CUSTOMER_BEGIN
});

export const deleteCustomerSuccess = customer => ({
  type: DELETE_CUSTOMER_SUCCESS,
  payload: { message: "success" }
});

export const deleteCustomerFailure = error => ({
  type: DELETE_CUSTOMER_FAILURE,
  payload: { error }
});


export function fetchCustomers() {
  return dispatch => {
    dispatch(fetchCustomersBegin());
    axios
    .get("http://localhost:8080/customers/getCustomers") //, {
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      //   'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      // }
      // ,
      // proxy: {
      //   host: '104.236.174.88',
      //   port: 8080
      // }
      // })
    .then(response => {
      console.log("Fectch customer action: ");
      console.log( response.data);
      dispatch(fetchCustomersSuccess(response.data));
    })
    .catch(error => dispatch(fetchCustomersFailure(error)));
    
  }
}

export function searchCustomers(customer) {
  return dispatch => {
    dispatch(fetchCustomersBegin());
    axios
    .post("http://localhost:8080/customers/searchCustomers", customer) //, {
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      //   'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      // }
      // ,
      // proxy: {
      //   host: '104.236.174.88',
      //   port: 8080
      // }
      // })
    .then(response => {
      console.log("Fectch customer action: ");
      console.log( response.data);
      dispatch(fetchCustomersSuccess(response.data));
    })
    .catch(error => dispatch(fetchCustomersFailure(error)));
    
  }
}

export function addCustomer(customer) {
  // console.log(customer);
  return dispatch => {
    dispatch(addCustomerBegin());
    axios
    .post("http://localhost:8080/customers/addCustomer", customer)
    .then(response => {
      console.log("create customer " +response.data);
      dispatch(addCustomerSuccess(response.data));
    })
    .catch(error => dispatch(addCustomerFailure(error)));
  }
}


export function updateCustomer(customer) {
  // console.log(customer);
  return dispatch => {
    dispatch(updateCustomerBegin());
    axios
    .post("http://localhost:8080/customers/updateCustomer", customer)
    .then(response => {
      console.log("update customer"+response.data);
      dispatch(updateCustomerSuccess(response.data));
    })
    .catch(error => dispatch(updateCustomerFailure(error)));
  }
}

export function deleteCustomer(customer) {
  // console.log(customer);
  return dispatch => {
    dispatch(deleteCustomerBegin());
    axios
    .post("http://localhost:8080/customers/deleteCustomer", customer)
    .then(response => {
      console.log(response.data);
      dispatch(deleteCustomerSuccess(response.data));
    })
    .catch(error => dispatch(deleteCustomerFailure(error)));
  }
}
const initialState ={
  customers: [],
  customer: {}
}

//TODO THIS IS NOT WORKING WITH ROOT REDUCER
export const store = createStore(customersReducer, initialState, applyMiddleware(thunk));


