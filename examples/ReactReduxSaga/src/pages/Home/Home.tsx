import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts } from 'src/store/modules/posts/selectors';
import * as postsActions from 'src/store/modules/posts/actions';
import { createLoadingSelector } from 'src/store/modules/loading/selectors';
import { GET_POSTS_REQUEST } from 'src/store/modules/posts/constants';

interface Props {
    
}

const Home = (props: Props) => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const isLoading = useSelector(createLoadingSelector([GET_POSTS_REQUEST]));

    return (
        <>
           <button onClick={()=>dispatch(postsActions.getPosts())}>button</button>
           {posts.map(i=> <p>{i.title}</p>)}
        </>
    )
}

export default Home
