import { takeLatest } from 'redux-saga/effects';

// async function getData() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return response;
// }

function* workerSaga() {
  yield console.log('saga works');
  // try {
  //   const payload = yield call(getData);
  //   yield put({ type: 'DATA_LOADED', payload });
  // } catch (e) {
  //   // put позволяет диспачить некоторые события в стор
  //   yield put({ type: 'API_ERRORED', payload: e });
  // }
}

export default function* watcherSaga() {
  // При action GET_NEWS_REQUEST вызываем workerSaga
  yield takeLatest('GET_NEWS_REQUEST', workerSaga);
}
