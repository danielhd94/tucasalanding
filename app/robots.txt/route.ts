import { NextResponse } from "next/server";

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://tucasarestaurantes.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Block access to admin areas (if any)
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow all search engines to index the main content
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /`;

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
