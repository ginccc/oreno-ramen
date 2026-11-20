import type { APIRoute } from 'astro';
import { url, indexable } from '../lib/url';

// Note: crawlers only read robots.txt at the root of a host. On a GitHub project
// site (owner.github.io/repo/) this file is not at the root, so the noindex meta
// tag in the page head is what actually keeps the site out of search results.
export const GET: APIRoute = ({ site }) =>
  new Response(
    indexable
      ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL(url('sitemap-index.xml'), site).href}\n`
      : 'User-agent: *\nDisallow: /\n',
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
