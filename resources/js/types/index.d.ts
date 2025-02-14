import { Config } from 'ziggy-js';

export interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    profile_photo_url: string;
    phone: string;
    phone_pro: string;
    active: string;
    renew: string;
    description: string;
    position?: {
        name: string;
    };
    company?: {
        name: string;
    };
}

export interface Meal {
    id: number;
    name: string;
    address: string;
    date: string;
    price: number;
    description: string;
    status: string;
    thumbnail: string;
    owner: User;
    max_capacity: number;
    table_quantity: number;
    seats_per_table: number;
    created_at: string;
    updated_at: string;
}

export interface PaginatedData<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Array<{
        url: string | null;
        label: string;
        active: boolean;
    }>;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};
