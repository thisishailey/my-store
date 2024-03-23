'use server';

import CheckoutForm from '@/components/_order/CheckoutForm';
import { getCurrentUser } from '@/app/order/checkout/action';

export default async function OrderCheckoutPage() {
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
