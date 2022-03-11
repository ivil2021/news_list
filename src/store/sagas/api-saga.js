import { takeLatest, call, put } from 'redux-saga/effects';

import getNewsListRequest from '../getNewsListRequest';
import { getNewsSuccess } from '../actions';

function* workerSaga(action) {
  try {
    const payload = yield call(getNewsListRequest, action.payload);
    yield put(getNewsSuccess(payload));
  } catch (error) {
    yield console.log('error', error.message);
  }
}

export default function* watcherSaga() {
  yield takeLatest('GET_NEWS_REQUEST', workerSaga);
}
