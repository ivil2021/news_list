import { takeLatest, call, put } from 'redux-saga/effects';

import {
  getNewsListRequest,
  getNewsRecordRequest,
  addNewsRecordRequest,
  deleteNewsRecordRequest,
} from '../apis';
import {
  getNewsSuccess,
  getNewsError,
  getNewsRecordSuccess,
  getNewsRecordError,
  addNewsRecordSuccess,
  addNewsRecordError,
  deleteNewsRecordSuccess,
  deleteNewsRecordError,
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
  } catch (error) {
    // TODO: delete console after fixing error
    // console.log('+++++++++++++++++++++', error);
    yield put(addNewsRecordError());
  }
}

function* deleteNewsRecordSaga(action) {
  // TODO: delete console after finishing delete action
  // console.log('action.payload from deleteNewsRecordSaga: ', action.payload);
  try {
    yield call(deleteNewsRecordRequest, action.payload.id);
    yield put(deleteNewsRecordSuccess());
    // yield call(getNewsListRequest());
    yield put(
      getNewsListRequest({
        page: action.payload.page,
        limit: action.payload.limit,
      }),
    );
  } catch (error) {
    // TODO: delete console after fixing error
    console.log('=======================', error);
    yield put(deleteNewsRecordError());
  }
}

export default function* watcherSaga() {
  yield takeLatest('GET_NEWS_REQUEST', getNewsListSaga);
  yield takeLatest('GET_NEWS_RECORD_REQUEST', getNewsRecordSaga);
  yield takeLatest('ADD_NEWS_RECORD_REQUEST', addNewsRecordSaga);
  yield takeLatest('DELETE_NEWS_RECORD_REQUEST', deleteNewsRecordSaga);
}
