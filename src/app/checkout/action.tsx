'use server';

import { getSession } from '@/lib';

export async function getCurrentUser() {
    const user = await getSession();
    return user;
}
