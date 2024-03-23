'use server';

import CheckoutForm from '@/components/_checkout/CheckoutForm';
import { getCurrentUser } from '@/app/checkout/action';

export default async function CheckoutPage() {
    const user = await getCurrentUser();
    return (
        <>
            {user ? (
                <CheckoutForm
                    firstName={user.user.firstName}
                    lastName={user.user.lastName}
                    phone={user.user.phone}
                    email={user.user.email}
                />
            ) : (
                <CheckoutForm />
            )}
        </>
    );
}
