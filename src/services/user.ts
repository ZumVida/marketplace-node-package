import type { AxiosInstance } from 'axios';
import type {
  PaginatedData,
  User,
  UserAuthResponse,
  UserLoginRequest,
  UserRegisterRequest,
  UserRequestFilter,
} from '@/types';

/**
 * useUserService
 * @param api
 * @returns
 */
export function useUserService(api: AxiosInstance) {
  const baseURL = '/users';
  const adminURL = `${baseURL}/admin`;

  return {
    admin: {
      /**
       * assignRole
       * @param params
       * @returns
       */
      assignRole: (params: { user: number; role: number }) =>
        api.post<User>(`${adminURL}/${params.user}/assign-role/${params.role}`),

      /**
       * filter
       * @param params
       * @returns
       */
      filter: (params: UserRequestFilter) =>
        api.get<PaginatedData<User>>(`${adminURL}`, { params }),

      /**
       * revokeRole
       * @param params
       * @returns
       */
      revokeRole: (params: { user: number; role: number }) =>
        api.post<User>(`${baseURL}/${params.user}/revoke-role/${params.role}`),

      /**
       * show
       * @param id
       * @returns
       */
      show: (id: number) => api.get<User>(`${adminURL}/${id}`),
    },
    auth: {
      /**
       * currentUser
       */
      currentUser: () => api.get<UserAuthResponse>(`${baseURL}/auth`),

      /**
       * login
       * @param params
       */
      login: (params: UserLoginRequest) =>
        api.post<UserAuthResponse>(`${baseURL}/auth`, params),

      /**
       * logout
       */
      logout: () => api.post(`${baseURL}/auth/logout`),

      /**
       * register
       * @param params
       */
      register: (params: UserRegisterRequest) =>
        api.post<UserAuthResponse>(`${baseURL}/auth/register`, params),
    },
  };
}
