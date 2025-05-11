import axios from 'axios';

export const baseUrl = import.meta.env.VITE_APP_BASE_URL;
export const imgUrl = import.meta.env.VITE_APP_BASE_IMGURL;

export const api = axios.create({
  baseURL: baseUrl,
});

api.interceptors.request.use(
  (request) => {
    request.headers['Content-Type'] = 'application/json';
    // if (getLocalStorage(token)) {
    //   request.headers.Authorization = `Bearer ${getLocalStorage(token)}`;
    // }
    return request;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => Promise.reject(error),
);
