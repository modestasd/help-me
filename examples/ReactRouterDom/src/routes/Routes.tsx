import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ROUTES } from './constants';

import Home from 'src/pages/Home';
import Welcome from 'src/pages/Welcome';

const Routes:React.FC = () => {
    return (
            <Switch>
                <Route exact path={ROUTES.HOME} component={Home}/> 
                <Route path={ROUTES.WELCOME} component={Welcome}/> 
            </Switch>
    );
};

export default Routes;
