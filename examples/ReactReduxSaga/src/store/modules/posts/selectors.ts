import { DefaultRootState } from 'react-redux';
import {PostsTypes} from 'src/types';

import IPost = PostsTypes.Post;

type SelectPostsState = (state: DefaultRootState) => DefaultRootState['posts'];
type SelectPosts = (state: DefaultRootState) => IPost[];

const selectPostsState: SelectPostsState = state => state?.posts;
export const selectPosts: SelectPosts = state => selectPostsState(state)?.posts;
