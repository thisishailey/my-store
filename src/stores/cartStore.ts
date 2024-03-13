import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type IProduct from '@/types/productData';
import type ICartItem from '@/types/cartItem';

type CartState = {
    cart: ICartItem[];
};

type CartActions = {
    addItem: (item: IProduct) => void;
    decrementQty: (id: number) => void;
    incrementQty: (id: number) => void;
    removeItem: (id: number) => void;
    emptyCart: () => void;
};

type CartStore = CartState & CartActions;

const defaultInitState: CartState = {
    cart: [],
};

export const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
            ...defaultInitState,
            addItem: (item) =>
                set((state) => ({
                    cart: state.cart.concat({ ...item, qty: 1 }),
                })),
            incrementQty: (id) =>
                set((state) => ({
                    cart: state.cart.map((item) => {
                        if (item.id === id) {
                            return { ...item, qty: item.qty + 1 };
                        } else {
                            return item;
                        }
                    }),
                })),
            decrementQty: (id) =>
                set((state) => ({
                    cart: state.cart.map((item) => {
                        if (item.id === id) {
                            return { ...item, qty: item.qty - 1 };
                        } else {
                            return item;
                        }
                    }),
                })),
            removeItem: (id) =>
                set((state) => ({
                    cart: state.cart.filter((item) => item.id !== id),
                })),
            emptyCart: () => set(defaultInitState),
        }),
        { name: 'cart' }
    )
);
