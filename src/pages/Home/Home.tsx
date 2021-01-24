import React, { useCallback, useState } from 'react'

const loadNames = () => {
    console.log('load');
    return ['Tom', 'Kate', 'Lisa', 'Dan'];
}

const Home:React.FC = () => {
    //lazy initail state
    const [names, setNames] = useState(() => loadNames());
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div>
            {/* <button onClick={()=> setIsClicked(prev => !prev)}>{isClicked ? 'Yes' : 'No'}</button>
            {/* Rect.memo example */}
           {/* <NamesContainer isMemoized={false}/> 
           <MemoizedNamesContainer isMemoized={true}/>
           {names && names.map(i => <li key={i}>{i}</li>)} */} 
        </div>
    )
}

export default Home
