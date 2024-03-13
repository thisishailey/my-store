import Link from 'next/link';
import Page from '@/components/common/template/Page';
import Wrap from '@/components/common/template/Wrap';

export default async function NotFound() {
    return (
        <Page>
            <Wrap>
                <div className="max-w-3xl min-h-screen mx-auto pt-20">
                    <h2 className="text-3xl font-semibold">Not Found</h2>
                    <p className="mt-10 mb-14">
                        Could not find requested resource
                    </p>
                    <Link
                        href="/"
                        className="py-2 px-3 rounded-lg border-1 border-neutral-400 hover:bg-gray-100 dark:hover:bg-neutral-800 transition duration-300"
                    >
                        Return Home
                    </Link>
                </div>
            </Wrap>
        </Page>
    );
}
