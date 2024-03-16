import Page from '@/components/common/template/Page';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Page>{children}</Page>;
}
