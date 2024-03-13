/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/product/category/men's%20clothing",
                destination: '/product/category/mens-clothing',
                permanent: true,
            },
            {
                source: "/product/category/women's%20clothing",
                destination: '/product/category/womens-clothing',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
