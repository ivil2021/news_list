import actionTypes from '../actionTypes';

export function getNewsRequest(payload) {
  // payload = { page: число, равное текущей странице,
  //             limit: число, равное лимиту записей на таблице }
  return { type: actionTypes.GET_NEWS_REQUEST, payload };
}

export function getNewsSuccess(payload) {
  return { type: actionTypes.GET_NEWS_SUCCESS, payload };
}

export function getNewsError() {
  return { type: actionTypes.GET_NEWS_ERROR };
}

export function getNewsRecordRequest(payload) {
  return { type: actionTypes.GET_NEWS_RECORD_REQUEST, payload };
}

export function getNewsRecordSuccess(payload) {
  return { type: actionTypes.GET_NEWS_RECORD_SUCCESS, payload };
}

export function getNewsRecordError() {
  return { type: actionTypes.GET_NEWS_RECORD_ERROR };
}
