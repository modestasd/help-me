import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import Responsive from './components/Responsive';

import TextBox from './components/TextBox';
import Toggler from './components/Toggler';

import {GlobalStyles,darkTheme,lightTheme} from './styles';

const App = () => {
    const [theme, setTheme] = useState<'dark'|'light'>('light');
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <Toggler 
                onClick={()=>setTheme(prevTheme=>prevTheme === 'light'? 'dark' : 'light')} 
                isEnabled={theme === 'dark'}
            />
            <TextBox />
            {/* <Responsive /> */}
        </ThemeProvider>
    )
}

export default App
