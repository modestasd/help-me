export const code = 
`
    import React, {useState} from 'react';
    const loadNames = () => {
        console.log('load');
        return ['Tom', 'Kate', 'Lisa', 'Dan'];
    };

    const Example:React.FC = () => {
        const [names, setNames] = useState(() => loadNames());
        const [isClicked, setIsClicked] = useState(false);
        return (
            <div>
                <button onClick={()=> setIsClicked(prev => !prev)}>
                    {isClicked ? 'Yes' : 'No'}
                </button>
                {names && names.map(i => <li key={i}>{i}</li>)}
            </div>
        );
    };

    export default Example;

`;