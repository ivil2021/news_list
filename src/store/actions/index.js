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

// export function getData() {
//   return { type: 'DATA_REQUESTED' };
// }

// function getNewsRecordRequest(payload) {
//   {type:... payload} // =====> payload ===  id записи на которую кликнули
// }
