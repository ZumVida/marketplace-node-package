import { PaginationParams } from '../pagination';

export interface Category {
  id: number;
  image: string | null;
  name: string;
  slug: string;
  summary?: unknown;
}

export interface CategoryRequestCreate {
  image: File | null;
  name: string;
  parent_id: number | null;
}

export interface CategoryRequestFilter extends PaginationParams {
  search?: string;
}

export type CategoryRequestUpdate = Partial<CategoryRequestCreate>;
