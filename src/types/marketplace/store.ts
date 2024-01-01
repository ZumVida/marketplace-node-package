export interface Store {
    id: number;
    description?: string | null;
    image: string | null;
    name: string;
}

export interface StoreRequestCreate {
    description?: string | null;
    image: File | null;
    name: string;
}

export type StoreRequestUpdate = Partial<StoreRequestCreate>;
