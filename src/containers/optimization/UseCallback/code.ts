export const code = `
    import React, { useCallback, useState } from 'react';

    const useCallbackfunctions: Set<any> = new Set();
    const functions: Set<any> = new Set();

    const App:React.FC = () => {
        const [, setToggle] = useState(false);
        const [, setCounter] = useState(0);
        const incrementByOne = useCallback(()=> setCounter((counter => counter + 1)), [setCounter]);
        const incrementByThree = () => setCounter((counter => counter + 3));

        useCallbackfunctions.add(incrementByOne);
        functions.add(incrementByThree);

        console.log('useCallbackfunctions size:', useCallbackfunctions.size);
        console.log('functions size:', functions.size);
        return (
            <>
                <button onClick={()=>setToggle(prev => !prev)}>Toggle</button>
                <IncrementByOneComponent onClick={incrementByOne}/>
                <IncrementByThreeComponent onClick={incrementByThree}/>
            </>
        );
    };

`;