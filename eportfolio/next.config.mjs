/** @type {import('next').NextConfig} */
const nextConfig = {
    //utilized from https://github.com/gregrickaby/nextjs-github-pages Thanks Greg!
    output: "export",
    basePath: "/nextjs-github-pages",
    images: {
        unoptimized: true,
      }
};

export default nextConfig;
