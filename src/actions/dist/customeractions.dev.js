"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCustomers = fetchCustomers;
exports.addCustomer = addCustomer;
exports.updateCustomer = updateCustomer;
exports.deleteCustomer = deleteCustomer;
exports.store = exports.deleteCustomerFailure = exports.deleteCustomerSuccess = exports.deleteCustomerBegin = exports.updateCustomerFailure = exports.updateCustomerSuccess = exports.updateCustomerBegin = exports.addCustomerFailure = exports.addCustomerSuccess = exports.addCustomerBegin = exports.fetchCustomersFailure = exports.fetchCustomersSuccess = exports.fetchCustomersBegin = exports.DELETE_CUSTOMER_FAILURE = exports.DELETE_CUSTOMER_SUCCESS = exports.DELETE_CUSTOMER_BEGIN = exports.UPDATE_CUSTOMER_FAILURE = exports.UPDATE_CUSTOMER_SUCCESS = exports.UPDATE_CUSTOMER_BEGIN = exports.ADD_CUSTOMER_FAILURE = exports.ADD_CUSTOMER_SUCCESS = exports.ADD_CUSTOMER_BEGIN = exports.FETCH_CUSTOMERS_FAILURE = exports.FETCH_CUSTOMERS_SUCCESS = exports.FETCH_CUSTOMERS_BEGIN = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _customerReducer = _interopRequireDefault(require("../reducers/customerReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import rootReducer from '../../../../../../rootReducer'
// these constants can be used as the names of the actions 
// so you minimise using the wrong string
var FETCH_CUSTOMERS_BEGIN = 'FETCH_CUSTOMERS_BEGIN';
exports.FETCH_CUSTOMERS_BEGIN = FETCH_CUSTOMERS_BEGIN;
var FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS';
exports.FETCH_CUSTOMERS_SUCCESS = FETCH_CUSTOMERS_SUCCESS;
var FETCH_CUSTOMERS_FAILURE = 'FETCH_CUSTOMERS_FAILURE';
exports.FETCH_CUSTOMERS_FAILURE = FETCH_CUSTOMERS_FAILURE;
var ADD_CUSTOMER_BEGIN = 'ADD_CUSTOMER_BEGIN';
exports.ADD_CUSTOMER_BEGIN = ADD_CUSTOMER_BEGIN;
var ADD_CUSTOMER_SUCCESS = 'ADD_CUSTOMER_SUCCESS';
exports.ADD_CUSTOMER_SUCCESS = ADD_CUSTOMER_SUCCESS;
var ADD_CUSTOMER_FAILURE = 'ADD_CUSTOMER_FAILURE';
exports.ADD_CUSTOMER_FAILURE = ADD_CUSTOMER_FAILURE;
var UPDATE_CUSTOMER_BEGIN = 'UPDATE_CUSTOMER_BEGIN';
exports.UPDATE_CUSTOMER_BEGIN = UPDATE_CUSTOMER_BEGIN;
var UPDATE_CUSTOMER_SUCCESS = 'UPDATE_CUSTOMER_SUCCESS';
exports.UPDATE_CUSTOMER_SUCCESS = UPDATE_CUSTOMER_SUCCESS;
var UPDATE_CUSTOMER_FAILURE = 'UPDATE_CUSTOMER_FAILURE';
exports.UPDATE_CUSTOMER_FAILURE = UPDATE_CUSTOMER_FAILURE;
var DELETE_CUSTOMER_BEGIN = 'DELETE_CUSTOMER_BEGIN';
exports.DELETE_CUSTOMER_BEGIN = DELETE_CUSTOMER_BEGIN;
var DELETE_CUSTOMER_SUCCESS = 'DELETE_CUSTOMER_SUCCESS';
exports.DELETE_CUSTOMER_SUCCESS = DELETE_CUSTOMER_SUCCESS;
var DELETE_CUSTOMER_FAILURE = 'DELETE_CUSTOMER_FAILURE';
exports.DELETE_CUSTOMER_FAILURE = DELETE_CUSTOMER_FAILURE;

var fetchCustomersBegin = function fetchCustomersBegin() {
  return {
    type: FETCH_CUSTOMERS_BEGIN
  };
};

exports.fetchCustomersBegin = fetchCustomersBegin;

var fetchCustomersSuccess = function fetchCustomersSuccess(customers) {
  return {
    type: FETCH_CUSTOMERS_SUCCESS,
    payload: {
      customers: customers
    }
  };
};

exports.fetchCustomersSuccess = fetchCustomersSuccess;

var fetchCustomersFailure = function fetchCustomersFailure(error) {
  return {
    type: FETCH_CUSTOMERS_FAILURE,
    payload: {
      error: error
    }
  };
}; // Add Customer


exports.fetchCustomersFailure = fetchCustomersFailure;

var addCustomerBegin = function addCustomerBegin() {
  return {
    type: ADD_CUSTOMER_BEGIN
  };
};

exports.addCustomerBegin = addCustomerBegin;

var addCustomerSuccess = function addCustomerSuccess(customer) {
  return {
    type: ADD_CUSTOMER_SUCCESS,
    payload: {
      message: "success"
    }
  };
};

exports.addCustomerSuccess = addCustomerSuccess;

var addCustomerFailure = function addCustomerFailure(error) {
  return {
    type: ADD_CUSTOMER_FAILURE,
    payload: {
      error: error
    }
  };
}; // Update Customer


exports.addCustomerFailure = addCustomerFailure;

var updateCustomerBegin = function updateCustomerBegin() {
  return {
    type: UPDATE_CUSTOMER_BEGIN
  };
};

exports.updateCustomerBegin = updateCustomerBegin;

var updateCustomerSuccess = function updateCustomerSuccess(customer) {
  return {
    type: UPDATE_CUSTOMER_SUCCESS,
    payload: {
      message: "success"
    }
  };
};

exports.updateCustomerSuccess = updateCustomerSuccess;

var updateCustomerFailure = function updateCustomerFailure(error) {
  return {
    type: UPDATE_CUSTOMER_FAILURE,
    payload: {
      error: error
    }
  };
}; // Delete Customer


exports.updateCustomerFailure = updateCustomerFailure;

var deleteCustomerBegin = function deleteCustomerBegin() {
  return {
    type: DELETE_CUSTOMER_BEGIN
  };
};

exports.deleteCustomerBegin = deleteCustomerBegin;

var deleteCustomerSuccess = function deleteCustomerSuccess(customer) {
  return {
    type: DELETE_CUSTOMER_SUCCESS,
    payload: {
      message: "success"
    }
  };
};

exports.deleteCustomerSuccess = deleteCustomerSuccess;

var deleteCustomerFailure = function deleteCustomerFailure(error) {
  return {
    type: DELETE_CUSTOMER_FAILURE,
    payload: {
      error: error
    }
  };
};

exports.deleteCustomerFailure = deleteCustomerFailure;

function fetchCustomers() {
  return function (dispatch) {
    dispatch(fetchCustomersBegin());

    _axios["default"].get("http://localhost:8080/customers/getCustomers") //, {
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
    .then(function (response) {
      console.log("Fectch customer action: ");
      console.log(response.data);
      dispatch(fetchCustomersSuccess(response.data));
    })["catch"](function (error) {
      return dispatch(fetchCustomersFailure(error));
    });
  };
}

function addCustomer(customer) {
  // console.log(customer);
  return function (dispatch) {
    dispatch(addCustomerBegin());

    _axios["default"].post("http://localhost:8080/customers/addCustomer", customer).then(function (response) {
      console.log("create customer " + response.data);
      dispatch(addCustomerSuccess(response.data));
    })["catch"](function (error) {
      return dispatch(addCustomerFailure(error));
    });
  };
}

function updateCustomer(customer) {
  // console.log(customer);
  return function (dispatch) {
    dispatch(updateCustomerBegin());

    _axios["default"].post("http://localhost:8080/customers/updateCustomer", customer).then(function (response) {
      console.log("update customer" + response.data);
      dispatch(updateCustomerSuccess(response.data));
    })["catch"](function (error) {
      return dispatch(updateCustomerFailure(error));
    });
  };
}

function deleteCustomer(customer) {
  // console.log(customer);
  return function (dispatch) {
    dispatch(deleteCustomerBegin());

    _axios["default"]["delete"]("http://localhost:8080/customers/deleteCustomer", customer).then(function (response) {
      console.log(response.data);
      dispatch(deleteCustomerSuccess(response.data));
    })["catch"](function (error) {
      return dispatch(deleteCustomerFailure(error));
    });
  };
} //TODO THIS IS NOT WORKING WITH ROOT REDUCER


var store = (0, _redux.createStore)(_customerReducer["default"], (0, _redux.applyMiddleware)(_reduxThunk["default"]));
exports.store = store;