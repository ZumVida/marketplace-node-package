import type { AxiosInstance } from 'axios';
import type {
    PaginatedData,
    PaginationParams,
    Product,
    ProductRequestCreate,
    ProductRequestFilter,
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
                api.post<Product>(adminURL, params, {
                    headers: multipartHeader,
                }),

            /**
             * filter
             * @param params
             */
            filter: (params?: ProductRequestFilter) =>
                api.get<PaginatedData<Product>>(adminURL, { params }),

            /**
             * show
             * @param id
             */
            show: (id: number) => api.get<Product>(`${adminURL}/${id}`),

            /**
             * update
             * @param id
             * @param params
             */
            update: (id: number, params: ProductRequestUpdate) =>
                api.post<Product>(`${adminURL}/${id}`, params, {
                    headers: multipartHeader,
                }),
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
         * show
         * @param id
         */
        show: (id: number) => api.get<Product>(`${baseURL}/${id}`),
    };
}
