import Page from '@/components/common/template/Page';

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Page>{children}</Page>;
}
