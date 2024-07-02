/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        ppr: 'incremental', // 该'incremental'值允许您对特定路线采用 PPR。
    },
};

export default nextConfig;
