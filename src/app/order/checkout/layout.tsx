'use client';

import { useEffect, useState } from 'react';
import Page from '@/components/common/template/Page';
import Wrap from '@/components/common/template/Wrap';
import OrderLoading from '@/components/_order/OrderLoading';

export default function OrderCheckoutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <Page>
            <Wrap>
                <h2 className="text-2xl sm:text-3xl font-semibold w-full m-6 py-4 px-1">
                    {'Checkout'}
                </h2>
                {isLoading ? <OrderLoading /> : children}
            </Wrap>
        </Page>
    );
}
