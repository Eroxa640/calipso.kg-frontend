import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_CALIPSO_KG
});

export default instance;