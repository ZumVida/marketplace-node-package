import type { AxiosInstance } from 'axios';
import type { Branch, BranchRequestFilter, PaginatedData } from '@/types';

/**
 * useBranchService
 * @param api
 */
export function useBranchService(api: AxiosInstance) {
  const baseURL = '/marketplace/branches';

  return {
    /**
     * filter
     * @param params
     */
    filter: (params?: BranchRequestFilter) =>
      api.get<PaginatedData<Branch>>(baseURL, { params }),

    /**
     * show
     * @param id
     */
    show: (id: number) => api.get<Branch>(`${baseURL}/${id}`),
  };
}
