import type { PaginationParams } from '../pagination';

export interface Store {
  id: number;
  description?: string | null;
  image: string | null;
  name: string;
  slug: string;
  type: StoreType;
}

export interface StoreRequestCreate {
  description?: string | null;
  image?: File | null;
  image_url?: string;
  name: string;
  owner_id: number;
  type?: StoreType;
}

export interface StoreRequestFilter extends PaginationParams {
  name?: string;
  owner_id?: number;
  type?: StoreType;
  verified?: boolean;
}

export type StoreRequestUpdate = Partial<StoreRequestCreate>;

export enum StoreType {
  RESTAURANT = 'restaurant',
  STORE = 'store',
}
