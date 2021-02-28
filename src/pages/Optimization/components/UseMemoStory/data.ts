export const code = `
    import React, { useMemo, useState } from 'react';

    const someHugeFunction = (names: string[]) => {
        return names.map(name => name.toUpperCase());
    };

    const namesSet: Set<string[]> = new Set();
    const memoizedNamesSet: Set<string[]> = new Set();

    const App:React.FC = () => {
        //lets say we get names from parent component, which retrieves them from API
        const [names,] = useState(['Tom', 'Kate', 'Lisa', 'Dan']);
        const [,setToggle] = useState(false);
        
        const capitalizedNames = someHugeFunction(names);
        const memoizedCapitalizedName = useMemo(()=>someHugeFunction(names),[names]);

        namesSet.add(capitalizedNames);
        memoizedNamesSet.add(memoizedCapitalizedName);
        console.log('namesSet size:',namesSet.size);
        console.log('memoizedNamesSet size:', memoizedNamesSet.size);

        return (
            <div>
                <button onClick={()=>setToggle(prev => !prev)}>Toggle</button>
            </div>
        );
    };

    export default UseMemo;

`;