export interface CategoryRequest {
    name: string;
    description?: string | null;
}

export interface Category {
    description?: string | null;
    name: string;
    id: number;
}