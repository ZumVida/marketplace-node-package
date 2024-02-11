import type { AxiosInstance } from 'axios';
import { useCurrency } from './currency';

/**
 * useBillingService
 * @param api
 */
export function useBillingService(api: AxiosInstance) {
  return {
    currency: useCurrency(api),
  };
}
