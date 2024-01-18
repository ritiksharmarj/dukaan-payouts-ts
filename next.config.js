/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/payouts',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
