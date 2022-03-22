async function getNewsListRequest({ page, limit }) {
  const URL = `https://62061fb7161670001741bf36.mockapi.io/api/news?page=${page}&limit=${limit}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

async function getNewsRecordRequest(id) {
  const URL = `https://62061fb7161670001741bf36.mockapi.io/api/news/${id}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

async function addNewsRecordRequest(payload) {
  const URL = 'https://62061fb7161670001741bf36.mockapi.io/api/news';
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

// --- DELETE NEWS RECORD BY ID --- //
async function deleteNewsRecordRequest(id) {
  const URL = `https://62061fb7161670001741bf36.mockapi.io/api/news/${id}`;
  await fetch(URL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
}
// --- DELETE NEWS RECORD BY ID --- //

export {
  getNewsListRequest, getNewsRecordRequest, addNewsRecordRequest, deleteNewsRecordRequest,
};
