import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import history from './history';

/**
 * Import all page components here
 */
//import App from '..';
import CustomerList from './customerlist';
import CustomerCreate from './customercreate';
import CustomerUpdate from './customerupdate';
import ContactUs from './contactUs';
import Navigation from './navigation';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */

 const App = () =>{
   return (
       <BrowserRouter history={history}>
        <>
            <Navigation />
            <br></br>
            <Switch>
            <Route exact path='/customerlist' component={CustomerList}></Route>
            <Route exact path='/customercreate' component={CustomerCreate}></Route>
            <Route exact path='/customerupdate' component={CustomerUpdate}></Route>
            <Route exact path='/contactus' component={ContactUs}></Route>
            </Switch>
        </>
        </BrowserRouter>
   );
 }
export default App;