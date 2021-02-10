import { handleActions } from 'redux-actions';
import * as POSTS_TYPES from './constants';
import {PostsTypes} from 'src/types';

import IPost = PostsTypes.Post;

export interface PostsState {
    posts: IPost[],
    isLoading: boolean;
    error: string | null,
};
 
const defaultState: PostsState = {
  posts: [],
  isLoading: false,
  error: null,
};

//move to dynamic handling
const getPostsRequest = (state: PostsState): PostsState => ({
  ...state,
  posts: [],
  isLoading: true,
});

const getPostsSuccess = (state: PostsState, posts: IPost[]): PostsState => ({
  ...state,
  posts: posts,
  isLoading: false,
});

//move to dynamic handling
const getPostsFailure = (state: PostsState): PostsState => ({
  ...state,
  isLoading: false,
  error: 'oh no'
});

const postsReducer = handleActions(
    {
      [POSTS_TYPES.GET_POSTS_REQUEST]: (state) => getPostsRequest(state),
      [POSTS_TYPES.GET_POSTS_SUCCESS]: (state, { payload }) => getPostsSuccess(state, payload.posts),
      [POSTS_TYPES.GET_POSTS_FAILURE]: (state) => getPostsFailure(state),
    },
    defaultState
  );

export default postsReducer;