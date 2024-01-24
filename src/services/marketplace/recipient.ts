import type { AxiosInstance } from 'axios';
import type {
  Recipient,
  RecipientRequestCreate,
  RecipientRequestUpdate,
} from '@/types';

/**
 * useRecipientService
 * @param api
 */
export function useRecipientService(api: AxiosInstance) {
  const baseURL = '/marketplace/recipients';

  return {
    /**
     * create
     * @param params
     */
    create: (params: RecipientRequestCreate) =>
      api.post<Recipient>(baseURL, params),

    /**
     * mine
     * @param params
     */
    mine: () => api.get<Recipient[]>(baseURL),

    /**
     * show
     * @param id
     */
    show: (id: number) => api.get<Recipient>(`${baseURL}/${id}`),

    /**
     * update
     * @param id
     * @param params
     */
    update: (id: number, params: RecipientRequestUpdate) =>
      api.post<Recipient>(`${baseURL}/${id}`, params),
  };
}
