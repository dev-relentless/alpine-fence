import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // Google AI / Gemini crawler
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      // OpenAI / ChatGPT web crawler
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // OpenAI ChatGPT user-facing browse
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      // Anthropic / Claude crawler
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      // Perplexity AI
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // Bing / Microsoft AI (Copilot)
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      // Meta AI crawler
      {
        userAgent: 'FacebookBot',
        allow: '/',
      },
      // Apple intelligence / Siri
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
      // Cohere AI
      {
        userAgent: 'cohere-ai',
        allow: '/',
      },
    ],
    sitemap: 'https://alpinefenceanddeck.com/sitemap.xml',
  };
}
