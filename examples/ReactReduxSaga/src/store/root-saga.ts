import { all } from 'redux-saga/effects';
import postsSagas from './modules/posts/sagas';

export default function* rootSaga() {
    yield all([
        ...postsSagas,
    ]);
}
  