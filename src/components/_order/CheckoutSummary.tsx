import OrderSummary from '@/components/common/OrderSummary';
import type ICartItem from '@/types/cartItem';

export default function CheckoutSummary({
    checkout,
}: {
    checkout: ICartItem[];
}) {
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
