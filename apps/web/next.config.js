/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui", "@repo/dashboard", "@repo/profile"],
};

export default nextConfig;
