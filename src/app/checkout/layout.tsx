import Page from '@/components/common/template/Page';

export default function CheckoutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Page>{children}</Page>;
}
