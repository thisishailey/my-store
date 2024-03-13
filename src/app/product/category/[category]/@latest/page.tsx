import Products from '@/components/_product/_category/Products';
import type ICategoryParams from '@/types/category';

export default function ProductsSortByDateDesc({ params }: ICategoryParams) {
    return <Products param={params.category} sort={'date-desc'} />;
}
