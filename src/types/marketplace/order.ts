import type { Product } from './product';
import type { GeoAddress, GeoCoords } from '../geo';

export interface Order {
    id: number;
    discount_price: number;
    items_price: number;
    shipping_price: number;
    tax_price: number;
    status: null;
}

export interface Cart {
    data: CartItem[];
    prices: {
        regular: number;
        tiered: number;
    };
}

export interface CartItem {
    id: number;
    product: Product;
    qty: number;
    selected: boolean;
    status?: CartItemStatus;
}

export interface CartRequestAdd {
    product_id: number;
    qty: number;
}

export interface CartRequestMakeOrder {
    recipient_address: string;
    recipient_contact: string;
    recipient_coords?: GeoCoords;
    recipient_address_details?: GeoAddress;
}

export interface CartRequestUpdate {
    qty: number;
    selected?: boolean;
}

export enum CartItemStatus {
    available = 'available',
}
