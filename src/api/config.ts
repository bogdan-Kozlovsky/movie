import axios from 'axios';

// require('dotenv').config();

export const instance = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '75df7ca909e962c1330641811fad3003',
    // api_key: ' 60020cab8bf79c5d47fb63b68a288c6c',
    // language: 'en-US',

    // api_key: process.env.REACT_APP_API_KEY,
  },
});