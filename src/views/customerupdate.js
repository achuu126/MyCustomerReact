import React, {useState} from "react";
import Axios from "axios";
import "./css/App.css";
import { useHistory } from 'react-router-dom';
// import { connect } from 'react-redux';
// import {updateCustomer, store, UPDATE_CUSTOMER_BEGIN, fetchCustomers} from '../actions/customeractions';
// import { Link } from "react-router-dom";

function CustomerUpdate (props){
  
const [customer, setCustomer]=useState({
  id: props.location.customer.customer.id,
  firstName: props.location.customer.customer.firstName,
  lastName: props.location.customer.customer.lastName,
  email: props.location.customer.customer.email,
  phoneNumber: props.location.customer.customer.phoneNumber,
  address: props.location.customer.customer.address});
const history = useHistory();

// console.log(customer);
  
async function updateCustomer() {
  try{
    console.log(customer);
     await Axios.post("http://localhost:8080/customers/updateCustomer", customer)
     .then( history.push({pathname:'/customerlist'}));
     console.log("before redirect");
     //history.push({pathname:'/customerlist'});
     //history.goBack();
  }catch(error){
      console.log(error);
  }
}
const updateCustInfo = e=>{
  setCustomer({...customer, [e.target.name]: e.target.value})
}


return (
        
  <div className="container">
          <div className="head">
          <h3>Update Customer Information</h3>
          </div>
          <div style={{ marginTop: 10 }}>
          <form   autoComplete="off">
            <div className="form-row">
              <div className="form-group col-md-5">
                <label className="inputLabel" htmlFor="firstName">First Name: </label>
                <input onBlur= {(event) => updateCustInfo(event)}
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="form-control"
                  defaultValue={customer.firstName}
                  text={customer.firstName}
                 
                />
              </div>
              <div className="form-group col-md-5">
                <label className="inputLabel" htmlFor="lastName">Last Name: </label>
                <input onChange={(event) => updateCustInfo(event)}
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="form-control"
                  defaultValue={customer.lastName}
                  
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-5">
                <label className="inputLabel" htmlFor="email">Email: </label>
                <input  onChange={(event) => updateCustInfo(event)}
                  id="email"
                  name="email"
                  type="text"
                  className="form-control"
                  defaultValue={customer.email}
                  
                />
              </div>
              <div className="form-group col-md-5">
                <label className="inputLabel" htmlFor="tracks">Address: </label>
                <input  onChange= {(event) => updateCustInfo(event)}
                  id="address"
                  name="address"
                  type="text"
                  className="form-control"
                  defaultValue={customer.address}
                  
                />
              </div>
          
              <div className="form-group col-md-5">
                <label className="inputLabel" htmlFor="tracks">Phone: </label>
                <input  onChange={(event) => updateCustInfo(event)}
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  className="form-control"
                  defaultValue={customer.phoneNumber}
                  
                />
              </div>
            </div>
            <br></br>
            <div className="form-group">
              <button 
                onClick={() => updateCustomer()}
                className="submitButton">Update Customer</button>
              
            </div>
          </form>
        </div>
        </div>
      );
}

export default CustomerUpdate;

