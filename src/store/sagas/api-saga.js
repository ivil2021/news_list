import {
  takeLatest, call, put, select,
} from 'redux-saga/effects';

import {
  fetchNewsList, fetchNewsRecord, fetchNewsAdding, fetchNewsDeletion, fetchNewsUpdating,
} from '../apis';
import {
  getNewsSuccess, getNewsError,
  getNewsRecordSuccess, getNewsRecordError,
  addNewsRecordSuccess, addNewsRecordError,
  deleteNewsRecordSuccess, deleteNewsRecordError,
  getNewsRequest, setCurrentPage,
  updateNewsRecordSuccess, updateNewsRecordError,
} from '../actions';

function* getNewsListSaga() {
  try {
    const currentPage = yield select((state) => state.news.currentPage);
    const limit = yield select((state) => state.news.limit);
    const newsAmount = yield select((state) => state.news.newsAmount);

    const payload = yield call(fetchNewsList, {
      page: currentPage,
      limit,
      newsAmount,
    });
    yield put(getNewsSuccess(payload));
  } catch (error) {
    yield put(getNewsError());
  }
}

function* getNewsRecordSaga(action) {
  try {
    const payload = yield call(fetchNewsRecord, action.payload);
    yield put(getNewsRecordSuccess(payload));
  } catch (error) {
    yield put(getNewsRecordError());
  }
}

function* addNewsRecordSaga(action) {
  try {
    yield call(fetchNewsAdding, action.payload);
    yield put(addNewsRecordSuccess());
    yield put(getNewsRequest());
  } catch (error) {
    yield put(addNewsRecordError());
  }
}

function* deleteNewsRecordSaga(action) {
  try {
    // get amount of news on the current page from redux store
    const newsList = yield select((state) => state.news.newsList);
    // get total amount of news from redux store
    const totalPages = yield select((state) => state.news.totalPages);

    // fetch to delete news record to server
    yield call(fetchNewsDeletion, action.payload.id);

    // if it was the last news record on the actual page,
    // we move to the previous page
    if (newsList.length === 1) {
      yield put(setCurrentPage(totalPages - 1));
    }

    // inform that request was successfull (loader should be stopped)
    yield put(deleteNewsRecordSuccess());
    yield put(getNewsRequest()); // request news list from server after delete operation
  } catch (error) {
    // inform that request wasn't successfull (loader should be stopped)
    yield put(deleteNewsRecordError());
  }
}

function* updateNewsRecordSaga(action) {
  try {
    yield call(fetchNewsUpdating, action.payload);
    yield put(updateNewsRecordSuccess());
    yield put(getNewsRequest());
  } catch (error) {
    yield put(updateNewsRecordError());
  }
}

export default function* watcherSaga() {
  yield takeLatest('GET_NEWS_REQUEST', getNewsListSaga);
  yield takeLatest('GET_NEWS_RECORD_REQUEST', getNewsRecordSaga);
  yield takeLatest('ADD_NEWS_RECORD_REQUEST', addNewsRecordSaga);
  yield takeLatest('DELETE_NEWS_RECORD_REQUEST', deleteNewsRecordSaga);
  yield takeLatest('UPDATE_NEWS_RECORD_REQUEST', updateNewsRecordSaga);
}
