'use client';

import { useRouter } from 'next/navigation';

export default function CancelButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            type="button"
            className="rounded-md px-4 py-2 text-base sm:text-lg text-blue-600 hover:bg-blue-100 dark:hover:bg-black"
        >
            {'Cancel'}
        </button>
    );
}
