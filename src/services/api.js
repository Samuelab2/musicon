const apiUrl = 'https://platzi-music-api.now.sh';

const getSearch = (q) => {
  const type = 'track';
  return fetch(`${apiUrl}/search?q=${q}&type=${type}`)
    .then((res) => res.json())
    .then((data) => data.tracks);
};

export default getSearch;
