import type { AxiosInstance } from 'axios';
import type {
    Cart,
    CartRequestAdd,
    CartRequestMakeOrder,
    CartRequestUpdate,
    Order,
} from '@/types';

export function useOrderService(api: AxiosInstance) {
    const cartURL = '/marketplace/cart';

    return {
        cart: {
            /**
             * addItem
             * @param params
             */
            addItem: (params: CartRequestAdd) =>
                api.post<Cart>(cartURL, params),

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
    };
}
