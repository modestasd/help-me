import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from 'src/routes/types';

const WelcomePage = lazy(() => import('src/pages/Welcome'));
const HomePage = lazy(() => import('src/pages/Home'));
const AboutPage = lazy(() => import('src/pages/About'));
const OptimizationPage = lazy(() => import('src/pages/Optimization'));
const ErrorHandlingPage = lazy(() => import('src/pages/ErrorHandling'));
const LocalizationPage = lazy(() => import('src/pages/Localization'));

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
