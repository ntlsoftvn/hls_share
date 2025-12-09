export interface RegisterRequest {
    name?: string;
    email: string;
    password: string;
}

export interface RegisterResponse {
    id: number;
    name?: string;
    email: string;
}
export interface Tokens {
    access_token: string;
    refresh_token: string;
}

export interface ProfileResponse {
    id: number;
    name?: string| null;
    email: string;
    owned_resources: number[];
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface Permission {
    id: string
    name: string;
}

export interface Role {
    id: string;
    name: string;
    permissions: Permission[];
}