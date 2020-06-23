import axios from 'axios';
import { responseOnSuccess, responseOnFailed } from './responseInterceptor';
import { requestOnFailed, onRequest } from './requestInterceptor';

const fetchAPI = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

fetchAPI.interceptors.request.use(onRequest, requestOnFailed);
fetchAPI.interceptors.response.use(responseOnSuccess, responseOnFailed);

export default fetchAPI;
