import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getSession } from '@/lib';

type AccountState = {
    user: string;
};

type AccountActions = {
    getUser: () => Promise<void>;
};

type AccountStore = AccountState & AccountActions;

const defaultInitState: AccountState = {
    user: '',
};

export const useAccountStore = create<AccountStore>()(
    persist(
        (set) => ({
            ...defaultInitState,
            getUser: async () => {
                const session = await getSession();
                const user = session?.user.email || '';
                set({ user: user });
            },
        }),
        { name: 'user' }
    )
);
