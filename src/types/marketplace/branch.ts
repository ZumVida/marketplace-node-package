import type { GeoAddress, GeoCoords, GeoLocation } from '../geo';
import type { PaginationParams } from '../pagination';
import type { Store } from './store';

export interface Branch {
  id: number;
  address?: string | null;
  address_details?: GeoAddress | null;
  coords?: GeoCoords | null;
  description?: string | null;
  image: string | null;
  location?: GeoLocation;
  name: string;
  slug: string;
  store?: Store;
  summary?: BranchSummary;
  verified_at?: string | null;
}

export interface BranchSummary {
  inventory?: number;
  products?: number;
  sales?: number;
  views?: number;
}

export interface BranchRequestFilter extends PaginationParams {
  location_id?: number;
  search?: string;
  store_id?: number;
  image_url?: string;
}
