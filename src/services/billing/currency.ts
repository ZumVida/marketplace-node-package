import type { AxiosInstance } from 'axios';
import type {
  Currency,
  CurrencyRequestCreate,
  CurrencyRequestUpdate,
} from '@/types/billing';
import { generateCrudWithoutPaginate } from '@/utils';

/**
 * useCurrency
 * @param api
 * @returns
 */
export function useCurrency(api: AxiosInstance) {
  const baseURL = '/billing/currency';

  const crud = generateCrudWithoutPaginate<
    Currency,
    CurrencyRequestCreate,
    CurrencyRequestUpdate
  >({
    api,
    baseURL,
  });
  return {
    ...crud,
  };
}
