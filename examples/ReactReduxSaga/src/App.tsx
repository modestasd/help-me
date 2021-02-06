import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './store/modules/setupExample/actions';

const App:React.FC = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log(state)
    return (
        <>
           <button onClick={()=>dispatch(increment())}>button</button>
        </>
    )
};

export default App;
