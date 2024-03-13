import { NextRequest, NextResponse } from 'next/server';
import { getSession, updateSession } from '@/lib';

export async function middleware(request: NextRequest) {
    await updateSession(request);

    const session = await getSession();

    if (request.nextUrl.pathname.endsWith('/account')) {
        if (session) {
            return NextResponse.redirect(new URL('/account/user', request.url));
        } else {
            return NextResponse.redirect(
                new URL('/account/login', request.url)
            );
        }
    }
}
