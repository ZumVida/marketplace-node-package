import type { GeoAddress, GeoCoords } from '../geo';

export interface Warehouse {
  id: number;
  address_details?: GeoAddress | null;
  coords?: GeoCoords | null;
  description?: string | null;
  image: string;
  name: string;
  summary?: WarehouseSummary | null;
}

export interface WarehouseRequestCreate {
  address_details?: GeoAddress | null;
  coords?: GeoCoords | null;
  description?: string;
  image?: File | null;
  image_url?: string | null;
  name: string;
  storable_id?: number | null;
  storable_type?: string | null;
}

export interface WarehouseRequestFilter {
  paginate?: number;
  search?: string;
  storable_id?: number | null;
  storable_type?: string | null;
}

export type WarehouseRequestUpdate = Partial<
  Omit<WarehouseRequestCreate, 'storable_id' | 'storable_type'>
>;

export type WarehouseSummary = unknown;
