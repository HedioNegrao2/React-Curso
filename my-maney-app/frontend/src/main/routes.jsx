import React from 'react'
import {Router, Route, Redirect, IndexRoute, hashHistory} from 'react-router'

import App from './app'
import Dashboard from '../dashboard/dashBoard'
import BillingCylce from '../billingCycle/billingCycle'

export default props => (
    <Router  history ={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashboard} /> 
            <Route path= 'billingCycles' component={BillingCylce} />       
        </Route>
        
        
        <Redirect from='*' to='/' />
    
    </Router>
)