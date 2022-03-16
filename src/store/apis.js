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

export { getNewsListRequest, getNewsRecordRequest };
