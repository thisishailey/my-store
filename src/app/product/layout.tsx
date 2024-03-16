import Page from '@/components/common/template/Page';

export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Page>{children}</Page>;
}
