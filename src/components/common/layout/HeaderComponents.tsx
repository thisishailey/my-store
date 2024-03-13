'use client';

import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState, Fragment, useRef } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { useCartStore } from '@/stores/cartStore';
import { useAccountStore } from '@/stores/accountStore';
import { logout } from '@/lib';
import ProductImage from '@/components/common/ProductImage';
import { EmptyCartButton } from '@/components/_cart/EmptyCart';
import { THEME_LS_KEY } from '@/constants/theme';
import { CATEGORY } from '@/constants/category';
import { VscAccount } from 'react-icons/vsc';
import { IoCloseOutline } from 'react-icons/io5';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { FiMenu, FiSearch } from 'react-icons/fi';
import {
    MdOutlineLightMode,
    MdLightMode,
    MdOutlineDarkMode,
    MdDarkMode,
} from 'react-icons/md';

export function ThemeButton() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>();
    const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
    const [isToggled, setIsToggled] = useState<boolean>(false);

    useEffect(() => {
        const storageData = localStorage.getItem(THEME_LS_KEY);
        const darkPreference =
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (storageData) {
            if (storageData === 'light') {
                setIsDarkMode(false);
            } else {
                setIsDarkMode(true);
                document.documentElement.classList.add('dark');
            }
        } else if (darkPreference) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = (e: React.MouseEvent) => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem(THEME_LS_KEY, 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem(THEME_LS_KEY, 'dark');
        }

        setIsDarkMode(!isDarkMode);
        setIsMouseOver(false);
        setIsToggled(true);

        const button = e.currentTarget as HTMLButtonElement;
        button.classList.add('animate-[spinQuarter_300ms_linear_1]');
        setTimeout(() => {
            button.classList.remove('animate-[spinQuarter_300ms_linear_1]');
        }, 300);
    };

    return (
        <button
            className="p-2.5 text-lg rounded-full hover:bg-neutral-300/40 dark:hover:bg-neutral-600/40 transition duration-300"
            onClick={toggleTheme}
            onMouseOver={() => !isToggled && setIsMouseOver(true)}
            onMouseLeave={() => {
                setIsMouseOver(false);
                setIsToggled(false);
            }}
        >
            {isMouseOver ? (
                isDarkMode ? (
                    <MdLightMode />
                ) : (
                    <MdOutlineDarkMode />
                )
            ) : isDarkMode ? (
                <MdDarkMode />
            ) : (
                <MdOutlineLightMode />
            )}
        </button>
    );
}

interface SearchBarProps {
    isHeader: boolean;
    closeSidePanel?: () => void;
    classList?: string;
    inputClassList?: string;
}

export function SearchButton(props: SearchBarProps) {
    const [showButton, setShowButton] = useState(props.isHeader);
    const inputRef = useRef<HTMLInputElement>(null);
    const searchParams = useSearchParams();
    const { push } = useRouter();

    const showSearchForm = () => {
        setShowButton(false);
    };

    const closeSearchForm = () => {
        setShowButton(true);
    };

    const handleSearch = (formData: FormData) => {
        const search = formData.get('search') as string;
        const params = new URLSearchParams(searchParams);
        params.set('query', search);
        push(`/search?${params.toString()}`);
        (inputRef.current as HTMLInputElement).value = '';
        if (props.isHeader) {
            closeSearchForm();
        } else {
            props.closeSidePanel?.();
        }
    };

    const defaultClasses =
        'flex items-center justify-between rounded-full border-1 border-solid border-neutral-400 bg-neutral-100 dark:bg-neutral-800 hover:bg-white dark:hover:bg-neutral-900 transition duration-300 ';
    const additionalClasses = props.classList || '';
    const formClasses = defaultClasses + additionalClasses;

    const defaultInputClasses =
        'flex-1 font-normal text-neutral-900 dark:text-neutral-100 bg-transparent outline-0 placeholder:font-light placeholder:text-neutral-600 dark:placeholder:text-neutral-300 ';
    const additionalInputClasses = props.inputClassList || '';
    const inputClasses = defaultInputClasses + additionalInputClasses;

    return (
        <>
            {showButton && (
                <button
                    className="block p-2.5 text-lg rounded-full hover:bg-neutral-300/40 dark:hover:bg-neutral-600/40 transition duration-300"
                    onClick={showSearchForm}
                >
                    <FiSearch />
                </button>
            )}
            <form
                action={handleSearch}
                className={showButton ? 'hidden' : formClasses}
            >
                <input
                    ref={inputRef}
                    className={inputClasses}
                    name="search"
                    type="text"
                    placeholder="Search products"
                    autoComplete="off"
                />
                {props.isHeader && (
                    <button
                        className="basis-0 text-neutral-600 dark:text-neutral-300"
                        type="button"
                        onClick={closeSearchForm}
                    >
                        <IoCloseOutline />
                    </button>
                )}
            </form>
        </>
    );
}

export function AccountButton() {
    const { user, getUser } = useAccountStore();

    return (
        <Popover className="relative">
            <Popover.Button
                className="p-2.5 text-lg rounded-full outline-0 hover:bg-neutral-300/40 dark:hover:bg-neutral-600/40 transition duration-300"
                onClick={async () => getUser()}
            >
                <VscAccount />
            </Popover.Button>
            <Popover.Overlay className="fixed inset-0 z-40 bg-black/20 dark:bg-white/20" />
            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute right-0 z-50 translate-x-16 w-40 mt-3">
                    {({ close }) => (
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 dark:ring-white/5">
                            <div className="p-3 bg-white dark:!bg-black">
                                {user ? (
                                    <div className="flex flex-col gap-2 w-full">
                                        <p className="text-sm">
                                            Logged in with{' '}
                                            <span className="font-medium">
                                                {user}
                                            </span>
                                        </p>
                                        <Link
                                            href={'/account'}
                                            onClick={() => close()}
                                            className="p-2 rounded-lg text-center text-white text-sm bg-blue-600 hover:bg-blue-700 transition duration-300"
                                        >
                                            View Account
                                        </Link>
                                        <button
                                            onClick={async () => {
                                                logout();
                                                close();
                                            }}
                                            className="p-2 rounded-lg text-center text-blue-600 text-sm border-1 border-blue-600 hover:bg-blue-100 dark:hover:bg-neutral-800 transition duration-300"
                                        >
                                            Log Out
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-3 w-full">
                                        <Link
                                            href={'/account/login'}
                                            onClick={() => close()}
                                            className="p-2 rounded-lg text-center text-white text-lg bg-blue-600 hover:bg-blue-700 transition duration-300"
                                        >
                                            Log In
                                        </Link>
                                        <hr className="text-neutral-400 opacity-100 text-center overflow-visible after:content-['or'] after:relative after:bottom-3 after:px-1 after:bg-white dark:after:!bg-black" />
                                        <Link
                                            href={'/account/signup'}
                                            onClick={() => close()}
                                            className="p-2 rounded-lg text-center text-blue-600 text-lg border-1 border-blue-600 hover:bg-blue-100 dark:hover:bg-neutral-800 transition duration-300"
                                        >
                                            Sign Up
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}

export function CartButton() {
    const { cart } = useCartStore();

    return (
        <Popover className="relative">
            <Popover.Button className="p-2.5 text-lg rounded-full outline-0 hover:bg-neutral-300/40 dark:hover:bg-neutral-600/40 transition duration-300 cart-popover-button">
                <HiOutlineShoppingBag />
                {cart.length > 0 && (
                    <div className="absolute bottom-0.5 right-0.5 px-1 text-xs font-medium rounded-full bg-gray-300 dark:bg-neutral-600">
                        {cart.length}
                    </div>
                )}
            </Popover.Button>
            <Popover.Overlay className="fixed inset-0 z-40 bg-black/20 dark:bg-white/20" />
            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                {cart.length > 0 ? (
                    <Popover.Panel className="absolute right-0 z-50 translate-x-14 sm:translate-x-4 w-80 mt-3">
                        {({ close }) => (
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 dark:ring-white/5">
                                <ul className="relative p-2 bg-white dark:!bg-black">
                                    {cart.map((item) => (
                                        <Link
                                            href={`/product/detail/${item.id}`}
                                            onClick={() => close()}
                                            key={item.id}
                                        >
                                            <li className="flex items-center p-2 rounded-lg hover:bg-gray-200/60 dark:hover:bg-neutral-800 transition duration-300">
                                                <div className="flex items-center justify-center w-12 h-12 text-white">
                                                    <ProductImage
                                                        classList="w-12 h-12"
                                                        imgClassList="p-1"
                                                        image={item.image}
                                                        title={item.title}
                                                    />
                                                </div>
                                                <div className="!mx-3 w-48 text-sm">
                                                    <p className="font-medium text-ellipsis overflow-hidden whitespace-nowrap">
                                                        {item.title}
                                                    </p>
                                                    <p>${item.price}</p>
                                                </div>
                                                <div className="w-6 font-light text-center text-sm text-gray-500 dark:text-neutral-300">
                                                    x {item.qty}
                                                </div>
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                                <div className="flex p-3 bg-gray-100 dark:bg-neutral-900">
                                    <Link
                                        href={'/cart'}
                                        onClick={() => close()}
                                        className="w-72 py-2.5 rounded-lg text-center text-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
                                    >
                                        Go to cart
                                    </Link>
                                </div>
                            </div>
                        )}
                    </Popover.Panel>
                ) : (
                    <Popover.Panel className="absolute right-0 z-50 translate-x-14 sm:translate-x-4 w-60 mt-3">
                        {({ close }) => (
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 dark:ring-white/5">
                                <div className="relative p-2 bg-white dark:!bg-black">
                                    <div className="flex items-center p-2 pb-3 text-sm rounded-lg">
                                        Your shopping cart is empty.
                                    </div>
                                    <EmptyCartButton
                                        classList="w-56 text-base"
                                        onClick={() => close()}
                                    />
                                </div>
                            </div>
                        )}
                    </Popover.Panel>
                )}
            </Transition>
        </Popover>
    );
}

export function MenuButton() {
    const sidePanelRef = useRef<HTMLDivElement>(null);
    const productListRef = useRef<HTMLUListElement>(null);

    const openSidePanel = () => {
        const sidePanel = sidePanelRef.current as HTMLDivElement;
        sidePanel.classList.remove('hidden');
    };

    const closeSidePanel = () => {
        const sidePanel = sidePanelRef.current as HTMLDivElement;
        sidePanel.classList.add('hidden');
        closeList();
    };

    const toggleList = () => {
        const list = productListRef.current as HTMLUListElement;
        if (list.classList.contains('hidden')) {
            list.classList.remove('hidden');
        } else {
            list.classList.add('hidden');
        }
    };

    const closeList = () => {
        const list = productListRef.current as HTMLUListElement;
        list.classList.add('hidden');
    };

    return (
        <div>
            <button
                className="flex items-center p-2.5 sm:py-1.5 text-lg rounded-full hover:bg-neutral-300/40 dark:hover:bg-neutral-600/40 transition duration-300"
                onClick={openSidePanel}
            >
                <FiMenu className="inline sm:pr-1" />
                <span className="hidden sm:inline text-base">Menu</span>
            </button>
            <div ref={sidePanelRef} className="hidden">
                <div
                    className="fixed inset-0 bg-black/30 z-40"
                    aria-hidden="true"
                    onClick={closeSidePanel}
                />
                <div className="absolute top-[1vh] right-[1vh] z-50 sm:left-[1vh] flex flex-col justify-between w-[96vw] sm:w-[50vw] lg:w-[40vw] max-w-md h-[98vh] rounded-xl font-medium text-white bg-gray-400/90 dark:bg-neutral-700/95 backdrop-blur-lg">
                    <div className="flex flex-col w-full">
                        <div className="flex justify-end p-4 text-2xl">
                            <IoCloseOutline
                                className="cursor-pointer"
                                onClick={closeSidePanel}
                            />
                        </div>
                        <div className="w-full">
                            <SearchButton
                                closeSidePanel={closeSidePanel}
                                isHeader={false}
                                classList="w-4/5 min-w-52 max-w-96 py-2 px-3 my-0 mx-auto"
                                inputClassList="text-lg placeholder:text-base"
                            />
                        </div>
                    </div>
                    <ul className="flex flex-col gap-10 p-14 text-3xl">
                        <li className="transition-all duration-300 hover:text-4xl">
                            <Link href={'/'} onClick={closeSidePanel}>
                                Home
                            </Link>
                        </li>
                        <li
                            className="transition-all duration-300 hover:text-4xl"
                            onClick={toggleList}
                        >
                            <span className="cursor-pointer">Products</span>
                            <ul
                                ref={productListRef}
                                className="flex flex-col gap-4 pt-4 pl-4 text-xl hidden"
                            >
                                {CATEGORY.map((category) => (
                                    <li
                                        className="transition-all duration-300 hover:text-2xl"
                                        key={category}
                                    >
                                        <Link
                                            href={`/product/category/${category}`}
                                            onClick={closeSidePanel}
                                            className="capitalize"
                                        >
                                            {category}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="transition-all duration-300 hover:text-4xl">
                            <Link href={'/account'} onClick={closeSidePanel}>
                                Account
                            </Link>
                        </li>
                        <li className="transition-all duration-300 hover:text-4xl">
                            <Link href={'/cart'} onClick={closeSidePanel}>
                                Cart
                            </Link>
                        </li>
                    </ul>
                    <div className="p-4 text-center font-normal text-xs sm:text-sm">
                        © 2024 MyStore, Inc. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
}
