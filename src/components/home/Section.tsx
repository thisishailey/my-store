import ProductCard from '@/components/common/ProductCard';
import type IProduct from '@/types/productData';

interface SectionProps {
    title: string;
    products: IProduct[];
}

export default function Section({ title, products }: SectionProps) {
    return (
        <div className="py-10">
            <h2 className="text-xl font-semibold">{title}</h2>
            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 gap-4">
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
        </div>
    );
}
