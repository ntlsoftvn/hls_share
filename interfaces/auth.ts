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
    owned_resources_count: number;
}

export interface LoginRequest {
    email: string;
    password: string;
}