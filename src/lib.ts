'use server';

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { getUserInfo } from '@/api/users';
import type { IUserSession } from '@/types/user';

const secretKey = 'secret';
const key = new TextEncoder().encode(secretKey);
const expirationTime = 60 * 60 * 10;

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('10 hrs from now')
        .sign(key);
}

export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ['HS256'],
    });

    return payload;
}

export async function login(email: string) {
    const user = getUserInfo(email);

    const expires = new Date(Date.now() + expirationTime * 1000);
    const session = await encrypt({ user, expires });

    cookies().set('session', session, { expires, httpOnly: true });
}

export async function logout() {
    cookies().set('session', '', { expires: new Date(0) });
}

export async function getSession() {
    const session = cookies().get('session')?.value;
    if (!session) return null;
    return (await decrypt(session)) as IUserSession;
}

export async function updateSession(request: NextRequest) {
    const session = request.cookies.get('session')?.value;
    if (!session) return;

    const parsed = await decrypt(session);
    parsed.expires = new Date(Date.now() + expirationTime * 1000);

    const res = NextResponse.next();
    res.cookies.set({
        name: 'session',
        value: await encrypt(parsed),
        httpOnly: true,
        expires: parsed.expires,
    });

    return res;
}
