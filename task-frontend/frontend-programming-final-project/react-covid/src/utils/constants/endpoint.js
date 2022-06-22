// Membuat variable API_KEY
const API_KEY = process.env.REACT_APP_API_KEY;

// Membuat variable URL API: BASE_URL
const BASE_URL = "covid19.mathdro.id/api";
const MIDDLE_URL = "covid19.mathdro.id/api/countries/indonesia";

// Membuat Variable Endpoints (object)
const ENDPOINTS = {
  GLOBAL: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
  INDONESIA: `${MIDDLE_URL}/movie/now_playing?api_key=${API_KEY}`,
};

export default ENDPOINTS;
