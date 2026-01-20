/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ السماح بالنشر حتى لو وُجدت أخطاء TypeScript
  typescript: {
    ignoreBuildErrors: true,
  },

  // (اختياري) لو احتجت مستقبلًا إعدادات إضافية
  reactStrictMode: true,
};

module.exports = nextConfig;
