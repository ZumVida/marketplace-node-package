import type { AxiosInstance } from 'axios';
import type { PaginatedData } from '@/types';
import type {
  WarehouseSection as Section,
  SectionRequestCreate,
  SectionRequestFilter,
  SectionRequestUpdate,
} from '@/types/warehouse';

export function useSection(api: AxiosInstance) {
  const baseURL = '/warehouse/sections';

  return {
    /**
     * create
     * @param params
     * @returns
     */
    create: (params: SectionRequestCreate) =>
      api.post<Section>(baseURL, params),
    /**
     * filter
     * @param params
     * @returns
     */
    filter: (params?: SectionRequestFilter) =>
      api.get<PaginatedData<Section>>(`${baseURL}`, { params }),
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
    show: (id: number) => api.get<Section>(`${baseURL}/${id}`),
    /**
     * update
     * @param id
     * @param params
     * @returns
     */
    update: (id: number, params: SectionRequestUpdate) =>
      api.post<Section>(`${baseURL}/${id}`, params),
  };
}
