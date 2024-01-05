import axios, { type AxiosRequestHeaders } from 'axios';
import { defaultTokenHandler, TokenHandler } from '@/utils/tokenHandler';

/**
 * initApi
 */
export function initApi(params?: {
  tokenHandler: TokenHandler;
  baseURL?: string;
}) {
  let baseURL: string = 'https://marketplace.zumvida.com';
  let tokenHandler: TokenHandler = defaultTokenHandler();

  if (params) {
    if (params.baseURL) baseURL = params.baseURL;
    if (params.tokenHandler) tokenHandler = params.tokenHandler;
  }
  const api = axios.create({
    baseURL,
    withCredentials: true,
  });

  // Setup interceptors
  api.interceptors.request.use((_request) => {
    const authToken = tokenHandler.get();

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
