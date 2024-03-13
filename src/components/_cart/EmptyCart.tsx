import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface EmptyCartButtonProps {
    classList: string;
    onClick?: () => void;
}

export function EmptyCartButton({ classList, onClick }: EmptyCartButtonProps) {
    const arrowBounceEffect = (add: boolean) => {
        add
            ? document
                  .querySelector('.arrow-icon')
                  ?.classList.add('animate-[arrowBounce_800ms]')
            : document
                  .querySelector('.arrow-icon')
                  ?.classList.remove('animate-[arrowBounce_800ms]');
    };

    const defaultClasses =
        'flex justify-center px-4 py-3 shadow-md rounded-lg font-medium text-center text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ';
    const additionalClasses = classList || '';
    const buttonClasses = defaultClasses + additionalClasses;

    return (
        <Link
            href={'/product/category/all'}
            className={buttonClasses}
            onClick={onClick}
            onMouseOver={() => arrowBounceEffect(true)}
            onMouseLeave={() => arrowBounceEffect(false)}
        >
            Explore products
            <ArrowRightIcon
                className="inline w-5 ml-3 arrow-icon"
                onMouseOver={(e) => e.stopPropagation()}
                onMouseLeave={(e) => e.stopPropagation()}
            />
        </Link>
    );
}

export default function EmptyCart() {
    return (
        <div className="flex flex-col items-center py-10">
            <h3 className="mb-10 text-lg sm:text-xl">
                You don't have anything in your cart.
            </h3>
            <EmptyCartButton classList="text-xl" />
        </div>
    );
}
