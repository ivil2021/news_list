async function getNewsListRequest({ page }) {
  const PAGES_LIMIT = process.env.REACT_APP_PAGES_LIMIT;

  const URL = `https://62061fb7161670001741bf36.mockapi.io/api/news?page=${page}&limit=${PAGES_LIMIT}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export default getNewsListRequest;
