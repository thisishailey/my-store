'use client';

import { useRouter } from 'next/navigation';
import { useCheckoutStore } from '@/stores/checkoutStore';
import OrderSummary from '@/components/common/OrderSummary';
import type ICartItem from '@/types/cartItem';

export default function CartSummary({ cart }: { cart: ICartItem[] }) {
    const { push } = useRouter();
    const { setCheckout } = useCheckoutStore();

    const handleCheckout = () => {
        setCheckout(cart, true);
        push('/checkout');
    };

    const subtotal = cart.reduce((acc, cur) => {
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
            hasItems={false}
            onClick={handleCheckout}
            isOrderComplete={false}
        />
    );
}
