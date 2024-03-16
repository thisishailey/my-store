import Page from '@/components/common/template/Page';

export default function SearchLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Page>{children}</Page>;
}
