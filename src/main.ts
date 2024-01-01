import type { AxiosInstance } from 'axios';
import { initApi } from './utils';
import {
    useGeoService,
    useMarketplaceService,
    useUserService,
} from './services';

/**
 * init
 * @param _api
 */
export default function (_api?: AxiosInstance) {
    let api = _api ?? initApi();

    return {
        marketplace: useMarketplaceService(api),
        geo: useGeoService(api),
        user: useUserService(api),
    };
}

export * from './services';
export * from './types';
export * from './utils';
