import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Card from './components/card';
import Homepage from './containers/Homepage';
import Edit from './containers/Edit';
import Login from './containers/Login';


// import App from './App';

export default (
    <Switch>
        
        <Route exact path="/login" component={Login}/>
        <Redirect from="*" to="/login"/>

        
        </Switch>
    
)