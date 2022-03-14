import actionTypes from '../actionTypes';

// TODO: need to find out should I use limit here
// or it will be better to take it fron .env file
// page, limit
export function getNewsRequest(page) {
  return { type: actionTypes.GET_NEWS_REQUEST, payload: { page } };
}

export function getNewsSuccess(payload) {
  return { type: actionTypes.GET_NEWS_SUCCESS, payload };
}

export function getNewsError() {
  return { type: actionTypes.GET_NEWS_ERROR };
}

export function getData() {
  return { type: 'DATA_REQUESTED' };
}
