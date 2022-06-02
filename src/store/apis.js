/* eslint-disable no-undef */
// async function fetchNewsList({ page, limit }) {
//   const URL = `https://62061fb7161670001741bf36.mockapi.io/api/news?page=${page}&limit=${limit}`;
//   const response = await fetch(URL);
//   const data = await response.json();
//   return data;
// }
async function fetchNewsList({ page, limit }) {
  const URL = `http://localhost:3000/news/find-by-title?page=${page}&limit=${limit}`;
  const response = await fetch(URL);
  const data = await response.json();
  // console.log(data);
  return data;
}
// ------------------------------------------------------------------------------------------

// async function fetchNewsRecord(id) {
//   const URL = `https://62061fb7161670001741bf36.mockapi.io/api/news/${id}`;
//   const response = await fetch(URL);
//   const data = await response.json();
//   return data;
// }
async function fetchNewsRecord(id) {
  const URL = `http://localhost:3000/news/${id}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
// ------------------------------------------------------------------------------------------
async function fetchNewsAdding(payload) {
  // const URL = 'https://62061fb7161670001741bf36.mockapi.io/api/news';
  const URL = 'http://localhost:3000/news';
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': 'origin-list',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data;
}
// ------------------------------------------------------------------------------------------
// --- DELETE NEWS RECORD BY ID --- //
async function fetchNewsDeletion(id) {
  // const URL = `https://62061fb7161670001741bf36.mockapi.io/api/news/${id}`;
  const URL = `http://localhost:3000/news/${id}`;
  await fetch(URL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
}
// --- DELETE NEWS RECORD BY ID --- //

export {
  fetchNewsList, fetchNewsRecord, fetchNewsAdding, fetchNewsDeletion,
};
