import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import type { TSortOption } from '@/types/sortOption';

interface SortProps {
    sortOption: TSortOption;
    changeSortOption: (id: TSortOption) => void;
}

const sortList: { id: TSortOption; text: string; smallText: string }[] = [
    { id: 'latest', text: 'Latest Arrivals', smallText: 'Latest' },
    { id: 'cheap', text: 'Price: Low to High', smallText: 'Lowest Price' },
    { id: 'expensive', text: 'Price: High to Low', smallText: 'Highest Price' },
];

export function RadioSort({ sortOption, changeSortOption }: SortProps) {
    return (
        <fieldset className="flex flex-col gap-2">
            <legend className="ml-4 text-xs lg:text-sm font-medium text-gray-500 dark:text-neutral-300">
                SORT BY
            </legend>
            {sortList.map((sort) => {
                return (
                    <div className="flex items-center" key={sort.id}>
                        <input
                            type="radio"
                            name="sort"
                            id={sort.id}
                            className="appearance-none w-1 h-1 rounded-full checked:bg-gray-800 dark:checked:bg-white"
                            checked={sortOption === sort.id}
                            readOnly
                        />
                        <label
                            htmlFor={sort.id}
                            className={
                                sortOption === sort.id
                                    ? 'ml-3 text-xs lg:text-sm cursor-pointer'
                                    : 'ml-3 text-xs lg:text-sm cursor-pointer text-gray-500 dark:text-neutral-400'
                            }
                            onClick={() => changeSortOption(sort.id)}
                        >
                            {sort.text}
                        </label>
                    </div>
                );
            })}
        </fieldset>
    );
}

export function ListboxSort({ sortOption, changeSortOption }: SortProps) {
    return (
        <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium text-gray-500 dark:text-neutral-300">
                SORT BY
            </span>
            <div className="relative">
                <Listbox value={sortOption} onChange={changeSortOption}>
                    <Listbox.Button className="flex items-center justify-between w-32 p-1 px-2 outline-0 text-sm rounded-lg border-1 border-gray-400 dark:border-neutral-500 bg-white dark:!bg-black">
                        <span>
                            {
                                sortList.find((sort) => sort.id === sortOption)
                                    ?.smallText
                            }
                        </span>
                        <ChevronDownIcon className="w-3" />
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute z-30 w-32 mt-1 p-1 !py-1.5 text-sm shadow-md rounded-lg border-1 border-gray-300 dark:border-neutral-700 bg-white dark:!bg-black">
                            {sortList.map((sort) => (
                                <Listbox.Option
                                    key={sort.id}
                                    value={sort.id}
                                    className="py-1 first:!pt-0 last:!pb-0 border-b last:border-0 border-gray-300 dark:border-neutral-700 cursor-pointer"
                                >
                                    <span className="block w-full p-1.5 rounded-md hover:bg-gray-200/80 dark:hover:bg-neutral-700/80 transition duration-300">
                                        {sort.smallText}
                                    </span>
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </Listbox>
            </div>
        </div>
    );
}
