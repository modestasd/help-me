import { all } from 'redux-saga/effects';
import setupExamplesaga from './modules/setupExample/sagas';

export default function* rootSaga() {
    yield all([
        setupExamplesaga()
    ]);
}
  