import type { AxiosInstance } from 'axios';
import { useStoreService } from './store';

export function useMarketplaceService(api: AxiosInstance) {
    return {
        store: useStoreService(api),
    };
}
