import { createAction } from 'redux-actions';
import * as POSTS_TYPES from './constants';
import {PostsTypes} from 'src/types';

import IPost = PostsTypes.Post;

export const getPosts = createAction(POSTS_TYPES.GET_POSTS);
export const getPostsRequest = createAction(POSTS_TYPES.GET_POSTS_REQUEST);
export const getPostsSuccess = createAction(POSTS_TYPES.GET_POSTS_SUCCESS,(posts: IPost[]) => ({ posts }));
export const getPostsFailure = createAction(POSTS_TYPES.GET_POSTS_FAILURE);
