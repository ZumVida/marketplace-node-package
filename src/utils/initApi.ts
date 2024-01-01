import axios, { type AxiosRequestHeaders } from 'axios';

/**
 * initApi
 * @param baseURL
 */
function initApi(baseURL: string) {
  const api = axios.create({
    baseURL,
    withCredentials: true,
  });

  // Setup interceptors
  api.interceptors.request.use((_request) => {
    const authToken = 'someAuthToken'; // AuthToken

    /* Append content type header if its not present */
    if (!(_request.headers as AxiosRequestHeaders)['Content-Type']) {
      (_request.headers as AxiosRequestHeaders)['Content-Type'] =
        'application/json';
    }

    if (authToken && authToken.length > 0) {
      /* Check if authorization is set */
      if (!(_request.headers as AxiosRequestHeaders)['Authorization']) {
        /* Check if the user is authenticated to send Bearer token */
        (_request.headers as AxiosRequestHeaders).Authorization =
          'Bearer ' + authToken;
      }
    }
    return _request;
  });

  return api;
}
