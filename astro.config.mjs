// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages serves a project site from https://<owner>.github.io/<repo>/.
// In GitHub Actions both values are derived from GITHUB_REPOSITORY, so nothing
// needs editing here. For a custom domain set SITE_URL (and BASE_PATH=/).
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserSite = repo?.endsWith('.github.io');

const site =
  process.env.SITE_URL ?? (owner ? `https://${owner}.github.io` : 'http://localhost:4321');
// Hidden from search engines unless built with PUBLIC_INDEXABLE=true (see README).
const indexable = process.env.PUBLIC_INDEXABLE === 'true';

const base = process.env.BASE_PATH ?? (repo && !isUserSite ? `/${repo}` : '/');

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: indexable
    ? [sitemap({ filter: (page) => !page.includes('/404') && !page.includes('/og/') })]
    : [],
});
