const apiUrl = 'https://platzi-music-api.now.sh';

const api = {};

api.getSearch = (q) => {
  const type = 'track';
  return fetch(`${apiUrl}/search?q=${q}&type=${type}`)
    .then((res) => res.json())
    .then((data) => data);
};

api.getById = (id) => fetch(`${apiUrl}/tracks/${id}`)
  .then((res) => res.json())
  .then((data) => data);

export default api;
