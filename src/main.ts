import type { AxiosInstance } from 'axios';
import { initApi } from './utils';
import {
  useAppService,
  useGeoService,
  useImageService,
  useMarketplaceService,
  useUserService,
} from './services';

/**
 * init
 * @param _api
 */
export default function (_api?: AxiosInstance) {
  let api = _api ?? initApi({ appToken: '', baseURL: 'http://localhost:8000' });

  return {
    app: useAppService(api),
    geo: useGeoService(api),
    image: useImageService(api),
    marketplace: useMarketplaceService(api),
    user: useUserService(api),
  };
}

export * from './services';
export * from './types';
export * from './utils';
