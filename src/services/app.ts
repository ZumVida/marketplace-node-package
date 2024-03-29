import type { AxiosInstance } from 'axios';
import type {
  Application,
  ApplicationWithToken,
  ApplicationRequestCreate,
  ApplicationRequestFilter,
  PaginatedData,
} from '@/types';

export function useAppService(api: AxiosInstance) {
  const baseURL = '/app';

  return {
    /**
     * current
     * @returns
     */
    current: () => api.get<Application>(baseURL),

    /**
     * filter
     * @param params
     * @returns
     */
    filter: (params: ApplicationRequestFilter) =>
      api.get<PaginatedData<Application>>(`${baseURL}/filter`, { params }),

    /**
     * create
     * @param params
     * @returns
     */
    create: (params: ApplicationRequestCreate) =>
      api.post<ApplicationWithToken>(baseURL, params),

    /**
     * show
     * @param id
     * @returns
     */
    show: (id: number) => api.get<Application>(`${baseURL}/${id}`),

    /**
     * update
     * @param id
     * @param params
     * @returns
     */
    update: (id: number, params: ApplicationRequestCreate) =>
      api.post<Application>(`${baseURL}/${id}`, params),
  };
}
