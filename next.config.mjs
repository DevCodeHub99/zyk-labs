/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Performance ────────────────────────────────────────────
  compress: true,
  poweredByHeader: false, // Remove X-Powered-By header (security + best practices)

  // ── Image Optimisation ─────────────────────────────────────
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year cache for optimised images
  },

  // ── Security & SEO Headers ─────────────────────────────────
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent clickjacking — Lighthouse Best Practices
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Stop MIME sniffing — Lighthouse Best Practices
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Force HTTPS — Lighthouse Best Practices + SEO
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          // Control referrer info sent — privacy best practice
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Restrict browser features — security best practice
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
          // Prevent XSS — Lighthouse Best Practices
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ]
  },
}

export default nextConfig
