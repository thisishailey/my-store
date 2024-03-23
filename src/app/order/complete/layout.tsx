'use client';

import { useEffect, useState } from 'react';
import Page from '@/components/common/template/Page';
import Wrap from '@/components/common/template/Wrap';
import OrderLoading from '@/components/_order/OrderLoading';

export default function OrderCompleteLayout({
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
            <Wrap>{isLoading ? <OrderLoading /> : children}</Wrap>
        </Page>
    );
}
