'use client';

import Link from 'next/link';
import { useRef, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useCartStore } from '@/stores/cartStore';
import { useCheckoutStore } from '@/stores/checkoutStore';
import { GoPlus } from 'react-icons/go';
import type IProduct from '@/types/productData';

export function ProductDescription({ description }: { description: string }) {
    const infoRef = useRef<HTMLParagraphElement>(null);
    const plusRef = useRef<HTMLSpanElement>(null);

    const toggleInfo = () => {
        const info = infoRef.current as HTMLParagraphElement;
        const plus = plusRef.current as HTMLSpanElement;
        info.classList.toggle('hidden');
        plus.classList.toggle('rotate-45');
    };

    return (
        <>
            <p className="hidden sm:block text-sm lg:text-base p-3 shadow-inner rounded-lg border-1 border-solid border-gray-300 dark:border-neutral-700 bg-[#ffffff] dark:bg-neutral-800">
                {description}
            </p>
            <div className="block sm:hidden w-full min-w-48 rounded-lg border-1 border-solid border-gray-300 dark:border-neutral-600 bg-[#ffffff] dark:bg-neutral-800">
                <button
                    className="block sm:hidden flex items-center justify-between w-full p-1.5 px-3 text-base"
                    onClick={toggleInfo}
                >
                    Product Info
                    <span ref={plusRef}>
                        <GoPlus className="inline text-xl" />
                    </span>
                </button>
                <p
                    ref={infoRef}
                    className="hidden w-full p-2 px-3 text-sm border-t border-solid border-gray-300 dark:border-neutral-600"
                    onClick={toggleInfo}
                >
                    {description}
                </p>
            </div>
        </>
    );
}

export function AddCartButton({ item }: { item: IProduct }) {
    const { cart, addItem } = useCartStore();
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const addToCart = (item: IProduct) => {
        if (cart.some((i) => i.id === item.id)) {
            openModal();
        } else {
            addItem(item);
            showCart();
        }
    };

    const showCart = () => {
        const button = document.querySelector(
            '.cart-popover-button'
        ) as HTMLButtonElement;
        button.click();
    };

    return (
        <>
            <button
                className="btn flex-1 min-w-24 h-auto p-3 shadow-md font-normal text-base sm:text-xl text-white border-0 bg-blue-600 hover:bg-blue-700 transition duration-300"
                onClick={() => addToCart(item)}
            >
                Add to cart
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-80 transform overflow-hidden rounded-2xl bg-white dark:!bg-black p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium"
                                    >
                                        Already in the cart
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            This item is already in your cart.
                                            <br />
                                            You can change the quantity in the
                                            cart.
                                        </p>
                                    </div>

                                    <div className="flex justify-between gap-3 mt-4">
                                        <Link
                                            href={'/cart'}
                                            type="button"
                                            className="flex-1 inline-flex justify-center px-4 py-2.5 rounded-md text-base text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
                                            onClick={closeModal}
                                        >
                                            Go to cart
                                        </Link>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center px-3 py-2.5 rounded-md text-base text-blue-600 bg-transparent hover:!bg-blue-100 dark:hover:!bg-neutral-900 transition duration-300"
                                            onClick={closeModal}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export function PurchaseButton({ item }: { item: IProduct }) {
    const { setCheckout } = useCheckoutStore();

    return (
        <Link
            href={'/checkout'}
            className="btn flex-1 min-w-24 h-auto p-3 shadow-md font-normal text-base sm:text-xl !text-blue-600 !border-blue-600 bg-white dark:!bg-transparent hover:!bg-blue-100 dark:hover:!bg-black transition duration-300"
            onClick={() => {
                setCheckout([{ ...item, qty: 1 }]);
            }}
        >
            Purchase
        </Link>
    );
}
