export interface Store {
  id: number;
  description?: string | null;
  image: string | null;
  name: string;
  slug: string;
}

export interface StoreRequestCreate {
  description?: string | null;
  image: File | null;
  name: string;
  owner_id: number;
}

export type StoreRequestUpdate = Partial<StoreRequestCreate>;
