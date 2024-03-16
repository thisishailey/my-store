import Page from '@/components/common/template/Page';

export default function CartLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Page>{children}</Page>;
}
