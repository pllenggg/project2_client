import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home';
import CustomerBookingSearch from './Components/CustomerBookingSearch';
import CustomerBookingList from './Components/CustomerBookingList';
import RetailServiceList from './Components/RetailServiceList';
import RetailBookingList from './Components/RetailBookingList';
import RetailsList from './Components/RetailsList';
import CategoriesList from './Components/CategoriesList';
import SignUpForm from './Components/SignUpForm';
import Navbar from './Navigation';

const Routes = (

    <Router>
        <div>
            <Navbar />
            {/* Home */}
            <Route exact path="/" component={ Home } /> 

            {/* Customer */}
            <Route exact path="/customerbookingsearch" component={ CustomerBookingSearch } />
            <Route exact path="/customerbookinglist" component={ CustomerBookingList } />
            
            {/* Retail */}
            <Route exact path="/retailservicelist" component={ RetailServiceList } />
            <Route exact path="/retailbookinglist" component={ RetailBookingList } />

            {/* Admin */}
            <Route exact path="/retails" component={ RetailsList } />
            <Route exact path="/categories" component={ CategoriesList } />

            {/* User */}
            <Route exact path="/signup" component={ SignUpForm } />
        </div>
    </Router>
)
export default Routes;