import actionTypes from '../actionTypes';

// --- GET NEWS LIST --- //
export function getNewsRequest() {
  return { type: actionTypes.GET_NEWS_REQUEST };
}

export function getNewsSuccess(payload) {
  return { type: actionTypes.GET_NEWS_SUCCESS, payload };
}

export function getNewsError() {
  return { type: actionTypes.GET_NEWS_ERROR };
}
// --- GET NEWS LIST --- //

// --- GET NEWS RECORD BY ID --- //
export function getNewsRecordRequest(payload) {
  return { type: actionTypes.GET_NEWS_RECORD_REQUEST, payload };
}

export function getNewsRecordSuccess(payload) {
  return { type: actionTypes.GET_NEWS_RECORD_SUCCESS, payload };
}

export function getNewsRecordError() {
  return { type: actionTypes.GET_NEWS_RECORD_ERROR };
}
// --- GET NEWS RECORD BY ID --- //

// --- ADD NEWS FROM MODAL WINDOW --- //
export function addNewsRecordRequest(payload) {
  return { type: actionTypes.ADD_NEWS_RECORD_REQUEST, payload };
}

export function addNewsRecordSuccess(payload) {
  return { type: actionTypes.ADD_NEWS_RECORD_SUCCESS, payload };
}

export function addNewsRecordError() {
  return { type: actionTypes.ADD_NEWS_RECORD_ERROR };
}
// --- ADD NEWS FROM MODAL WINDOW --- //

// --- DELETE NEWS RECORD BY ID --- //
export function deleteNewsRecordRequest(payload) {
  return { type: actionTypes.DELETE_NEWS_RECORD_REQUEST, payload };
}

export function deleteNewsRecordSuccess(payload) {
  return { type: actionTypes.DELETE_NEWS_RECORD_SUCCESS, payload };
}

export function deleteNewsRecordError() {
  return { type: actionTypes.DELETE_NEWS_RECORD_ERROR };
}
// --- DELETE NEWS RECORD BY ID --- //

export function setCurrentPage(payload) {
  return { type: actionTypes.SET_CURRENT_PAGE, payload };
}

export function deleteSelectedNews() {
  return { type: actionTypes.DELETE_SELECTED_NEWS };
}
