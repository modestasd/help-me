import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as postsActions from './store/modules/posts/actions';
import { selectPosts } from './store/modules/posts/selectors';

const App:React.FC = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);

    return (
        <>
           <button onClick={()=>dispatch(postsActions.getPosts())}>button</button>
           {posts.map(i=> <p>{i.title}</p>)}
        </>
    )
};
console.log(process.env);
export default App;
