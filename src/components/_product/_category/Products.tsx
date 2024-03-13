import { convertParamToCategory } from '@/api/productCategory';
import { getProductsData, getProductsByCategory } from '@/api/products';
import ProductCard from '@/components/common/ProductCard';
import type IProduct from '@/types/productData';
import type { TProductSort } from '@/types/sortOption';

interface ProductsProps {
    param: string;
    sort: TProductSort;
}

export default async function Products({ param, sort }: ProductsProps) {
    let products: IProduct[] = [];

    if (param === 'all') {
        products = await getProductsData();
    } else {
        const category = await convertParamToCategory(param);
        products = await getProductsByCategory(category!);
    }

    switch (sort) {
        case 'date-desc':
            break;

        case 'price-desc':
            products.sort((x, y) => y.price - x.price);
            break;

        case 'price-asc':
            products.sort((x, y) => x.price - y.price);
            break;

        default:
            break;
    }

    return (
        <div className="grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            {products.map((product) => {
                return (
                    <ProductCard
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        key={product.id}
                    />
                );
            })}
        </div>
    );
}
