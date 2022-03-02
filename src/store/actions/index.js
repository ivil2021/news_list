import actionTypes from '../actionTypes';

export function getNewsRequest() {
  return { type: actionTypes.GET_NEWS_REQUEST };
}

export function getNewsSuccess(payload) {
  return { type: actionTypes.GET_NEWS_SUCCESS, payload };
}

export function getNewsError() {
  return { type: actionTypes.GET_NEWS_ERROR };
}
