import { createAction } from 'redux-actions';
import * as POSTS_TYPES from './constants';

export const getPosts = createAction(POSTS_TYPES.GET_POSTS);
export const getPostsRequest = createAction(POSTS_TYPES.GET_POSTS_REQUEST);
export const getPostsSuccess = createAction(POSTS_TYPES.GET_POSTS_SUCCESS);
export const getPostsFailure = createAction(POSTS_TYPES.GET_POSTS_FAILURE);
