import type { AxiosInstance } from 'axios';
import type {
  Image,
  ImageRequestCreate,
  ImageRequestFilter,
  ImageRequestUpdate,
  PaginatedData,
} from '@/types';

export function useImageService(api: AxiosInstance) {
  const baseURL = '/images';

  return {
    /**
     * filter
     * @param params
     * @returns
     */
    filter: (params: ImageRequestFilter) =>
      api.get<PaginatedData<Image>>(`${baseURL}`, { params }),

    /**
     * create
     * @param params
     * @returns
     */
    create: (params: ImageRequestCreate) => api.post<Image>(baseURL, params),

    /**
     * show
     * @param id
     * @returns
     */
    show: (id: number) => api.get<Image>(`${baseURL}/${id}`),

    /**
     * remove
     * @param id
     * @returns
     */
    remove: (id: number) => api.delete(`${baseURL}/${id}`),
    /**
     * update
     * @param id
     * @param params
     * @returns
     */
    update: (id: number, params: ImageRequestUpdate) =>
      api.post<Image>(`${baseURL}/${id}`, params),
  };
}
