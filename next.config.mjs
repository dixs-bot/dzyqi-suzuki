/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  allowedDevOrigins: ["*.vercel.run", "localhost"],
  images: {
    unoptimized: true,
  },
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf|hdr|ktx2)$/,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;
