/* eslint-disable no-undef */
// --- GETTING NEWS LIST --- //
async function fetchNewsList({ page, limit }) {
  const URL = `http://localhost:3000/news/find-by-title?page=${page}&limit=${limit}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
// --- GETTING NEWS LIST --- //

// --- GETTING NEWS RECORD --- //
async function fetchNewsRecord(id) {
  // const URL = `https://62061fb7161670001741bf36.mockapi.io/api/news/${id}`;
  const URL = `http://localhost:3000/news/${id}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
// --- GETTING NEWS RECORD --- //

// --- ADDING NEWS --- //
async function fetchNewsAdding(payload) {
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
// --- ADDING NEWS --- //

// --- DELETE NEWS RECORD BY ID --- //
async function fetchNewsDeletion(id) {
  const URL = `http://localhost:3000/news/${id}`;
  await fetch(URL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
}
// --- DELETE NEWS RECORD BY ID --- //

// --- UPDATING NEWS --- //
async function fetchNewsUpdating(payload) {
  const URL = `http://localhost:3000/news/${payload.id}`;
  const response = await fetch(URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': 'origin-list',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data;
}
// --- UPDATING NEWS --- //

export {
  fetchNewsList,
  fetchNewsRecord,
  fetchNewsAdding,
  fetchNewsDeletion,
  fetchNewsUpdating,
};

// fetchNewsUpdating
