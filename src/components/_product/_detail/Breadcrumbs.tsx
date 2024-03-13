import Link from 'next/link';

interface BreadcrumbsProps {
    category: string;
    name: string;
}

export default async function ProductBreadcrumbs({
    category,
    name,
}: BreadcrumbsProps) {
    return (
        <div className="mb-10 text-xs sm:text-sm breadcrumbs">
            <ul>
                <li>
                    <Link href={'/product/category/all'}>Products</Link>
                </li>
                <li>
                    <Link
                        href={`/product/category/${category}`}
                        className="capitalize"
                    >
                        {category}
                    </Link>
                </li>
                <li>
                    <span className="max-w-32 sm:max-w-xs lg:max-w-sm text-ellipsis overflow-hidden whitespace-nowrap">
                        {name}
                    </span>
                </li>
            </ul>
        </div>
    );
}
