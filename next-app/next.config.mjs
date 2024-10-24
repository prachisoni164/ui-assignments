/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,  // Disable strict mode for debugging
    images: {
        domains: ['cdn.dummyjson.com'], // Add your image domain here
    },
    webpack(config, { dev }) {
        if (!dev) {
            // Enable source maps in production
            config.devtool = 'source-map';
        }
        return config;
    },
};

export default nextConfig;