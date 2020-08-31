import React, {useEffect, useState, useCallback} from 'react';
import "./css/App.css";
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import Delete from "./img/Trash.png";
import Edit from "./img/Modify.png";
import { useDispatch } from 'react-redux';
import {deleteCustomer, fetchCustomers} from '../actions/customeractions';

function  CustomerTable (props){
    console.log("begin table props cust" + props.customers);
    const [customers, setCustomers]=useState(props.customers);
    console.log(props);
    //const customers = props.customers;
  
    const dispatch = useDispatch();

    useEffect(()=>{
        
            console.log("calling effect");
             setCustomers(props.customers);
            //fetchCustomers();
            // dispatch(fetchCustomers())
            // return()=>{};
    });

    console.log("cust table " +customers.length); 

    function deleteCust(cust)
    {
        console.log("delete cust " + cust);
        dispatch(deleteCustomer(cust));
        props.deleteCustomer();
    }
    
// async function deleteCust(customer) {
//     // try{
//     //     await Axios.post("http://localhost:8080/customers/deleteCustomer", customer)
//     //     await Axios.get("http://localhost:8080/customers/getCustomers")
//     //     .then(response => {
//     //         setCustomers(response.data);
//     //         console.log("get customer result " +response.data);
//     //         props.deleteCustomer(response.data);
//     //         // console.log("get customer result" +response.data);
//     //         // console.log("current customer result" +customers);
//     //         // console.log("get customer " +customers);
//     //     });
        
//     //     }catch(error){
//     //         console.log(error);
//     //     }
//     dispatch(deleteCustomer (customer));
//     }
    
    const history = useHistory();

  
    const tabRow = ({customers}) => {
     console.log("render table row " + customers.length);
        
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
    console.log("render table");
    return(
        
        <>
           
            <div className="App">
            
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
        </>
    );
}

 

export default CustomerTable;

{/* <td><button className="buttonImg" onClick={() => {deleteCustomer(customer)}}><img src={Delete}/></button></td> */}