import type { AxiosInstance } from 'axios';
import type {
  PaginatedData,
  PaginationParams,
  Product,
  ProductFull,
  ProductRequestCreate,
  ProductRequestFilter,
  ProductRequestSimilar,
  ProductRequestUpdate,
} from '@/types';
import { multipartHeader } from '@/utils';

/**
 * useProductService
 * @param api
 */
export function useProductService(api: AxiosInstance) {
  const baseURL = '/marketplace/products';
  const adminURL = `${baseURL}/admin`;

  return {
    admin: {
      /**
       * create
       * @param params
       */
      create: (params: ProductRequestCreate) =>
        api.post<ProductFull>(adminURL, params, {
          headers: multipartHeader,
        }),

      /**
       * filter
       * @param params
       */
      filter: (params?: ProductRequestFilter) =>
        api.get<PaginatedData<ProductFull>>(adminURL, { params }),

      /**
       * show
       * @param id
       */
      show: (id: number) => api.get<ProductFull>(`${adminURL}/${id}`),

      /**
       * update
       * @param id
       * @param params
       */
      update: (id: number, params: ProductRequestUpdate) =>
        api.post<ProductFull>(`${adminURL}/${id}`, params, {
          headers: multipartHeader,
        }),

      /**
       * remove
       * @param id
       * @param params
       */
      remove: (id: number) => api.delete<ProductFull>(`${adminURL}/${id}`),
    },

    /**
     * filter
     * @param params
     */
    filter: (params?: ProductRequestFilter) =>
      api.get<PaginatedData<Product>>(`${baseURL}/filter`, { params }),

    /**
     * list
     * @param params
     */
    list: (params?: PaginationParams) =>
      api.get<PaginatedData<Product>>(baseURL, { params }),
    /**
     * similar
     * @param params
     * @returns
     */
    similar: (params?: ProductRequestSimilar) =>
      api.get<PaginatedData<Product>>(`${baseURL}/similar`, { params }),
    /**
     * show
     * @param id
     */
    show: (id: number) => api.get<Product>(`${baseURL}/${id}`),
  };
}
