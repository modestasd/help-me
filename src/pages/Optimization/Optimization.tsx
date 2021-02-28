import React from 'react';
import { 
    LazyInitialStateStory,
    ReactLazyStory,
    ReactMemoStory,
    UseCallbackStory,
    UseMemoStory
} from './components';

const Optimization = () => {
    return (
        <div>
            Optimization
            <LazyInitialStateStory />
            <ReactLazyStory />
            <ReactMemoStory />
            <UseCallbackStory />
            <UseMemoStory />
        </div>
    )
}

export default Optimization
