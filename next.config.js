/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.mapbox.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
