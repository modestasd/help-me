import React,{ lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import ROUTES from './constants';

const Home = lazy(() => import('src/pages/Home'));

const Routes:React.FC = () => {
    return (
            <Suspense fallback={<>Loading</>}>
                <Switch>
                    <Route exact path={ROUTES.HOME} component={Home}/> 
                </Switch>
            </Suspense>
    );
};

export default Routes;
