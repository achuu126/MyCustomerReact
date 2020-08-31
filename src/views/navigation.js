import React from 'react';
import "./css/App.css";
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className="navlinkbg">
          <NavLink className="navlink" to="/customerlist">Customer List</NavLink>
          <NavLink className="navlink" to="/customercreate">Create Customer</NavLink>
          <NavLink className="navlink" to="/contactus">Contact Us</NavLink>
       </div>
       
    );
}
 
export default Navigation;