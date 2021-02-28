import React from 'react';
import {ThemeProvider} from 'styled-components';

import Routes from './routes/Routes';
import {GlobalStyles,darkTheme} from './styles';
import {Header} from './components/layout';
import {ErrorBoundary} from './components/common';

import {Wrapper} from './App.styles';

const App:React.FC = () => {
    return (
        <ErrorBoundary>
            <ThemeProvider theme={darkTheme}>
                <GlobalStyles/>
                <Wrapper>
                    <Header />
                    <Routes />
                </Wrapper>
            </ThemeProvider>
        </ErrorBoundary>
    )
}

export default App;
