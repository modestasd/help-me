import React from 'react'
import { ThemeProvider } from 'styled-components';

import { HeaderContainer } from './containers';
import Routes from './routes/Routes';

import { GlobalStyle } from './styles/globalStyles';
import { darkTheme } from './styles/theme';
import {Wrapper} from './App.styles';
import ErrorBoundary from './components/common/ErrorBoundary/ErrorBoundary';

const App:React.FC = () => {
    return (
        <ErrorBoundary>
            <ThemeProvider theme={darkTheme}>
                <GlobalStyle/>
                <Wrapper>
                    <HeaderContainer />
                    <Routes />
                </Wrapper>
            </ThemeProvider>
        </ErrorBoundary>
    )
}

export default App;
