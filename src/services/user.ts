import type { AxiosInstance } from 'axios';
import type {
    UserAuthResponse,
    UserLoginRequest,
    UserRegisterRequest,
} from '@/types';

export function useUserService(api: AxiosInstance) {
    const baseURL = '/users';

    return {
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
             * register
             * @param params
             */
            register: (params: UserRegisterRequest) =>
                api.post<UserAuthResponse>(`${baseURL}/auth/register`, params),
        },
    };
}
