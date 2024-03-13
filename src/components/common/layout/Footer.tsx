import Link from 'next/link';
import { CATEGORY } from '@/constants/category';
import { HiOutlineMail } from 'react-icons/hi';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';

export default function Footer() {
    const company = ['Our story', 'Sustainability', 'Press', 'Careers'];
    const service = ['FAQ', 'Shipping', 'Returns', 'Find a store'];
    const liClassList =
        'mb-1.5 cursor-pointer text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white hover:underline transition-all duration-300';

    return (
        <>
            <div className="h-[445px] lg:h-[490px] invisible"></div>
            <footer className="fixed bottom-0 left-0 right-0 z-0 shadow-inner bg-gray-100 dark:bg-black">
                <div className="flex flex-col items-center gap-12 w-full max-w-7xl my-0 mx-auto pt-14 pb-14 lg:pb-20 px-8 lg:px-12">
                    <div className="flex items-start justify-center sm:justify-between w-full text-sm lg:p-6 !pb-12 border-b border-solid border-neutral-400">
                        <div className="hidden sm:block">
                            <p className="mb-3 font-semibold">About Us</p>
                            <ul>
                                {company.map((item) => (
                                    <li key={item} className={liClassList}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="hidden sm:block">
                            <p className="mb-3 font-semibold">Shop</p>
                            <ul>
                                {CATEGORY.map((category) => {
                                    return (
                                        <li
                                            key={category}
                                            className={liClassList}
                                        >
                                            <Link
                                                href={`/product/category/${category}`}
                                                className="capitalize"
                                            >
                                                {category}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="hidden md:block">
                            <p className="mb-3 font-semibold">
                                Customer Service
                            </p>
                            <ul>
                                {service.map((item) => (
                                    <li key={item} className={liClassList}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="sm:ml-6 sm:mr-12 lg:ml-10 lg:mr-20">
                            <h4 className="mb-3 font-semibold text-lg text-center">
                                Contact Us
                            </h4>
                            <ul>
                                <li className="mb-1">
                                    <HiOutlineMail className="inline" />
                                    <span className="pl-4">
                                        mystore@gmail.com
                                    </span>
                                </li>
                                <li className="mb-1">
                                    <FaXTwitter className="inline" />
                                    <span className="pl-4">
                                        mystore_official
                                    </span>
                                </li>
                                <li className="mb-1">
                                    <FaInstagram className="inline" />
                                    <span className="pl-4">
                                        mystore_onlineshopping
                                    </span>
                                </li>
                                <li className="mb-1">
                                    <IoCallOutline className="inline" />
                                    <span className="pl-4">032-1515-3300</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full text-xs">
                        <div>
                            <span>
                                © 2024 MyStore, Inc. All Rights Reserved.
                            </span>
                        </div>
                        <div className="hidden sm:flex !gap-4 md:!gap-6 lg:!gap-8">
                            <span className="cursor-pointer hover:underline">
                                Guide
                            </span>
                            <span className="cursor-pointer hover:underline">
                                Terms & Conditions
                            </span>
                            <span className="cursor-pointer hover:underline">
                                Privacy Policy
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
