import Link from 'next/link';
import Wrap from '@/components/common/template/Wrap';
import {
    MenuButton,
    ThemeButton,
    SearchButton,
    AccountButton,
    CartButton,
} from './HeaderComponents';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between h-16 px-4 sm:px-10 border-b border-solid border-gray-300 bg-gray-50 dark:border-neutral-600 dark:bg-neutral-900">
            <Wrap classList="flex justify-between">
                <div className="hidden sm:flex flex-1 basis-0 items-center md:gap-1">
                    <MenuButton />
                    <ThemeButton />
                </div>
                <h1 className="flex items-center text-xl font-semibold hover:text-neutral-600 dark:hover:text-neutral-300 transform duration-300">
                    <Link href={'/'}>MY STORE</Link>
                </h1>
                <ul className="flex-1 basis-0 flex items-center justify-end gap-0.5 md:gap-2">
                    <li className="hidden lg:block">
                        <SearchButton
                            isHeader={true}
                            classList="w-60 py-1 pr-2.5 pl-3.5"
                            inputClassList="text-base placeholder:text-sm"
                        />
                    </li>
                    <li className="hidden sm:block">
                        <AccountButton />
                    </li>
                    <li className="block sm:hidden">
                        <ThemeButton />
                    </li>
                    <li>
                        <CartButton />
                    </li>
                    <li className="block sm:hidden">
                        <MenuButton />
                    </li>
                </ul>
            </Wrap>
        </header>
    );
}
