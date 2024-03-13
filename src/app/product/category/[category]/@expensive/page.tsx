import Products from '@/components/_product/_category/Products';
import type ICategoryParams from '@/types/category';

export default function ProductsSortByPriceDesc({ params }: ICategoryParams) {
    return <Products param={params.category} sort={'price-desc'} />;
}
