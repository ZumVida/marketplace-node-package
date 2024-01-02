import type { AxiosInstance } from 'axios';
import { useBranchService } from './branch';
import { useCategoryService } from './category';
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
         * category
         */
        category: useCategoryService(api),

        /**
         * store
         */
        store: useStoreService(api),
    };
}
