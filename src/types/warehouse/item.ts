import type { Product as MarketplaceProduct } from '../marketplace';
import type { PaginationParams } from '../pagination';

export interface Item {
  id: number;
  attributes?: ItemAttribute[] | null;
  description?: string | null;
  image: string;
  name: string;
  stock: number;
  storable?: MarketplaceProduct;
  summary?: ItemSummary;
}

export interface ItemRequestCreate {
  attributes?: ItemAttribute[] | null;
  description?: string | null;
  image?: File;
  image_url?: string;
  name: string;
  storable_id?: number | null;
  storable_type?: string | null;
}

export interface ItemRequestFilter extends PaginationParams {
  search?: string;
  storable_id?: number | null;
  storable_type?: string | null;
}

export type ItemRequestUpdate = Partial<ItemRequestCreate>;

export type ItemAttribute = unknown;
export type ItemSummary = unknown;
