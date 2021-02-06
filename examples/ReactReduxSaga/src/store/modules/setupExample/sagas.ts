import { all, put, takeEvery } from 'redux-saga/effects';
import { increment } from './actions';
import * as SETUP_EXAMPLE_TYPES from './constants';

export function* incrementWorker() {
    console.log('in')
    // yield put({type:SETUP_EXAMPLE_TYPES.INCREMENT});

}
  
export function* incrementWatcher() {
    yield takeEvery(SETUP_EXAMPLE_TYPES.INCREMENT, incrementWorker)
}

export default function* setupExamplesaga() {
    yield all([incrementWatcher()]);
}
  