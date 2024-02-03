import type { AxiosInstance } from 'axios';
import { useItemService } from './item';
import { useSection } from './section';
import { useWarehouse } from './warehouse';

export function useWarehouseServices(api: AxiosInstance) {
  return {
    item: useItemService(api),
    section: useSection(api),
    warehouse: useWarehouse(api),
  };
}
