import React from 'react';
import { 
    LazyInitialStateContainer, 
    ReactLazyContainer, 
    ReactMemoContainer, 
    UseCallbackContainer, 
    UseMemoContainer 
} from 'src/containers/optimization';

const Optimization = () => {
    return (
        <div>
            Optimization
            <LazyInitialStateContainer />
            <ReactMemoContainer />
            <UseCallbackContainer />
            <UseMemoContainer />
            <ReactLazyContainer />
        </div>
    )
}

export default Optimization
