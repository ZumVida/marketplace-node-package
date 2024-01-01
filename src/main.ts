import type { AxiosInstance } from 'axios';
import { initApi } from './utils';
import { useUserService } from './services';

/**
 * init
 * @param _api
 */
function init(_api?: AxiosInstance) {
    let api = _api ?? initApi();

    return {
        user: useUserService(api),
    };
}

export default init;

export * from './services';
export * from './types';
export * from './utils';
