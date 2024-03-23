import OrderSummary from '@/components/common/OrderSummary';
import type IOrder from '@/types/order';

export default function CompleteSummary({
    currentOrder,
}: {
    currentOrder: IOrder;
}) {
    const subtotal = currentOrder.orderItems.reduce((acc, cur) => {
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
            items={currentOrder.orderItems}
            isOrderComplete={true}
            orderId={currentOrder.orderId}
        />
    );
}
