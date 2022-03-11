async function getNewsListRequest() {
  const URL = 'https://62061fb7161670001741bf36.mockapi.io/api/news?page=1&limit=5';
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export default getNewsListRequest;
