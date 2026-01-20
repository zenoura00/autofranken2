/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ السماح بالنشر حتى لو وُجدت أخطاء TypeScript
  typescript: {
    ignoreBuildErrors: true,
  },

  // (اختياري) لو احتجت مستقبلًا إعدادات إضافية
  reactStrictMode: true,

  // 🔁 Redirect legacy dash URLs to the canonical routes
  // Examples:
  //   /auto-verkaufen-altes-auto  -> /auto-verkaufen/altes-auto
  //   /autoankauf-aalen           -> /autoankauf/aalen
  async redirects() {
    return [
      {
        source: "/auto-verkaufen-:case",
        destination: "/auto-verkaufen/:case",
        permanent: true,
      },
      {
        source: "/autoankauf-:city",
        destination: "/autoankauf/:city",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
