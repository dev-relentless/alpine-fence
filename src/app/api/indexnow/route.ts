import { NextRequest, NextResponse } from 'next/server';

/**
 * IndexNow API endpoint for Bing/Yandex instant indexing.
 * POST /api/indexnow with { urls: string[] } to notify search engines of new/updated pages.
 *
 * Requires INDEXNOW_API_KEY environment variable.
 * Get your key from https://www.bing.com/indexnow
 *
 * Usage: After publishing new content, call this endpoint with the updated URLs.
 */
export async function POST(request: NextRequest) {
  const apiKey = process.env.INDEXNOW_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'IndexNow API key not configured' },
      { status: 500 }
    );
  }

  const body = await request.json();
  const urls: string[] = body.urls;

  if (!urls || !Array.isArray(urls) || urls.length === 0) {
    return NextResponse.json(
      { error: 'urls array is required' },
      { status: 400 }
    );
  }

  // Validate all URLs belong to our domain
  const validHost = 'alpinefenceanddeck.com';
  for (const url of urls) {
    try {
      const parsed = new URL(url);
      if (parsed.hostname !== validHost && parsed.hostname !== `www.${validHost}`) {
        return NextResponse.json(
          { error: `URL ${url} does not belong to ${validHost}` },
          { status: 400 }
        );
      }
    } catch {
      return NextResponse.json(
        { error: `Invalid URL: ${url}` },
        { status: 400 }
      );
    }
  }

  const payload = {
    host: validHost,
    key: apiKey,
    keyLocation: `https://${validHost}/${apiKey}.txt`,
    urlList: urls.slice(0, 10000), // IndexNow limit: 10,000 URLs per request
  };

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });

  if (response.ok || response.status === 202) {
    return NextResponse.json({
      success: true,
      message: `${urls.length} URL(s) submitted to IndexNow (Bing, Yandex, Naver, Seznam)`,
      submittedUrls: urls.length,
    });
  }

  return NextResponse.json(
    {
      error: 'IndexNow submission failed',
      status: response.status,
      statusText: response.statusText,
    },
    { status: 502 }
  );
}
