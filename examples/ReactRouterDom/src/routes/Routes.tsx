import React,{ lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ROUTES from './constants';

const Home = lazy(() => import('src/pages/Home'));
const Welcome = lazy(() => import('src/pages/Welcome'));
const NotFound = lazy(() => import('src/pages/NotFound'));

const Routes:React.FC = () => {
    return (
            <Suspense fallback={<>Loading</>}>
                <Switch>
                    <Route exact path={ROUTES.HOME} component={Home}/> 
                    <Route path={ROUTES.WELCOME} component={Welcome}/> 
                    <Route path={ROUTES.NOT_FOUND} component={NotFound}/> 
                    <Redirect from={ROUTES.HOME} to={ROUTES.WELCOME} />
                    <Route component={NotFound}/> 
                </Switch>
            </Suspense>
    );
};

export default Routes;
