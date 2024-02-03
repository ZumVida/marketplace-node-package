export enum ModuleName {
  BILLING = 'billing',
  MARKETPLACE = 'marketplace',
  WAREHOUSE = 'warehouse',
}

export const ModelName = {
  marketplace: {
    cart: {
      item: 'Modules\\Marketplace\\app\\Models\\Cart\\Item',
      order: 'Modules\\Marketplace\\app\\Models\\Cart\\Order',
      orderItem: 'Modules\\Marketplace\\app\\Models\\Cart\\OrderItem',
    },
    category: 'Modules\\Marketplace\\app\\Models\\Category',
    product: {
      price: 'Modules\\Marketplace\\app\\Models\\Product\\Price',
      product: 'Modules\\Marketplace\\app\\Models\\Product\\Product',
    },
    recipient: 'Modules\\Marketplace\\app\\Models\\Recipient',
    store: {
      branch: 'Modules\\Marketplace\\app\\Models\\Store\\Branch',
      store: 'Modules\\Marketplace\\app\\Models\\Store\\Store',
    },
  },
};
