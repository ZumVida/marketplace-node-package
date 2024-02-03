import type { AxiosInstance } from 'axios';
import type { PaginatedData } from '@/types';
import type {
  Warehouse,
  WarehouseRequestCreate,
  WarehouseRequestFilter,
  WarehouseRequestUpdate,
} from '@/types/warehouse';

export function useWarehouse(api: AxiosInstance) {
  const baseURL = '/warehouse';

  return {
    /**
     * create
     * @param params
     * @returns
     */
    create: (params: WarehouseRequestCreate) =>
      api.post<Warehouse>(baseURL, params),
    /**
     * filter
     * @param params
     * @returns
     */
    filter: (params?: WarehouseRequestFilter) =>
      api.get<PaginatedData<Warehouse>>(`${baseURL}`, { params }),
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
    show: (id: number) => api.get<Warehouse>(`${baseURL}/${id}`),
    /**
     * update
     * @param id
     * @param params
     * @returns
     */
    update: (id: number, params: WarehouseRequestUpdate) =>
      api.post<Warehouse>(`${baseURL}/${id}`, params),
  };
}
