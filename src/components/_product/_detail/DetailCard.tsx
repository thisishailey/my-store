import ProductImage from '@/components/common/ProductImage';
import {
    ProductDescription,
    AddCartButton,
    PurchaseButton,
} from './DetailCardComponents';
import type IProduct from '@/types/productData';

export default function ProductDetailCard({ product }: { product: IProduct }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full px-4 md:p-4">
            <ProductImage
                image={product.image}
                title={product.title}
                classList="h-96 md:h-[500px]"
                imgClassList="p-8"
            />
            <div className="flex flex-col justify-center gap-8 md:gap-5 xl:gap-8">
                <h2 className="text-xl sm:text-2xl xl:text-3xl font-medium text-center pb-4 border-b border-solid border-neutral-300 dark:border-neutral-700">
                    {product.title}
                </h2>
                <span className="px-4 text-lg sm:text-xl xl:text-2xl font-semibold text-end">
                    ${product.price.toFixed(2)}
                </span>
                <ProductDescription description={product.description} />
                <div className="flex justify-between gap-3 min-[400px]:gap-6">
                    <AddCartButton item={product} />
                    <PurchaseButton item={product} />
                </div>
            </div>
        </div>
    );
}
