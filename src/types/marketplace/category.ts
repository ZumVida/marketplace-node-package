import { PaginationParams } from '../pagination';

export interface Category {
  id: number;
  image: string | null;
  name: string;
  parent_id: number;
  slug: string;
  summary?: unknown;
}

export interface CategoryRequestCreate {
  image?: File | null;
  image_url?: string;
  name: string;
  parent_id: number | null;
}

export interface CategoryRequestFilter extends PaginationParams {
  search?: string;
}

export type CategoryRequestUpdate = Partial<CategoryRequestCreate>;
