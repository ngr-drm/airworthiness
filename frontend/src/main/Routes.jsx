import React from 'react';
import { HashRouter, Route, } from 'react-router-dom';


import Report from '../reports/report';
import DashBoard from '../home/dashboard';

export default () => {
    return (
        <HashRouter>
            <Route exact path='/dashboard' component={DashBoard}></Route>
            <Route path='/reports' component={Report}></Route>
        </HashRouter>
    );
}