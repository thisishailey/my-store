import { getProductsData } from './products';
import type IProduct from '@/types/productData';

async function getCategoryList() {
    const products: IProduct[] = await getProductsData();
    const categoryList = Array.from(
        new Set(products.map((product) => product.category).concat('all'))
    );

    return categoryList;
}

export async function getCategoryDict() {
    const categoryList = await getCategoryList();
    const categoryDict: {
        [key: string]: string;
    } = {};

    categoryList.forEach((category) => {
        categoryDict[category] = category
            .replaceAll(' ', '-')
            .replaceAll("'", '');
    });

    return categoryDict;
}

export async function convertParamToCategory(param: string) {
    const categoryDict = await getCategoryDict();
    const category = Object.keys(categoryDict).find(
        (category) => categoryDict[category] === param
    );

    return category;
}
