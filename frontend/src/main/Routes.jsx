import React from 'react';
import { HashRouter, Route, } from 'react-router-dom';


import Report from '../reports/report';
import DashBoard from '../dashboard/dashboard';

export default () => {
    return (
        <HashRouter>
            <Route path='/reports' component={Report}></Route>
            <Route path='/dashboard' component={DashBoard}></Route>
        </HashRouter>
    );
}