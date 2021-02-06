import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ROUTES from './constants';

import Home from 'src/pages/Home';
import Welcome from 'src/pages/Welcome';
import NotFound from 'src/pages/NotFound';

const Routes:React.FC = () => {
    return (
            <Switch>
                <Route exact path={ROUTES.HOME} component={Home}/> 
                <Route path={ROUTES.WELCOME} component={Welcome}/> 
                <Route path={ROUTES.NOT_FOUND} component={NotFound}/> 
                <Route component={NotFound}/> 
            </Switch>
    );
};

export default Routes;
