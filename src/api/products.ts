import { ENDPOINT } from '@/constants/api';
import type IProduct from '@/types/productData';

export const getProductsData = async () => {
    const res = await fetch(ENDPOINT);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data: IProduct[] = await res.json();
    return data;
};

export const getProductsByCategory = async (category: string) => {
    const res = await fetch(ENDPOINT + `/category/${category}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data: IProduct[] = await res.json();
    return data;
};

export const getProductData = async (id: number | string) => {
    const res = await fetch(ENDPOINT + `/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data: IProduct = await res.json();
    return data;
};
