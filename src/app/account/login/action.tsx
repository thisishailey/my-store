'use server';

import { redirect } from 'next/navigation';
import { authenticate } from '@/api/users';
import { login } from '@/lib';

export default async function handleSubmit(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (authenticate({ email, password })) {
        await login(email);
        redirect('/account/user');
    } else {
        throw new Error('Your email or password is invalid. Please try again.');
    }
}
