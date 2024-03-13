import Wrap from '@/components/common/template/Wrap';
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
            <SearchBar query={query} />
            <div className="h-12"></div>
            <SearchResult query={query} />
        </Wrap>
    );
}
