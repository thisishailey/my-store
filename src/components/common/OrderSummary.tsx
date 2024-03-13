import Link from 'next/link';
import ProductImage from './ProductImage';
import type ICartItem from '@/types/cartItem';

interface OrderSummaryProps {
    subtotal: number;
    shipping: number;
    tax: number;
    total: number;
    hasItems: boolean;
    items?: ICartItem[];
    isOrderComplete: boolean;
    orderId?: string;
    onClick?: () => void;
}

export default function OrderSummary(props: OrderSummaryProps) {
    return (
        <div className="flex flex-col gap-4 w-full max-w-sm min-w-80 min-h-96 md:mx-4 !px-6 !py-8 rounded-xl bg-gray-100 dark:bg-neutral-800">
            <div>
                <h3 className="text-lg sm:text-xl font-medium pb-3 border-b border-gray-300 dark:border-neutral-500">
                    {props.isOrderComplete
                        ? `Order #${props.orderId}`
                        : 'Order Summary'}
                </h3>
                {props.hasItems && (
                    <ul>
                        {props.items!.map((item) => {
                            return (
                                <li
                                    key={item.id}
                                    className="flex items-center justify-between py-3 border-b border-gray-300 dark:border-neutral-500"
                                >
                                    <Link
                                        className="flex w-16"
                                        href={'/product/detail/' + item.id}
                                    >
                                        <ProductImage
                                            image={item.image}
                                            title={item.title}
                                            classList="h-16"
                                            imgClassList="p-1"
                                        />
                                    </Link>
                                    <div className="flex flex-col gap-2 w-40">
                                        <p className="text-base text-ellipsis overflow-hidden whitespace-nowrap">
                                            {item.title}
                                        </p>
                                        <span className="text-sm font-medium">
                                            ${item.price.toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="font-light text-sm text-gray-600 dark:text-neutral-400">
                                        x {item.qty}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
            <ul className="flex flex-col gap-2 text-sm sm:text-base font-light text-neutral-600 dark:text-neutral-300">
                <li className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${props.subtotal.toFixed(2)}</span>
                </li>
                <li className="flex justify-between">
                    <span>Shipping</span>
                    <span>${props.shipping.toFixed(2)}</span>
                </li>
                <li className="flex justify-between">
                    <span>Taxes</span>
                    <span>${props.tax.toFixed(2)}</span>
                </li>
            </ul>
            <div className="flex justify-between text-base sm:text-lg font-medium py-3 border-t border-b border-gray-300 dark:border-neutral-500">
                <span>Total</span>
                <span>${props.total.toFixed(2)}</span>
            </div>
            {!props.isOrderComplete && (
                <button
                    type="submit"
                    onClick={props.onClick}
                    className="py-3 rounded-xl text-center text-base text-white bg-blue-600 transition-all duration-300 hover:bg-blue-700 hover:text-lg"
                >
                    Pay ${props.total.toFixed(2)}
                </button>
            )}
        </div>
    );
}
