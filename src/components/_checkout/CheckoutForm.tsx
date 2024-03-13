import CheckoutSummary from '@/components/_checkout/CheckoutSummary';

interface Props {
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
}

export default function CheckoutForm(props: Props) {
    const formInputs = [
        {
            id: 'first-name',
            text: 'First name',
            type: 'text',
            value: props?.firstName,
        },
        {
            id: 'last-name',
            text: 'Last name',
            type: 'text',
            value: props?.lastName,
        },
        {
            id: 'phone',
            text: 'Phone number',
            type: 'tel',
            value: props?.phone,
        },
        {
            id: 'email',
            text: 'Email address',
            type: 'email',
            value: props?.email,
        },
        { id: 'address', text: 'Shipping Address', type: 'text' },
    ];

    return (
        <form className="flex flex-col md:flex-row items-center justify-between gap-14 p-4 !mb-20 checkout-form">
            <div className="w-full md:max-w-lg">
                {formInputs.map((input) => (
                    <div key={input.id}>
                        <label
                            htmlFor={input.id}
                            className="block text-sm sm:text-base font-medium"
                        >
                            {input.text}
                        </label>
                        <div className="mt-2 mb-6">
                            <input
                                id={input.id}
                                name={input.id}
                                type={input.type}
                                value={input.value}
                                autoComplete="off"
                                readOnly={input.value !== undefined}
                                required
                                className="block w-full py-1.5 px-2.5 text-base sm:text-lg rounded-lg border-1 dark:border-neutral-400 focus-visible:!border-transparent outline-0 !bg-white dark:!bg-black !shadow ring-inset ring-gray-300 dark:ring-neutral-400 hover:ring-1 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-700"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <CheckoutSummary />
        </form>
    );
}
