'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCheckoutStore } from '@/stores/checkoutStore';
import { useOrderStore } from '@/stores/orderStore';
import { useCartStore } from '@/stores/cartStore';
import OrderSummary from '@/components/common/OrderSummary';

export default function CheckoutSummary() {
    const { replace } = useRouter();

    const { checkout, fromCart, clearCheckout } = useCheckoutStore();
    const { addOrder } = useOrderStore();
    const { emptyCart } = useCartStore();

    const handleOrderComplete = (e: SubmitEvent) => {
        e.preventDefault();
        addOrder(checkout);
        clearCheckout();
        if (fromCart) {
            emptyCart();
        }
        replace('/checkout/success');
    };

    useEffect(() => {
        const form = document.querySelector(
            '.checkout-form'
        ) as HTMLFormElement;
        form.onsubmit = handleOrderComplete;
    }, []);

    const subtotal = checkout.reduce((acc, cur) => {
        return cur.price * cur.qty + acc;
    }, 0);
    const shipping = 5;
    const tax = subtotal * 0.07;
    const total = subtotal + shipping + tax;

    return (
        <OrderSummary
            subtotal={subtotal}
            shipping={shipping}
            tax={tax}
            total={total}
            hasItems={true}
            items={checkout}
            isOrderComplete={false}
        />
    );
}
