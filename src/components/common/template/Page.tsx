interface PageProps {
    children?: React.ReactNode;
    home?: boolean;
}

export default function Page({ children, home }: PageProps) {
    const pageClasses =
        'relative top-16 min-h-screen py-10 px-4 bg-neutral-50 dark:bg-neutral-900 ';
    const homePageClasses =
        'relative top-16 min-h-screen bg-neutral-50 dark:bg-neutral-900 ';

    return (
        <main className={home ? homePageClasses : pageClasses}>{children}</main>
    );
}
