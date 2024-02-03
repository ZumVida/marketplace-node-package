import type { AxiosInstance } from 'axios';
import { useSection } from './section';
import { useWarehouse } from './warehouse';

export function useWarehouseServices(api: AxiosInstance) {
  return {
    section: useSection(api),
    warehouse: useWarehouse(api),
  };
}
