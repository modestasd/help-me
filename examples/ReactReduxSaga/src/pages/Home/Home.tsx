import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts } from 'src/store/modules/posts/selectors';
import * as postsActions from 'src/store/modules/posts/actions';

interface Props {
    
}

const Home = (props: Props) => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);

    return (
        <>
           <button onClick={()=>dispatch(postsActions.getPosts())}>button</button>
           {posts.map(i=> <p>{i.title}</p>)}
        </>
    )
}

export default Home
