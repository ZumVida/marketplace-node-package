import type { PaginatedData } from '@/types';
import type {
  Item,
  ItemRequestCreate,
  ItemRequestFilter,
  ItemRequestUpdate,
} from '@/types/warehouse';
import type { AxiosInstance } from 'axios';

export function useItemService(api: AxiosInstance) {
  const baseURL = '/warehouse/items';

  return {
    /**
     * create
     * @param params
     * @returns
     */
    create: (params: ItemRequestCreate) => api.post<Item>(baseURL, params),
    /**
     * filter
     * @param params
     * @returns
     */
    filter: (params?: ItemRequestFilter) =>
      api.get<PaginatedData<Item>>(`${baseURL}`, { params }),
    /**
     * remove
     * @param id
     * @returns
     */
    remove: (id: number) => api.delete(`${baseURL}/${id}`),
    /**
     * show
     * @param id
     * @returns
     */
    show: (id: number) => api.get<Item>(`${baseURL}/${id}`),
    /**
     * update
     * @param id
     * @param params
     * @returns
     */
    update: (id: number, params: ItemRequestUpdate) =>
      api.post<Item>(`${baseURL}/${id}`, params),
  };
}
