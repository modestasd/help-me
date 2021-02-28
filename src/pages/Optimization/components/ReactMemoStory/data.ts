export const code = 
`
    import React, { useState,memo } from 'react'

    const App:React.FC = () => {
        const [isClicked, setIsClicked] = useState(false);
        return (
            <>
                <button onClick={()=> setIsClicked(prev => !prev)}>{isClicked ? 'Yes' : 'No'}</button>
                <Example isMemoized={false}/> 
                <MemoizedExample isMemoized={true}/>
            </>
        );
    };

    interface IExampleProps {
        isMemoized: boolean
    };
    const Example:React.FC<IExampleProps> = ({isMemoized}) => {
        console.log('RENDERED '+ (isMemoized ? 'memoized ' : '') + 'component');
        return (
            <div>
                Hello world
            </div>
        );
    };

    const MemoizedExample = memo(Example);
    
`