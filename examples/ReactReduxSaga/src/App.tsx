import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './store/modules/setupExample/actions';

const App:React.FC = () => {
    const dispatch = useDispatch();
    const counter = useSelector(({setupExample}) => setupExample.counter);

    return (
        <>
           <button onClick={()=>dispatch(increment())}>button</button>
           <p>{counter}</p>
        </>
    )
};

export default App;
