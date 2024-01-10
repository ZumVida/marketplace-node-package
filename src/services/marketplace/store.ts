import type { AxiosInstance } from 'axios';
import { multipartHeader } from '@/utils';
import type {
  PaginatedData,
  PaginationParams,
  Product,
  Store,
  StoreRequestCreate,
  StoreRequestFilter,
  StoreRequestUpdate,
} from '@/types';

/**
 * useStoreService
 * @param api
 */
export function useStoreService(api: AxiosInstance) {
  const baseURL = '/marketplace/stores';
  const adminBaseURL = `${baseURL}/admin`;

  return {
    admin: {
      /**
       * adminCreate
       * @param params
       */
      create: (params?: StoreRequestCreate) =>
        api.post<Store>(adminBaseURL, params, {
          headers: multipartHeader,
        }),

      /**
       * adminList
       * @param params
       */
      filter: (params?: StoreRequestFilter) =>
        api.get<PaginatedData<Store>>(adminBaseURL, { params }),

      /**
       * mine
       * @param params
       */
      mine: (params?: StoreRequestFilter) =>
        api.get<PaginatedData<Store>>(`${adminBaseURL}/mine`, { params }),

      /**
       * adminShow
       * @param id
       */
      show: (id: number) => api.get<Store>(`${adminBaseURL}/${id}`),

      /**
       * adminUpdate
       * @param id
       * @param params
       */
      update: (id: number, params: StoreRequestUpdate) =>
        api.post<Store>(`${adminBaseURL}/${id}`, params, {
          headers: multipartHeader,
        }),
    },

    /**
     * list
     * @param params
     */
    list: (params?: PaginationParams) =>
      api.get<PaginatedData<Store>>(baseURL, { params }),

    /**
     * listProducts
     * @param id
     */
    listProducts: (id: number) =>
      api.get<PaginatedData<Product>>(`${baseURL}/${id}/products`),

    /**
     * show
     * @param id
     */
    show: (id: number) => api.get<Store>(`${baseURL}/${id}`),
  };
}
