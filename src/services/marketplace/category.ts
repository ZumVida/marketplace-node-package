import type { AxiosInstance } from 'axios';
import type {
    Category,
    CategoryRequestCreate,
    CategoryRequestFilter,
    CategoryRequestUpdate,
    PaginatedData,
} from '@/types';
import { multipartHeader } from '@/utils';

/**
 * useCategoryService
 * @param api
 */
export function useCategoryService(api: AxiosInstance) {
    const baseURL = '/marketplace/categories';

    return {
        /**
         * create
         * @param params
         */
        create: (params: CategoryRequestCreate) =>
            api.post<Category>(baseURL, params, {
                headers: multipartHeader,
            }),

        /**
         * filter
         * @param params
         */
        filter: (params?: CategoryRequestFilter) =>
            api.get<PaginatedData<Category>>(baseURL, { params }),

        /**
         * show
         * @param id
         */
        show: (id: number) => api.get<Category>(`${baseURL}/${id}`),

        /**
         * update
         * @param id
         * @param params
         */
        update: (id: number, params: CategoryRequestUpdate) =>
            api.post<Category>(`${baseURL}/${id}`, params, {
                headers: multipartHeader,
            }),
    };
}
