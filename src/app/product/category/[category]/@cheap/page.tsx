import Products from '@/components/_product/_category/Products';
import type ICategoryParams from '@/types/category';

export default function ProductsSortByPriceAsc({ params }: ICategoryParams) {
    return <Products param={params.category} sort={'price-asc'} />;
}
