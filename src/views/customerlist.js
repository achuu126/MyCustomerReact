import React from 'react';
import "./css/App.css";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchCustomers } from "../actions/customeractions";
import CustomerTable from "./customerTable";


function mapStateToProps(state) { 
  // console.log(JSON.stringify(state.customers));  
  return { 
      error: state.error,
      loading: state.loading,
      customers: state.customers };
  }
// used in the connect
// allows you to call dispatchers
// without referring to the dispatch function directly
const mapDispatchToProps = {
  fetchCustomers
}

class CustomerList extends React.Component {

  componentDidMount() {
    // because of mapDispatchToProps, this line is simplified
    this.props.fetchCustomers();
  }
  
 render() {
    console.log(this.props.customers);
    return (
      //  <Link to="/customerlist">
      <>
      <div className="container">
        <div className="header">
        <br />
          <h3>Customer List</h3> <br />
        </div>
        <br></br>
        <CustomerTable customers={this.props.customers}/>
        
        </div>
        </>
      /* </Link> */
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);

