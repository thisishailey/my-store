'use client';

import { useOrderStore } from '@/stores/orderStore';
import CompleteSummary from '@/components/_order/CompleteSummary';

export default function OrderCompletePage() {
    const { currentOrder } = useOrderStore();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 py-10">
            <div className="w-full md:m-6">
                <span className="font-medium text-blue-600">
                    {'Payment successful'}
                </span>
                <h2 className="mt-2 mb-6 text-3xl font-semibold">
                    {'Thanks for ordering'}
                </h2>
                <p>
                    {
                        "We appreciate your order, we're currently processing it. So hang tight and we'll send you confirmation very soon!"
                    }
                </p>
            </div>
            <div className="flex justify-center m-6">
                <CompleteSummary currentOrder={currentOrder} />
            </div>
        </div>
    );
}
