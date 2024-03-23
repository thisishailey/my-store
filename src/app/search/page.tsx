import { Suspense } from 'react';
import Wrap from '@/components/common/template/Wrap';
import SearchLoading from '@/components/_search/SearchLoading';
import SearchBar from '@/components/_search/SearchBar';
import SearchResult from '@/components/_search/SearchResult';

export default function SearchPage({
    searchParams,
}: {
    searchParams: { query: string };
}) {
    const query = searchParams.query;

    return (
        <Wrap classList="px-4">
            <div className="h-12"></div>
            <Suspense fallback={<SearchLoading />}>
                <SearchBar query={query} />
            </Suspense>
            <div className="h-12"></div>
            <SearchResult query={query} />
        </Wrap>
    );
}
