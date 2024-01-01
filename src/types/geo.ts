import { PaginationParams } from './pagination';

export interface GeoAddress {
    city?: string;
    country?: string;
    number?: string;
    postcode?: string;
    state?: string;
    street?: string;
    town?: string;
}

export interface GeoCoords {
    latitude: number;
    longitude: number;
}

export interface GeoLocation {
    id: number;
    coords: GeoCoords;
    description?: string | null;
    image?: string | null;
    name: string;
    slug: string;
    type: LocationType;
}

export interface GeoRequestFilter extends PaginationParams {
    parent_id?: number;
    search?: string;
    type?: LocationType;
}

export enum LocationType {
    city = 'city',
    country = 'country',
    state = 'state',
    town = 'town',
}
