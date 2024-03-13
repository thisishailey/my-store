export interface IUserInfo {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
    notification: {
        email: boolean;
        sms: boolean;
    };
}

export interface IUserSession {
    user: IUserInfo;
    expires: Date;
}
