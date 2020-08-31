"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = customersReducer;

var _customeractions = require("../actions/customeractions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// an initial state variable used at the start
var initialState = {
  customers: [],
  loading: false,
  error: null
}; // the reducer is here. It is going to return different states depending upon the action

function customersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _customeractions.FETCH_CUSTOMERS_BEGIN:
      return _objectSpread({}, state, {
        loading: true,
        error: null
      });

    case _customeractions.FETCH_CUSTOMERS_SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        customers: action.payload.customers
      });

    case _customeractions.FETCH_CUSTOMERS_FAILURE:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload.error,
        customers: []
      });

    case _customeractions.ADD_CUSTOMER_BEGIN:
      return _objectSpread({}, state, {
        loading: true,
        error: null
      });

    case _customeractions.ADD_CUSTOMER_SUCCESS:
      return _objectSpread({}, state, {
        loading: false
      });

    case _customeractions.ADD_CUSTOMER_FAILURE:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload.error
      });

    case _customeractions.UPDATE_CUSTOMER_BEGIN:
      return _objectSpread({}, state, {
        loading: true,
        error: null
      });

    case _customeractions.UPDATE_CUSTOMER_SUCCESS:
      return _objectSpread({}, state, {
        loading: false
      });

    case _customeractions.UPDATE_CUSTOMER_FAILURE:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload.error
      });

    case _customeractions.DELETE_CUSTOMER_BEGIN:
      return _objectSpread({}, state, {
        loading: true,
        error: null
      });

    case _customeractions.DELETE_CUSTOMER_SUCCESS:
      return _objectSpread({}, state, {
        loading: false
      });

    case _customeractions.DELETE_CUSTOMER_FAILURE:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload.error
      });

    default:
      return state;
  }
}