import type { AxiosInstance } from 'axios';
import { useBranchService } from './branch';
import { useCategoryService } from './category';
import { useOrderService } from './order';
import { useProductService } from './product';
import { useRecipientService } from './recipient';
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
     * order
     */
    order: useOrderService(api),

    /**
     * product
     */
    product: useProductService(api),

    /**
     * recipient
     */
    recipient: useRecipientService(api),

    /**
     * store
     */
    store: useStoreService(api),
  };
}
