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

export interface SectionRequestFilter {
  parent_id?: number;
  search?: string;
  warehouse_id: number;
  paginate?: number;
}

export type SectionRequestUpdate = Omit<SectionRequestCreate, 'warehouse_id'>;

export type SectionSummary = unknown;
