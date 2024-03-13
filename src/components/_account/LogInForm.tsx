import Link from 'next/link';

interface Props {
    action: (formData: FormData) => void;
    emailInputRef: React.RefObject<HTMLInputElement>;
    passwordInputRef: React.RefObject<HTMLInputElement>;
}

export default function LogInForm({
    action,
    emailInputRef,
    passwordInputRef,
}: Props) {
    return (
        <form action={action}>
            <div className="!mb-6">
                <label
                    htmlFor="email"
                    className="block text-sm sm:text-base font-medium"
                >
                    Email address
                </label>
                <div className="mt-2">
                    <input
                        ref={emailInputRef}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="off"
                        required
                        className="block w-full py-1.5 px-2.5 text-base sm:text-lg rounded-lg border-1 dark:border-neutral-400 focus-visible:!border-transparent outline-0 !bg-white dark:!bg-black !shadow ring-inset ring-gray-300 dark:ring-neutral-400 hover:ring-1 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-700"
                    />
                </div>
            </div>

            <div className="!mb-10 sm:!mb-12">
                <div className="flex items-center justify-between">
                    <label
                        htmlFor="password"
                        className="block text-sm sm:text-base font-medium"
                    >
                        Password
                    </label>
                    <a
                        href="/"
                        className="text-xs font-medium text-blue-600 hover:text-blue-500"
                    >
                        Forgot password?
                    </a>
                </div>
                <div className="mt-2">
                    <input
                        ref={passwordInputRef}
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="off"
                        required
                        className="block w-full py-1.5 px-2.5 text-base sm:text-lg rounded-lg border-1 dark:border-neutral-400 focus-visible:!border-transparent outline-0 !bg-white dark:!bg-black !shadow ring-inset ring-gray-300 dark:ring-neutral-400 hover:ring-1 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-700"
                    />
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    className="flex justify-center w-full p-2.5 rounded-lg text-lg text-white shadow-sm bg-blue-600 hover:bg-blue-700 transition duration-300"
                >
                    Sign in
                </button>
            </div>

            <p className="mt-6 text-center text-sm sm:text-base text-gray-500">
                Not a member?
                <Link
                    href="/account/signup"
                    className="ml-4 font-medium text-blue-600 hover:text-blue-500"
                >
                    Join us
                </Link>
            </p>
        </form>
    );
}
