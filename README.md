# Oreno Ramen

Website for Oreno Ramen, Lerchenfelder Straße 74, 1080 Wien. Built with [Astro](https://astro.build) as a static site for GitHub Pages. German at `/`, English at `/en/`, Japanese at `/ja/`.

## Run it

Astro 7 needs Node 22.23.4 or newer (`nvm use 26.13.0` works).

```
npm install
npm run dev
```

`npm run build` writes the site to `dist/`, `npm run preview` serves that build.

## Change the content

| What | Where |
| --- | --- |
| Address, phone, hours, days closed (Betriebsurlaub), booking link, press quote | `src/data/restaurant.ts` |
| Menu: ramen, sides, toppings, dessert with prices; drinks | `src/data/menu.ts` |
| All German, English and Japanese text | `src/i18n/copy.ts` |
| Colours, type, layout | `src/styles/global.css` |
| The bowl-as-record illustration | `src/components/Bowl.astro` |
| Impressum (has fields still to fill in) | `src/pages/impressum.astro` |

Lines marked `UNCONFIRMED` or `CHECK` in the data files come from press, listings or hard-to-read photos and should be checked before going live.

## Deploy to GitHub Pages

1. Push the repository to GitHub with `main` as the branch.
2. In the repository: Settings → Pages → Source: **GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml` and publishes the site.

The site URL and base path are worked out from the repository name in `astro.config.mjs`, so a project site at `https://<owner>.github.io/<repo>/` works without changes. For a custom domain, set `SITE_URL` and `BASE_PATH=/` in the workflow (the lines are there, commented out) and add a `public/CNAME` file containing the domain.

## Search engines

The site is built hidden: every page carries `<meta name="robots" content="noindex, nofollow, noarchive">`, `robots.txt` disallows everything and no sitemap is produced. To open it up, build with `PUBLIC_INDEXABLE=true` (uncomment the `env` block in `.github/workflows/deploy.yml` and add that line).

Two limits: crawlers only read `robots.txt` at the root of a host, so on `owner.github.io/repo/` the meta tag is what does the work; and the GitHub repository itself is public, so the source can still be found on GitHub.

## Languages

A visitor whose browser language differs from the page they landed on is offered their language once, in a small box in the bottom corner. The answer is remembered in the browser (`localStorage`, key `oreno-lang-hint`). The Japanese text was translated without a native proofread and should get one.

## Privacy

No cookies, no trackers, no third-party requests. The only thing stored in the browser is the one flag for the language offer described above. Fonts are self-hosted through Fontsource. The map and the booking page are plain links.

## Share image

`public/og.png` is the picture shown when someone shares a link to the site. It is a screenshot of the page at `/og/`. To refresh it after changing the bowl or the colours, run `npm run build`, `npm run preview`, open `/og/` in a 1200 × 630 window and save the screenshot over `public/og.png`.
