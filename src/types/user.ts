import type { PaginationParams } from './pagination';

/**
 * User
 */
export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  phone: string;
  phone_verified_at: string | null;
  permissions?: UserPermission[];
  roles: UserRole[];
}

/**
 * UserRole
 */
export interface UserRole {
  id: number;
  name: RoleName;
}

/**
 * UserPermission
 */
export interface UserPermission {
  role?: UserRole;
  permissible_id: number;
  permissible_type: string;
}

/**
 * UserPermissionCreate
 */
export interface UserPermissionCreate {
  permissible_type: string;
  permissible_id: number;
  user_id: number;
}

export enum RoleName {
  ADMIN = 'admin',
  GUEST = 'guest',
  MODERATOR = 'moderator',
  SUDO = 'sudo',
  SUPPORT = 'support',
  // Shop
  SHOP_FINANCE = 'shop.finance',
  SHOP_OWNER = 'shop.owner',
  SHOP_ORDER_MANAGER = 'shop.order-manager',
  SHOP_PRODUCT_MANAGER = 'shop.product-manager',
  SHOP_SUPPORT = 'shop.support',
  // warehouse
  WAREHOUSE_MANAGER = 'warehouse.manager',
  WAREHOUSE_PRODUCT_MANAGER = 'warehouse.product-manager',
  WAREHOUSE_SECTION_MANAGER = 'warehouse.section-manager',
  WAREHOUSE_QUALITY_CONTROL = 'warehouse.quality-control',
}

/**
 * Requests
 */
export interface UserLoginRequest {
  email?: string;
  mode: 'email' | 'phone';
  phone?: string;
  password: string;
}

export interface UserRegisterRequest {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

/**
 * Responses
 */
export interface UserAuthResponse {
  data: User;
  auth_token: string;
}

export interface UserRequestFilter extends PaginationParams {
  email?: string;
  name?: string;
  roles?: number[];
}
