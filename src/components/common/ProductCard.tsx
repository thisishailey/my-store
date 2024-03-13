import Link from 'next/link';
import ProductImage from './ProductImage';

interface CardProps {
    id: number;
    title: string;
    price: number;
    image: string;
}

export default function ProductCard({ id, title, price, image }: CardProps) {
    return (
        <div className="flex flex-col w-full cursor-pointer hover:text-blue-600 dark:hover:text-white dark:hover:underline decoration-1 transition-all duration-300">
            <Link href={`/product/detail/${id}`} className="group">
                <ProductImage
                    image={image}
                    title={title}
                    classList="h-48 sm:h-64 lg:h-80 xl:h-96 my-4 hover:shadow-lg group-hover:shadow-lg dark:brightness-90 dark:hover:brightness-100 dark:group-hover:brightness-100 transition-all duration-300"
                    imgClassList="p-8 hover:p-6 group-hover:p-6 transition-all duration-300"
                />
                <div>
                    <h3 className="text-xs md:text-sm lg:text-base xl:text-lg font-medium text-ellipsis overflow-hidden whitespace-nowrap pr-6 mb-2">
                        {title}
                    </h3>
                    <span className="text-xs md:text-sm lg:text-base">
                        ${price.toFixed(2)}
                    </span>
                </div>
            </Link>
        </div>
    );
}
