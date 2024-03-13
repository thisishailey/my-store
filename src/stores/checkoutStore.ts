import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type ICartItem from '@/types/cartItem';

type CheckoutState = {
    checkout: ICartItem[];
    fromCart: boolean;
};

type CheckoutActions = {
    setCheckout: (items: ICartItem[], from?: boolean) => void;
    clearCheckout: () => void;
};

type CheckoutStore = CheckoutState & CheckoutActions;

const defaultInitState: CheckoutState = {
    checkout: [],
    fromCart: false,
};

export const useCheckoutStore = create<CheckoutStore>()(
    persist(
        (set) => ({
            ...defaultInitState,
            setCheckout: (items, from = false) => {
                set({ checkout: items, fromCart: from });
            },
            clearCheckout: () => {
                set(defaultInitState);
            },
        }),
        { name: 'checkout' }
    )
);
