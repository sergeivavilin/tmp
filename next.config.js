const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})


/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	reactStrictMode: true,
  compress: true,
	images: {
    // unoptimized: true,
    formats: ['image/avif', 'image/webp'],

  },
	experimental: {
		optimizeCss: true,
	},
	trailingSlash: true,
};

module.exports = withBundleAnalyzer(nextConfig);

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

// module.exports = withBundleAnalyzer({
//   reactStrictMode: true,
//   compress: true,
//   images: {
//     formats: ['image/avif', 'image/webp'],
//     domains: ['yourdomain.com'],
//   },
//   experimental: {
//     optimizeCss: true,
//   },
// })
