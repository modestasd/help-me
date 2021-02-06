import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from './types';

const WelcomePage = lazy(() => import('../pages/Welcome'));
const HomePage = lazy(() => import('../pages/Home'));
const AboutPage = lazy(() => import('../pages/About'));
const OptimizationPage = lazy(() => import('../pages/Optimization'));
const ErrorHandlingPage = lazy(() => import('../pages/ErrorHandling'));
const LocalizationPage = lazy(() => import('../pages/Localization'));

const Routes:React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path={ROUTES.HOME} component={HomePage}/> 
                <Route path={ROUTES.WELCOME} component={WelcomePage}/> 
                <Route path={ROUTES.ABOUTME} component={AboutPage}/> 
                <Route path={ROUTES.OTIMIZATION} component={OptimizationPage}/>
                <Route path={ROUTES.LOCALIZATION} component={LocalizationPage}/>
                <Route path={ROUTES.EREORHANDLING} component={ErrorHandlingPage}/>
            </Switch>
        </Suspense>
    );
};

export default Routes;
