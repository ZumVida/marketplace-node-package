import type { AxiosInstance } from 'axios';
import { useBranchService } from './branch';
import { useCategoryService } from './category';
import { useProductService } from './product';
import { useRecipientService } from './recipient';
import { useStoreService } from './store';
import { useOrderService } from '@/services/marketplace/order';

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
