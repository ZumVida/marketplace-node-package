export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    roles: UserRole[];
}

export interface UserRole {
    id: number;
    name: RoleName;
}

export enum RoleName {
    ADMIN = 'admin',
}

/**
 * Requests
 */
export interface UserLoginRequest {
    email: string;
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
