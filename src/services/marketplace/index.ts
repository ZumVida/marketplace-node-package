import type { AxiosInstance } from 'axios';
import { useBranchService } from './branch';
import { useStoreService } from './store';

/**
 * useMarketplaceService
 * @param api
 */
export function useMarketplaceService(api: AxiosInstance) {
    return {
        /**
         * branch
         */
        branch: useBranchService(api),

        /**
         * store
         */
        store: useStoreService(api),
    };
}
