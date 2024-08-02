/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.externals = [...config.externals, "@node-rs/argon2"];
        return config;
    },
};

export default nextConfig;
