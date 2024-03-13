import Page from '@/components/common/template/Page';

export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Page classList="py-10 px-4 min-h-screen">{children}</Page>;
}
