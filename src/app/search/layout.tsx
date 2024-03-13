import Page from '@/components/common/template/Page';

export default function SearchLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Page classList="py-10 px-4 min-h-screen">{children}</Page>;
}
