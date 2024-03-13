'use client';

import { useState } from 'react';
import Wrap from '@/components/common/template/Wrap';
import { RadioSort, ListboxSort } from '@/components/_product/_category/Sort';
import type { TSortOption } from '@/types/sortOption';

interface CategoryLayoutProps {
    children: React.ReactNode;
    latest: React.ReactNode;
    cheap: React.ReactNode;
    expensive: React.ReactNode;
}

export default function ProductCategoryLayout(props: CategoryLayoutProps) {
    const [sortOption, setSortOption] = useState<TSortOption>('latest');

    const changeSortOption = (id: TSortOption) => {
        setSortOption(id);
    };

    return (
        <Wrap classList="flex justify-between flex-col md:flex-row">
            <div className="w-1/5 text-sm hidden md:block">
                <RadioSort
                    sortOption={sortOption}
                    changeSortOption={changeSortOption}
                />
            </div>
            <div className="block md:hidden flex justify-end">
                <ListboxSort
                    sortOption={sortOption}
                    changeSortOption={setSortOption}
                />
            </div>
            <div className="w-full md:w-4/5">
                {props.children}
                {sortOption === 'latest' && props.latest}
                {sortOption === 'cheap' && props.cheap}
                {sortOption === 'expensive' && props.expensive}
            </div>
        </Wrap>
    );
}
