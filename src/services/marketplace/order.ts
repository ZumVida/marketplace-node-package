import type { AxiosInstance } from 'axios';
import type {
  Cart,
  CartRequestAdd,
  CartRequestMakeOrder,
  CartRequestUpdate,
  Order,
  OrderRequestCreate,
  OrderRequestFilter,
  OrderStatus,
  PaginatedData,
} from '@/types';

export function useOrderService(api: AxiosInstance) {
  const cartURL = '/marketplace/cart';
  const orderURL = '/marketplace/orders';

  return {
    admin: {
      /**
       * Filter admin orders
       * @param params
       * @returns
       */
      filter: (params?: OrderRequestFilter) =>
        api.get<PaginatedData<Order>>(`${orderURL}/filter`, { params }),

      /**
       * Update order status
       * @param params
       * @returns
       */
      update: (orderId: number, status: OrderStatus) =>
        api.patch<Order>(`${orderURL}/${orderId}`, { status }),

      /**
       * Show order
       * @param params
       * @returns
       */
      show: (orderId: number) => api.get<Order>(`${orderURL}/${orderId}`),
    },
    cart: {
      /**
       * addItem
       * @param params
       */
      addItem: (params: CartRequestAdd) => api.post<Cart>(cartURL, params),

      /**
       * getItems
       */
      getItems: () => api.get<Cart>(cartURL),

      /**
       * makeOrder
       * @param params
       */
      makeOrder: (params: CartRequestMakeOrder) =>
        api.post<Order>(`${cartURL}/order`, params),

      /**
       * removeItem
       * @param id
       */
      removeItem: (id: number) => api.delete<Cart>(`${cartURL}/${id}`),

      /**
       * updateItem
       * @param id
       * @param params
       */
      updateItem: (id: number, params: CartRequestUpdate) =>
        api.patch<Cart>(`${cartURL}/${id}`, params),
    },

    client: {
      /**
       * create order
       * @param params
       * @returns
       */
      create: (params: OrderRequestCreate) => api.post<Order>(orderURL, params),

      /**
       * Filter client orders
       * @param params
       * @returns
       */
      filter: (params?: OrderRequestFilter) =>
        api.get<PaginatedData<Order>>(orderURL, { params }),

      /**
       * Filter client orders
       * @param params
       * @returns
       */
      show: (orderId: number) => api.get<Order>(`${orderURL}/${orderId}`),
    },
  };
}
