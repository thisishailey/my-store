import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/common/layout/Header';
import Footer from '@/components/common/layout/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const dynamicParams = false;

export const metadata: Metadata = {
    title: 'My Store',
    description:
        'An ecommerce website built with React, Next.js, Tailwind CSS, & more.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const bodyClasses = `${inter.className} bg-neutral-50 text-neutral-950 dark:bg-neutral-900 dark:text-neutral-50`;

    return (
        <html
            lang="en"
            className="p-0 overflow-auto bg-neutral-50 dark:bg-neutral-900"
        >
            <body className={bodyClasses}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
