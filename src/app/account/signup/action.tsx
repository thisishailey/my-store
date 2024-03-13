'use server';

import { redirect } from 'next/navigation';
import { createUser } from '@/api/users';
import { login } from '@/lib';

export default async function handleSubmit(formData: FormData) {
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const notifyEmail = formData.get('notify-email') ? true : false;
    const notifySMS = formData.get('notify-sms') ? true : false;

    if (
        createUser({
            firstName,
            lastName,
            phone,
            email,
            password,
            notification: { email: notifyEmail, sms: notifySMS },
        })
    ) {
        await login(email);
        redirect('/account/user');
    } else {
        throw new Error(
            'This email address is already in use. Please sign in to your account or use another email to sign up.'
        );
    }
}
