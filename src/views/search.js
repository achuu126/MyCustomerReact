import React, {useEffect, useState, useCallback} from 'react';
import "./css/App.css";
import { useHistory } from 'react-router-dom';
import Delete from "./img/Trash.png";
import Edit from "./img/Modify.png";
import { useDispatch, useSelector } from 'react-redux';
import {deleteCustomer, searchCustomers, fetchCustomers} from '../actions/customeractions';
import States from "../json/states.json";

function  Search (props){
    console.log("begin table props cust" + props.customers);
    const custList = useSelector((state)=>state);
    const {customers, loading,error}=custList;
    const [customer, setCustomer]=useState({
        firstName: "",
        lastName: "",
        email: ""});
    console.log(props);
    //const customers = props.customers;
  
    const dispatch = useDispatch();

    useEffect(()=>{
        
            console.log("calling effect");
            console.log(customer);
            //  setCustomers(props.customers);
            //fetchCustomers();
            //dispatch(fetchCustomers())
            if(customer.firstName == "" &&customer.lastName == "" && customer.email == "")
                dispatch(fetchCustomers());
            else
                searchCust();
            return()=>{};
    }, []);

    
    function deleteCust(cust)
    {
        console.log("delete cust " + cust);
        dispatch(deleteCustomer(cust));
        dispatch(fetchCustomers());
    }

    function searchCust(e)
    {
        e.preventDefault();
        console.log("search cust " + customer);
        console.log(customer);
        dispatch(searchCustomers(customer));
       // dispatch(fetchCustomers());
        
    }

    const updateCustInfo = e=>{
        setCustomer({...customer, [e.target.name]: e.target.value})
      }
    const history = useHistory();

  
    const tabRow = ({customers}) => {
     
        
        if(customers.length>0){
        
            return (
                customers.map(function(customer, i) {
                return (
                <tr key={i}>
                   
                    <td><button className="buttonImg" onClick={() => { deleteCust (customer)}}><img src={Delete}/></button></td>
                    <td><button className="buttonImg" onClick={() =>history.push({pathname:'/customerupdate',customer: {customer}})}><img src={Edit}/></button></td>
                    <td>{customer.firstName}</td>
                    <td>{customer.lastName}</td>
                    <td>{customer.email}</td>
                    <td>{customer.address}</td>
                    <td>{customer.phoneNumber}</td>
                </tr>)
                } ));
        }   
        return null;
    }
    
    return(
        
        <div className="container">
          <div className="header">
          <h3>Search Customer Information</h3>
          </div>
          

            <form className="addCust" autoComplete="off">
        <p>Search Customer Information:</p>
            <div className="form-row">
              <div className="form-group col-md-5">
                <label className="inputLabel">First Name: </label>
                <input  onBlur={(event) => updateCustInfo(event)}
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="form-control"
                  defaultValue={customer.firstName } 
                  
                />
              </div>
              <div className="form-group col-md-5">
                <label className="inputLabel">Last Name: </label>
                <input  onChange={(event) => updateCustInfo(event)}
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="form-control"
                  defaultValue={customer.lastName } 
                  
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-5">
                <label className="inputLabel">Email: </label>
                <input  onChange={(event) => updateCustInfo(event)}
                  id="email"
                  name="email"
                  type="text"
                  className="form-control"
                  defaultValue={customer.email } 
                  
                />
              </div>
            
            </div>

            <div className="form-row">
              <div className="form-group col-md-5">
                <label className="inputLabel">States: </label>
                <select className="soflow" value="Florida" onChange={()=>{}}>
                {States.map((obj)=>
                  <option key={obj.name}>{obj.name}</option>)}
                </select>
              </div>
            </div>
           
            <div className="form-group">
              <button 
                className="submitButton"
                onClick={(e)=> searchCust(e)}
              > Search</button>
            </div>
          </form>
                <br></br>
            
            <table className="customers">
                <thead>
                <tr>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>{tabRow({customers})}
                   </tbody>
            </table>
            </div>
    );
}

 

export default Search;

{/* <td><button className="buttonImg" onClick={() => {deleteCustomer(customer)}}><img src={Delete}/></button></td> */}