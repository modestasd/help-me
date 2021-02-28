import React,{useState}  from 'react';

import ComponentWithError from './components/ComponentWithError';
import ComponentWithoutError from './components/ComponentWithoutError';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
    const [showErrorInFirst,setShowErrorInFirst] = useState(false);
    const [showErrorInSecond,setShowErrorInSecond] = useState(false);

    return (
        <>
            <ErrorBoundary>
                <ComponentWithError showError={showErrorInFirst}/>
                <button onClick={()=>setShowErrorInFirst(true)}>Throw error</button>
            </ErrorBoundary>
            <ComponentWithoutError showError={showErrorInSecond}/>
            <button onClick={()=>setShowErrorInSecond(true)}>Throw error without error boundary</button>
        </>
    )
}

export default App
