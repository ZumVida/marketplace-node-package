import type { AxiosInstance } from 'axios';
import { GeoLocation, GeoRequestFilter, PaginatedData } from '@/types';

/**
 * useGeoService
 * @param api
 */
export function useGeoService(api: AxiosInstance) {
    const baseURL = '/geo';

    return {
        locations: {
            /**
             * filter
             * @param params
             */
            filter: (params: GeoRequestFilter) =>
                api.get<PaginatedData<GeoLocation>>(`${baseURL}/locations`, {
                    params,
                }),
        },
    };
}
