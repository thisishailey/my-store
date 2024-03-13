'use client';

import Link from 'next/link';
import { useCartStore } from '@/stores/cartStore';
import ProductImage from '@/components/common/ProductImage';
import CartSummary from './CartSummary';
import EmptyCart from './EmptyCart';
import {
    TrashIcon,
    ChevronUpIcon,
    ChevronDownIcon,
} from '@heroicons/react/24/outline';

export default function CartTable() {
    const { cart, incrementQty, decrementQty, removeItem } = useCartStore();

    function CartItems() {
        return (
            <>
                {cart.map((item) => {
                    return (
                        <tr
                            className="text-sm h-24 border-b border-gray-300 dark:border-neutral-600"
                            key={item.id}
                        >
                            <td className="px-2 peer">
                                <Link
                                    className="flex w-16"
                                    href={'/product/detail/' + item.id}
                                >
                                    <ProductImage
                                        image={item.image}
                                        title={item.title}
                                        classList="h-16"
                                        imgClassList="p-2"
                                    />
                                </Link>
                            </td>
                            <td className="max-w-42 hover:underline peer-hover:underline">
                                <Link href={'/product/detail/' + item.id}>
                                    <p className="h-10 text-ellipsis overflow-hidden">
                                        {item.title}
                                    </p>
                                </Link>
                            </td>
                            <td className="px-2">
                                <div className="text-center h-24 flex flex-col items-center justify-center gap-1">
                                    <button
                                        className="w-6 p-1 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-700 transition duration-300"
                                        onClick={() => incrementQty(item.id)}
                                    >
                                        <ChevronUpIcon />
                                    </button>
                                    <p>{item.qty}</p>
                                    <button
                                        className="w-6 p-1 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-700 transition duration-300"
                                        onClick={() => {
                                            if (item.qty === 1) {
                                                removeItem(item.id);
                                            } else {
                                                decrementQty(item.id);
                                            }
                                        }}
                                    >
                                        <ChevronDownIcon />
                                    </button>
                                </div>
                            </td>
                            <td className="hidden sm:table-cell text-center px-2">
                                ${item.price.toFixed(2)}
                            </td>
                            <td className="text-center px-2">
                                ${(item.price * item.qty).toFixed(2)}
                            </td>
                            <td className="px-2">
                                <button
                                    className="w-5"
                                    onClick={() => removeItem(item.id)}
                                >
                                    <TrashIcon />
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </>
        );
    }

    return (
        <>
            {cart.length > 0 ? (
                <>
                    <div className="flex flex-col items-start md:flex-row gap-10 md:gap-0 sm:m-6">
                        <table className="w-full md:w-2/3">
                            <thead className="border-b border-gray-300 dark:border-neutral-600">
                                <tr className="text-sm h-12">
                                    <th className="font-medium pl-3">Item</th>
                                    <th className="font-medium"></th>
                                    <th className="font-medium text-center">
                                        Quantity
                                    </th>
                                    <th className="hidden sm:table-cell font-medium text-center">
                                        Price
                                    </th>
                                    <th className="font-medium text-center">
                                        Total
                                    </th>
                                    <th className="font-medium"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <CartItems />
                            </tbody>
                        </table>
                        <CartSummary cart={cart} />
                    </div>
                    <div className="h-40"></div>
                </>
            ) : (
                <EmptyCart />
            )}
        </>
    );
}
