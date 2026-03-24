import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Standard crawlers ───────────────────────────────────
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/'],
      },
      // ── AI search bots — explicitly allowed ────────────────
      // Blocking these = zero visibility on ChatGPT, Perplexity, Google AI Overviews
      { userAgent: 'GPTBot', allow: '/' },           // OpenAI / ChatGPT
      { userAgent: 'PerplexityBot', allow: '/' },    // Perplexity
      { userAgent: 'ClaudeBot', allow: '/' },         // Anthropic / Claude
      { userAgent: 'anthropic-ai', allow: '/' },     // Anthropic (alternate)
      { userAgent: 'Google-Extended', allow: '/' },  // Google AI Overviews
      { userAgent: 'Applebot-Extended', allow: '/' }, // Apple Intelligence
      { userAgent: 'cohere-ai', allow: '/' },        // Cohere
      { userAgent: 'Bingbot', allow: '/' },           // Bing / Copilot
    ],
    sitemap: 'https://zyklabs.in/sitemap.xml',
    host: 'https://zyklabs.in',
  }
}

