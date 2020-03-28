import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Card from './components/card';
import Homepage from './containers/Homepage';
import Edit from './containers/Edit';

// import App from './App';

export default (
    <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/admin/viewAttendanceByMonth" component={Card}/>
        <Route exact path="/admin/edit" component={Edit}/>
        </Switch>
    
)