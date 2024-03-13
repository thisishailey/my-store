'use client';

import Wrap from '@/components/common/template/Wrap';
import { useCartStore } from '@/stores/cartStore';
import { useCheckoutStore } from '@/stores/checkoutStore';
import { useOrderStore } from '@/stores/orderStore';

export default function AdminPage() {
    const { emptyCart } = useCartStore();
    const { clearCheckout } = useCheckoutStore();
    const { clearOrderHistory } = useOrderStore();

    return (
        <Wrap>
            <div className="flex justify-center gap-6">
                <button
                    className="p-3 rounded-lg bg-gray-500 text-white text-base"
                    onClick={emptyCart}
                >
                    Reset Cart
                </button>
                <button
                    className="p-3 rounded-lg bg-gray-500 text-white text-base"
                    onClick={clearCheckout}
                >
                    Reset Checkout
                </button>
                <button
                    className="p-3 rounded-lg bg-gray-500 text-white text-base"
                    onClick={clearOrderHistory}
                >
                    Reset Order History
                </button>
                <button
                    className="p-3 rounded-lg bg-gray-500 text-white text-base"
                    onClick={() => {
                        emptyCart();
                        clearCheckout();
                        clearOrderHistory();
                    }}
                >
                    Reset All
                </button>
            </div>
        </Wrap>
    );
}
