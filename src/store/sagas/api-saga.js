import { takeLatest, call, put } from 'redux-saga/effects';

import { getNewsListRequest, getNewsRecordRequest } from '../apis';
import {
  getNewsSuccess, getNewsError, getNewsRecordSuccess, getNewsRecordError,
} from '../actions';

function* getNewsListSaga(action) {
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

function* getNewsRecordSaga(action) {
  try {
    const payload = yield call(getNewsRecordRequest, action.payload);
    yield put(getNewsRecordSuccess(payload));
  } catch (error) {
    yield put(getNewsRecordError());
  }
}

export default function* watcherSaga() {
  yield takeLatest('GET_NEWS_REQUEST', getNewsListSaga);
  yield takeLatest('GET_NEWS_RECORD_REQUEST', getNewsRecordSaga);
}
