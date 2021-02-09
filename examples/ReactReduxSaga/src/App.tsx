import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment } from './store/modules/setupExample/actions';
import * as posts from './store/modules/posts/actions';

const App:React.FC = () => {
    const dispatch = useDispatch();
    const counter = useSelector(({setupExample}) => setupExample.counter);

    return (
        <>
           <button onClick={()=>dispatch(posts.getPosts())}>button</button>
           <p>{counter}</p>
        </>
    )
};
console.log(process.env);
export default App;
