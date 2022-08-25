import { ACCESS_TOKEN_KEY, API_BASE_URL, API_TIMEOUT } from '@constants/index';
import axios, { AxiosRequestConfig } from 'axios';
import { getLocalStorage } from './storage.util';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const createApi = (path: string) => {
  const api = axios.create({
    baseURL: `${API_BASE_URL}/${path}`,
    timeout: API_TIMEOUT,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      /* eslint-disable no-param-reassign */
      config.headers = config.headers ?? {};

      const token = getLocalStorage(ACCESS_TOKEN_KEY);
      if (token) config.headers.Authorization = `Bearer ${token}`;

      return config;
    },
    (error) => Promise.reject(error)
  );
  return api;
};

export default createApi;
