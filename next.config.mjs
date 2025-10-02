/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const isProd =
      process.env.VERCEL_ENV === 'production' ||
      process.env.NODE_ENV === 'production';

    return isProd
      ? [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'Strict-Transport-Security',
                value: 'max-age=31536000; includeSubDomains; preload',
              },
            ],
          },
        ]
      : [];
  },
};

export default nextConfig;
