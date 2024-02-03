import { default as withPWA } from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... outras opções que você deseja
};

const withPWAConfig = withPWA({
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  dest: "public",
  fallbacks: {
    //image: "/static/images/fallback.png",
    document: "/offline", // se você deseja usar uma página personalizada em vez de /_offline
    // font: '/static/font/fallback.woff2',
    // audio: ...,
    // video: ...,
  },
  workboxOptions: {
    disableDevLogs: true,
  },
  // ... outras opções que você gosta
});

export default withPWAConfig(nextConfig);
