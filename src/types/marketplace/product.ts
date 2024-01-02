import type { PaginationParams } from '../pagination';

export interface Product {
    id: number;
    available?: boolean;
    description: string;
    details?: ProductDetail[] | null;
    image: string | null;
    image_sm?: string | null;
    name: string;
    price_regular: number;
    price_tiered: number;
    rating: number;
    slug: string;
    small_description: string;
    stock_qty: number;
    summary?: ProductSummary | null;
    type: ProductType;
}

export interface ProductDetail {
    label: string;
    value: string | number;
}

export interface ProductRequestCreate {
    description: string;
    details?: ProductDetail[] | null;
    image: File | null;
    name: string;
    small_description: string;
    stock_qty: number;
    store_id: number;
    type: ProductType;
}

export interface ProductRequestFilter extends PaginationParams {
    available?: boolean;
    category_id?: number;
    max_price?: number;
    min_price?: number;
    search?: string;
    store_id?: number;
}

export interface ProductRequestUpdate
    extends Omit<Partial<ProductRequestCreate>, 'store_id'> {
    available?: boolean;
}

export interface ProductSummary {}

export enum ProductType {
    combo = 'combo',
    product = 'product',
    service = 'service',
}
