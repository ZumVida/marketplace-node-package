import type { PaginationParams } from '../pagination';

export interface Store {
  id: number;
  description?: string | null;
  image: string | null;
  name: string;
  slug: string;
}

export interface StoreRequestCreate {
  description?: string | null;
  image?: File | null;
  image_url?: string;
  name: string;
  owner_id: number;
}

export interface StoreRequestFilter extends PaginationParams {
  name?: string;
  owner_id?: number;
  verified?: boolean;
}

export type StoreRequestUpdate = Partial<StoreRequestCreate>;
