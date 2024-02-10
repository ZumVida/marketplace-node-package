import type { PaginationParams } from '../pagination';

export interface WarehouseSection {
  id: number;
  description?: string | null;
  image: string | null;
  name: string;
  summary?: SectionSummary | null;
}

export interface SectionRequestCreate {
  description?: string | null;
  image?: File | null;
  name?: string;
  parent_id?: number;
  warehouse_id: number;
}

export interface SectionRequestFilter extends PaginationParams {
  parent_id?: number;
  search?: string;
  warehouse_id: number;
}

export type SectionRequestUpdate = Omit<SectionRequestCreate, 'warehouse_id'>;

export type SectionSummary = unknown;
