import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  /* config options here */
  // When exporting a static site, Next's Image Optimization API is not available.
  // Set `unoptimized: true` so <Image /> will render a normal <img src="..."> and
  // images from the `public/` folder load correctly in the exported site.
  images: {
    unoptimized: true,
    // Optional: Use a CDN for image optimization (uncomment and configure if using a service)
    // loader: 'custom',
    // loaderFile: './src/lib/imageLoader.ts',
  },
  // Enable compression for better performance
  compress: true,
};

export default nextConfig;
