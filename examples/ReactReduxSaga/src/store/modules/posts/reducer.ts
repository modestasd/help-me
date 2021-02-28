import { handleActions } from 'redux-actions';
import * as POSTS_TYPES from './constants';
import {PostsTypes} from 'src/types';

import IPost = PostsTypes.Post;

export interface PostsState {
    posts: IPost[],
};
 
const defaultState: PostsState = {
  posts: [],
};

const getPostsSuccess = (state: PostsState, posts: IPost[]): PostsState => ({
  ...state,
  posts: posts,
});

const postsReducer = handleActions(
    {
      [POSTS_TYPES.GET_POSTS_SUCCESS]: (state, { payload }) => getPostsSuccess(state, payload.posts),
    },
    defaultState
  );

export default postsReducer;