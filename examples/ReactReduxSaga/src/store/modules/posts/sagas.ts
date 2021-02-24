import { fork, put, takeEvery, call } from 'redux-saga/effects';
import * as postsApi from 'src/api/posts';
import {IApiResponse, PostsTypes} from 'src/types';
import * as actions from './actions';
import * as POSTS_TYPES from './constants';

import IPost = PostsTypes.Post;

export function* getPostsWorker() {
    yield put(actions.getPostsRequest());
    const response: IApiResponse<IPost[]> = yield call(postsApi.getPosts);

    if (!response.error) {
        yield put(actions.getPostsSuccess(response.data));
    } else {
        yield put(actions.getPostsFailure());
    }
}
  
export function* getPostsWatcher() {
    yield takeEvery(POSTS_TYPES.GET_POSTS, getPostsWorker);
}

const postsSagas = [
    fork(getPostsWatcher)
];

export default postsSagas;
  