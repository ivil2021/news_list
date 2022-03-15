import { takeLatest, call, put } from 'redux-saga/effects';

import getNewsListRequest from '../apis';
import { getNewsSuccess, getNewsError } from '../actions';

function* workerSaga(action) {
  try {
    const payload = yield call(getNewsListRequest, {
      page: action.payload.page,
      limit: action.payload.limit,
    });
    // {
    //   page: action.payload.page,
    //   limit: action.payload.limit,
    // }  --- равноценно action.payload
    yield put(getNewsSuccess(payload));
  } catch (error) {
    yield put(getNewsError());
  }
}

// function* getNewsRecordSaga(action) {
//   try {
//     yield put(getNewsRecordSuccess({}));
//   } catch (error) {
//     yield console.log('error', error.message);
//   }
// }

export default function* watcherSaga() {
  yield takeLatest('GET_NEWS_REQUEST', workerSaga);
  // yield takeLatest('GET_NEWS_RECORD_REQUEST', getNewsRecordSaga);
}
