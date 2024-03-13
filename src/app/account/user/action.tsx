'use server';

import { redirect } from 'next/navigation';
import { getSession, logout } from '@/lib';

export async function getCurrentUser() {
    const user = await getSession();
    return user;
}

export async function handleLogout() {
    await logout();
    redirect('/account/login');
}
