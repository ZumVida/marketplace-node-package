import type { AxiosInstance } from 'axios';
import type { PaginatedData, PaginationParams } from '@/types';

const multipartHeader = {
    'Content-Type': 'multipart/form-data',
};

/**
 * generateCrud
 * @param param GenerateCrudParams
 * @returns
 */
function generateCrud<T, C = Omit<T, 'id'>, U = Partial<C>>({
    api,
    baseURL,
    multipart,
}: GenerateCrudParams) {
    const headers = multipart
        ? {
              'Content-Type': 'multipart/form-data',
          }
        : undefined;

    return {
        list: (params?: PaginationParams) =>
            api.get<PaginatedData<T>>(baseURL, { params }),
        show: (id: number | string) => api.get<T>(`${baseURL}/${id}`),
        create: (params: C) => api.post<T>(`${baseURL}`, params, { headers }),
        update: (id: number | string, params: U) =>
            multipart
                ? api.post<T>(`${baseURL}/${id}`, params, { headers })
                : api.patch<T>(`${baseURL}/${id}`, params, { headers }),
        remove: (id: number) => api.delete(`${baseURL}/${id}`),
    };
}

/**
 * generateCrudWithoutPaginate
 * @param param GenerateCrudParams
 * @returns
 */
function generateCrudWithoutPaginate<T, C = Omit<T, 'id'>, U = Partial<C>>({
    api,
    baseURL,
    multipart,
}: GenerateCrudParams) {
    const headers = multipart ? multipartHeader : undefined;
    return {
        list: () => api.get<T[]>(baseURL),
        show: (id: number) => api.get<T>(`${baseURL}/${id}`),
        create: (params: C) => api.post<T>(`${baseURL}`, params, { headers }),
        update: (id: number, params: U) =>
            multipart
                ? api.post<T>(`${baseURL}/${id}`, params, { headers })
                : api.patch<T>(`${baseURL}/${id}`, params, { headers }),
        remove: (id: number) => api.delete(`${baseURL}/${id}`),
    };
}

interface GenerateCrudParams {
    api: AxiosInstance;
    baseURL: string;
    multipart?: boolean;
}

export { generateCrud, generateCrudWithoutPaginate, multipartHeader };
