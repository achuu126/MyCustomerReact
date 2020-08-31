import React, {Component} from "react";
import { connect } from 'react-redux';
import {  fetchCustomers} from '../actions/customeractions';
import { Link } from "react-router-dom";
import CustomerTable from "./customerTable";

import "./css/App.css";
import { $CombinedState } from "redux";


function mapStateToProps(state) { 
  // console.log(JSON.stringify(state));  
  return { 
      error: state.error,
      loading: state.loading,
      customers: state.customers
    };
}

// used in the connect
// allows you to call dispatchers
// without referring to the dispatch function directly
const mapDispatchToProps = {
  fetchCustomers
};



class CustomerList extends Component {


  componentDidMount() {
    // because of mapDispatchToProps, this line is simplified
    this.props.fetchCustomers();
  }
  deleteCust (custs){

    //ask Nick how to set state in customers.
    window.location.reload(true);
    
  }

  render() {
    console.log("render list" + this.props.customers);
    return (
      // <Link to="/customercreate">
        <div className="container">
        <div className="header">
          <h3>Customer List</h3>
          
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
export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);
