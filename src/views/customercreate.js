import React, {Component} from "react";
import { connect } from 'react-redux';
import {addCustomer, store, ADD_CUSTOMER_BEGIN, fetchCustomers, deleteCustomer, updateCustomer} from '../actions/customeractions';
import { Link } from "react-router-dom";
import CustomerTable from "./customerTable";
import Axios from 'axios';
import "./css/App.css";
import { $CombinedState } from "redux";

import { useHistory } from 'react-router-dom';

function mapStateToProps(state) { 
  // console.log(JSON.stringify(state));  
  return { 
      error: state.error,
      loading: state.loading,
      customer: state.customer,
      customers: state.customers
    };
}

// used in the connect
// allows you to call dispatchers
// without referring to the dispatch function directly
const mapDispatchToProps = {
  addCustomer
  ,fetchCustomers
  ,deleteCustomer
  ,updateCustomer
};


class CustomerCreate extends Component {

  // history = useHistory();

  async onSubmit(e) {
        e.preventDefault();
    let customer = {
      firstName: this.getFirstName.value,
      lastName: this.getLastName.value,
      email: this.getEmail.value,
      address: this.getAddress.value,
      phoneNumber: this.getPhone.value
    };
    //  console.log(customer);
    this.props.addCustomer(customer);
    // this.props.deleteCustomer(customer);
    this.props.fetchCustomers();
  }

  deleteCust (custs){

    //ask Nick how to set state in customers.
     window.location.reload(true);
    
  }

  updateCustomer (customer){
    window.location.reload(true);
  }

  componentDidMount() {
    // because of mapDispatchToProps, this line is simplified
    this.props.fetchCustomers();
    
  }

  // componentDidUpdate() {
  //   // because of mapDispatchToProps, this line is simplified
  //   this.props.fetchCustomers();
    
  // }
  
    // <form onSubmit={this.onSubmit.bind(this)} autoComplete="off">
 
  render() {
     console.log("render create" + this.props.customers.length);
    return (
      // <Link to="/customercreate">
        <div className="container">
        <div className="header">
          <h3>Create Customer</h3>
          
        </div>
        <div style={{ marginTop: 20 }}>
          
        <form className="addCust" onSubmit={this.onSubmit.bind(this)} autoComplete="off">
        <p>Add New Customer Information:</p>
            <div className="form-row">
              <div className="form-group col-md-5">
                <label className="inputLabel">First Name: </label>
                <input
                  id="firstName"
                  type="text"
                  className="form-control"
                  ref={(input)=>this.getFirstName = input} 
                  
                />
              </div>
              <div className="form-group col-md-5">
                <label className="inputLabel">Last Name: </label>
                <input
                  id="lastName"
                  type="text"
                  className="form-control"
                  ref={(input)=>this.getLastName = input} 
                  
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-5">
                <label className="inputLabel">Email: </label>
                <input
                  id="email"
                  type="text"
                  className="form-control"
                  ref={(input)=>this.getEmail = input} 
                  
                />
              </div>
              <div className="form-group col-md-5">
                <label className="inputLabel">Address: </label>
                <input
                  id="address"
                  type="text"
                  className="form-control"
                  ref={(input)=>this.getAddress = input} 
                  
                />
              </div>
          
              <div className="form-group col-md-5">
                <label className="inputLabel">Phone: </label>
                <input
                  id="phone"
                  type="text"
                  className="form-control"
                  ref={(input)=>this.getPhone = input} 
                  
                />
              </div>
            </div>
           
            <div className="form-group">
              <input
                type="submit"
                value="Create Customer"
                className="submitButton"
              />
            </div>
          </form>
        </div>
      <br></br>
      {this.props.customers.length>0 &&
        <CustomerTable customers={this.props.customers} deleteCustomer={this.deleteCust.bind(this)}/>

     }
     </div>
      // </Link>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomerCreate);

{/* <CustomerTable customers={this.props.customers} deleteCustomer={this.deleteCust.bind(this)} updateCustomer ={this.updateCustomer}/> */}