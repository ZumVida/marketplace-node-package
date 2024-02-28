import type { AxiosInstance } from 'axios';
import { initApi } from './utils';
import {
  useAppService,
  useGeoService,
  useImageService,
  useMarketplaceService,
  useUserService,
  useWarehouseServices,
} from './services';
import { useBillingService } from './services/billing';

export function setup(_api?: AxiosInstance) {
  let api = _api ?? initApi({ appToken: '', baseURL: 'http://localhost:8000' });

  return {
    app: useAppService(api),
    billing: useBillingService(api),
    geo: useGeoService(api),
    image: useImageService(api),
    marketplace: useMarketplaceService(api),
    user: useUserService(api),
    warehouse: useWarehouseServices(api),
  };
}

export default setup;

// export * from './services';
export * from './types';
export * from './utils';
