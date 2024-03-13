'use client';

import { useRef } from 'react';
import Wrap from '@/components/common/template/Wrap';
import LogInForm from '@/components/_account/LogInForm';
import handleSubmit from './action';

export default function LogInPage() {
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const handleError = (error: Error) => {
        alert(error.message);
        const emailInput = emailInputRef.current as HTMLInputElement;
        const passwordInput = passwordInputRef.current as HTMLInputElement;
        emailInput.value = '';
        passwordInput.value = '';
        emailInput.focus();
    };

    return (
        <Wrap>
            <div className="flex flex-col justify-center py-16 px-6 lg:px-8">
                <div className="sm:w-full sm:max-w-sm sm:mx-auto space-y-6">
                    <h2 className="text-center text-2xl font-semibold uppercase">
                        Welcome back
                    </h2>
                    <p className="text-center text-sm">
                        Sign in to access an enhanced shopping experience.
                    </p>
                </div>
                <div className="!mt-16 sm:!mt-20 sm:w-full sm:max-w-sm sm:mx-auto">
                    <LogInForm
                        action={async (formData) =>
                            handleSubmit(formData).catch(handleError)
                        }
                        emailInputRef={emailInputRef}
                        passwordInputRef={passwordInputRef}
                    />
                </div>
            </div>
        </Wrap>
    );
}
