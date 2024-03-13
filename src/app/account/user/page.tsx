import Wrap from '@/components/common/template/Wrap';
import { getCurrentUser, handleLogout } from './action';
import type { IUserSession } from '@/types/user';

export default async function UserPage() {
    const user = (await getCurrentUser()) as IUserSession;

    const info = [
        'First name',
        'Last name',
        'Phone',
        'Email',
        'Password',
        'Notification',
    ];

    const infoList = Object.values(user.user).map((data, i) => {
        return { id: i, title: info[i], data: data };
    });
    infoList.pop();

    return (
        <Wrap>
            <h2 className="pt-10 text-center text-3xl font-medium">
                Welcome, {user?.user.firstName}!
            </h2>
            <div className="mt-20 p-4 sm:max-w-sm lg:max-w-lg mx-auto rounded-xl shadow-md ring-2 ring-gray-200/50 dark:ring-neutral-700/10 bg-gray-100 dark:bg-neutral-800">
                <h3 className="!mb-4 !pb-4 border-b border-gray-300 dark:border-neutral-400 text-2xl font-medium">
                    Personal Info
                </h3>
                <ul className="space-y-6">
                    {infoList.map((info) => {
                        return (
                            <li key={info.id}>
                                <span className="inline-block w-24 font-medium">
                                    {info.title}
                                </span>
                                {info.title === 'Password' ? (
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={info.data}
                                        className="bg-white dark:!bg-neutral-800 border-1 dark:border-neutral-400 rounded-lg pl-2"
                                        readOnly
                                    />
                                ) : (
                                    <span>{info.data}</span>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <form
                action={handleLogout}
                className="pt-20 text-center sm:max-w-sm lg:max-w-lg mx-auto"
            >
                <button
                    type="submit"
                    className="py-2.5 px-14 rounded-lg shadow-md text-xl text-white bg-blue-600 hover:bg-blue-700 transform duration-300"
                >
                    Log Out
                </button>
            </form>
        </Wrap>
    );
}
