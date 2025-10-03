import axios from 'axios';

const API_BASE = 'https://pixabay.com/api/';
const API_KEY = '52591555-089c8d48efe1c098578f49548';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
  };

  return axios.get(API_BASE, { params }).then(response => {
    return response.data;
  });
}
