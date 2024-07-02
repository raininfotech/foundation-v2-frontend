/** @type {import('next').NextConfig} */

let distDir = process.env.NEXT_BUILD_OWN_FOLDER || '.next'
const nextConfig = {
    reactStrictMode: process.env.NODE_ENV === "production",
    images: {
        unoptimized: true,
    },
    env: {
        SITENAME: 'Silver Mining Pool',
        BASEURL: 'http://192.168.0.24:2006/',
        APIURL: 'http://192.168.0.24:2006/api',
        EXP_URL: 'https://explorer.getbitcoinsilver.org',
        BACKEND_API: 'https://pool-api.getbitcoinsilver.org/api/v2',
        STRATRUM_URL: "stratum+tcp://57.129.0.168:3002",
        POOL_NAME: "Pool-Bitcoin",
        COIN_NAME: "Silver"
    }
};

export default nextConfig;
