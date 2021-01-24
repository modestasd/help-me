import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ROUTES } from './constants';

import Home from 'src/pages/Home';
import UseCallback from 'src/pages/UseCallback';
import UseMemo from 'src/pages/UseMemo';

const Routes:React.FC = () => {
    return (
            <Switch>
                <Route exact path={ROUTES.HOME} component={Home}/> 
                <Route path={ROUTES.UseCallback} component={UseCallback}/> 
                <Route path={ROUTES.UseMemo} component={UseMemo}/> 
            </Switch>
    );
};

export default Routes;
