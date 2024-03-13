import type { IUserInfo } from '@/types/user';

const usersData: IUserInfo[] = [
    {
        firstName: 'User',
        lastName: 'User',
        phone: '01010101010',
        email: 'user@email.com',
        password: 'password',
        notification: {
            email: false,
            sms: false,
        },
    },
];

interface LogInAttempt {
    email: string;
    password: string;
}

export const authenticate = (attempt: LogInAttempt) => {
    const user = usersData.find((user) => user.email === attempt.email);
    if (user && user.password === attempt.password) {
        return true;
    }
    return false;
};

export const getUserInfo = (email: string) => {
    const user = usersData.find((user) => user.email === email);
    return user;
};

export const createUser = (info: IUserInfo) => {
    if (!usersData.some((user) => user.email === info.email)) {
        usersData.push(info);
        return true;
    }
    return false;
};
