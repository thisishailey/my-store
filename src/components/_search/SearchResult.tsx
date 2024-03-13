import { getProductsData } from '@/api/products';
import ProductCard from '@/components/common/ProductCard';

export default async function SearchResult({ query }: { query: string }) {
    const data = await getProductsData();
    const products = data.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
    );

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
