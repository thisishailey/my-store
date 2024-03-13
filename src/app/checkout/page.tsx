import Wrap from '@/components/common/template/Wrap';
import CheckoutForm from '@/components/_checkout/CheckoutForm';
import { getCurrentUser } from './action';

export default async function CheckoutPage() {
    const user = await getCurrentUser();

    return (
        <Wrap>
            <h2 className="text-2xl sm:text-3xl font-semibold w-full m-6 py-4 px-1">
                Checkout
            </h2>
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
        </Wrap>
    );
}
