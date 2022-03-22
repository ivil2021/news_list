import { takeLatest, call, put } from 'redux-saga/effects';

import { getNewsListRequest, getNewsRecordRequest, addNewsRecordRequest } from '../apis';
import {
  getNewsSuccess, getNewsError,
  getNewsRecordSuccess, getNewsRecordError,
  addNewsRecordSuccess, addNewsRecordError,
} from '../actions';

function* getNewsListSaga(action) {
  try {
    const payload = yield call(getNewsListRequest, {
      page: action.payload.page,
      limit: action.payload.limit,
    });
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

function* addNewsRecordSaga(action) {
  try {
    yield call(addNewsRecordRequest, action.payload); // post request with title, text and date
    yield put(addNewsRecordSuccess());
    yield put(getNewsListRequest(action.payload)); // forget to add ()
    // просто запускаем процесс получения данных, данных не возвращает
    // console.log('testPayload: ', testPayload);
  } catch (error) {
    console.log('+++++++++++++++++++++', error);
    yield put(addNewsRecordError());
  }
}

export default function* watcherSaga() {
  yield takeLatest('GET_NEWS_REQUEST', getNewsListSaga);
  yield takeLatest('GET_NEWS_RECORD_REQUEST', getNewsRecordSaga);
  yield takeLatest('ADD_NEWS_RECORD_REQUEST', addNewsRecordSaga);
  // TODO: will be used for deleting news
  // yield takeLatest('DELETE_NEWS_RECORD_REQUEST', deleteNewsRecordSaga);
}

// TODO: will be used for deleting news
// function* deleteNewsRecordSaga(action) {
//   try {
//     yield put(deleteNewsRecordRequest(action.payload)); // post request with title, text and date
//     yield put(deleteNewsRecordSuccess());
//     const testPayload = yield put(getNewsListRequest);
//   } catch (error) {
//     yield put(deleteNewsRecordError());
//   }
// }
