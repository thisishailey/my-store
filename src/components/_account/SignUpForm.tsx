'use client';

import { useRouter } from 'next/navigation';

export default function SignUpForm({
    action,
}: {
    action: (formData: FormData) => Promise<void>;
}) {
    const router = useRouter();

    const formInputs = [
        { id: 'firstName', text: 'First name', type: 'text' },
        { id: 'lastName', text: 'Last name', type: 'text' },
        { id: 'phone', text: 'Phone number', type: 'tel' },
        { id: 'email', text: 'Email address', type: 'email' },
        { id: 'password', text: 'Password', type: 'password' },
    ];

    return (
        <form className="sm:w-full sm:max-w-3xl sm:mx-auto" action={action}>
            {formInputs.map((input) => (
                <div className="!mb-6 sm:max-w-lg" key={input.id}>
                    <label
                        htmlFor={input.id}
                        className="block text-sm sm:text-base font-medium"
                    >
                        {input.text}
                    </label>
                    <div className="mt-2">
                        <input
                            id={input.id}
                            name={input.id}
                            type={input.type}
                            autoComplete="off"
                            required
                            className="block w-full py-1.5 px-2.5 text-base sm:text-lg rounded-lg border-1 dark:border-neutral-400 focus-visible:!border-transparent outline-0 !bg-white dark:!bg-black !shadow ring-inset ring-gray-300 dark:ring-neutral-400 hover:ring-1 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-700"
                        />
                    </div>
                </div>
            ))}

            <div className="mt-12 pt-12 border-t border-gray-300 dark:border-neutral-400">
                <h2 className="text-lg sm:text-xl font-semibold">
                    Notifications
                </h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                    We'll let you know about new arrivals, discounts, events,
                    and more!
                </p>

                <div className="mt-10 space-y-4">
                    <div className="flex items-center">
                        <input
                            id="notify-email"
                            name="notify-email"
                            type="checkbox"
                            className="checkbox h-5 w-5 rounded border-neutral-400 checked:border-blue-600 [--chkbg:theme(colors.blue.600)] [--chkfg:white]"
                        />
                        <label
                            htmlFor="notify-email"
                            className="ml-4 text-sm sm:text-base cursor-pointer"
                        >
                            Receive Email Notifications
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            id="notify-sms"
                            name="notify-sms"
                            type="checkbox"
                            className="checkbox h-5 w-5 rounded border-neutral-400 checked:border-blue-600 [--chkbg:theme(colors.blue.600)] [--chkfg:white]"
                        />
                        <label
                            htmlFor="notify-sms"
                            className="ml-4 text-sm sm:text-base cursor-pointer"
                        >
                            Receive SMS Push Notifications
                        </label>
                    </div>
                </div>
            </div>

            <div className="my-12 text-center text-xs">
                By creating an account, you agree to My Store's{' '}
                <span className="underline cursor-pointer">Privacy Policy</span>
                {' and '}
                <span className="underline cursor-pointer">Terms of Use</span>.
            </div>

            <div className="mt-6 flex justify-center gap-2">
                <button
                    type="submit"
                    className="rounded-md px-14 py-2 text-base sm:text-lg text-white shadow-md bg-blue-600 hover:bg-blue-700"
                >
                    Join
                </button>
                <button
                    onClick={() => router.back()}
                    type="button"
                    className="rounded-md px-4 py-2 text-base sm:text-lg text-blue-600 hover:bg-blue-100 dark:hover:bg-black"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}
