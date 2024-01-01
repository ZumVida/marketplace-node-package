import { GeoLocation } from '../geo';
import { PaginationParams } from '../pagination';

export interface Branch {
    id: number;
    description?: string | null;
    image: string | null;
    location: GeoLocation;
    name: string;
    slug: string;
}

export interface BranchRequestFilter extends PaginationParams {
    location_id?: number;
    search?: string;
    store_id?: number;
}
