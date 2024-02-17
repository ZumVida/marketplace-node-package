import type { Product } from './product';
import type { GeoAddress, GeoCoords, GeoLocation } from '../geo';
import type { User } from '../user';
import type { Store } from './store';
import type { PaginationParams } from '../pagination';

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
  recipient_name?: string;
}

export interface OrderRequestCreate extends CartRequestMakeOrder {
  items?: Array<{
    product_id: number;
    qty: number;
  }>;
}

export interface OrderRequestFilter extends PaginationParams {
  customer_id?: number;
  status?: OrderStatus;
  store_id?: number;
}

export interface CartRequestUpdate {
  qty: number;
  selected?: boolean;
}

export enum CartItemStatus {
  AVAILABLE = 'available',
}

export interface Order {
  id: number;
  customer?: User;
  discount_price: number;
  items?: OrderItem[];
  items_price: number;
  location?: GeoLocation;
  recipient_address?: string;
  recipient_address_details?: GeoAddress;
  recipient_contact?: string;
  recipient_coords?: GeoCoords;
  recipient_name?: string;
  shipping_price: number;
  status: OrderStatus;
  store: Store;
  summary: unknown;
  tax_price: number;
}

export interface OrderItem {
  id: number;
  qty: number;
  product?: Product;
}

export enum OrderStatus {
  CANCELLED = 'Cancelado',
  COMPLETED = 'Completado',
  DELIVERED = 'Entregado',
  IN_TRANSIT = 'En tránsito',
  OUT_FOR_DELIVERY = 'En reparto',
  PAID = 'Pagado',
  PENDING = 'Pendiente',
  PROCESSING = 'Procesando',
  SHIPPED = 'Enviado',
  WAITING_FOR_PAYMENT = 'Esperando pago',
  PAYMENT_FAILED = 'Pago fallido',
}
