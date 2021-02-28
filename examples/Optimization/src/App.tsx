import React from 'react';
import Routes from 'src/routes/Routes';
import Header from './components/layout';

const App:React.FC = () => {
    return (
        <>
            <Header />
            <Routes />
        </>
    )
};

export default App;
