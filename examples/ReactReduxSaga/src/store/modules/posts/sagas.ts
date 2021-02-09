import { fork, put, takeEvery, call } from 'redux-saga/effects';
import * as postsApi from 'src/api/posts';
import * as actions from './actions';
import * as POSTS_TYPES from './constants';

interface ITemporaryResponse {
    data: ITemporary;
    error?: string;
}

interface ITemporary {
    body: string;
    id: number;
    title: string;
    userId: number;
}

export function* getPostsWorker() {
    yield put(actions.getPostsRequest());
    const response: ITemporaryResponse = yield call(postsApi.getPosts);
    console.log(response.data)
    if (!response.error) {
        yield put(actions.getPostsSuccess({ data: response.data }));
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
  