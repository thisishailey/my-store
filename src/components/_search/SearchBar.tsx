'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SearchBar({ query }: { query: string }) {
    const [term, setTerm] = useState(query || '');
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    function handleSearch() {
        const params = new URLSearchParams(searchParams);
        params.set('query', term);
        replace(`/search?${params.toString()}`);
    }

    return (
        <form
            action={handleSearch}
            className="relative flex flex-1 max-w-xl mx-auto"
        >
            <input
                name="search"
                className="peer block w-full py-2 pl-10 shadow-md text-lg lg:text-xl placeholder:text-gray-500 dark:placeholder:text-neutral-400 outline-0 rounded-lg border-1 border-gray-200 dark:border-neutral-700 focus-visible:border-gray-500 dark:focus-visible:border-neutral-400 bg-white dark:!bg-black"
                placeholder="Search products"
                autoComplete="off"
                onChange={(e) => {
                    setTerm(e.target.value);
                }}
                defaultValue={query}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 dark:text-neutral-400 peer-focus:text-gray-900 dark:peer-focus:text-white" />
        </form>
    );
}
