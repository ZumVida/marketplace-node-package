import type { AxiosInstance } from 'axios';
import type {
    UserAuthResponse,
    UserLoginRequest,
    UserRegisterRequest,
} from '../types';

export function useUserService(api: AxiosInstance) {
    const baseURL = '/users';

    return {
        auth: {
            currentUser: () => api.get<UserAuthResponse>(`${baseURL}/auth`),
            login: (params: UserLoginRequest) =>
                api.post<UserAuthResponse>(`${baseURL}/auth`, params),
            register: (params: UserRegisterRequest) =>
                api.post<UserAuthResponse>(`${baseURL}/auth/register`, params),
        },
    };
}
